// Function to generate random string for code_verifier
function generateRandomString(length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// Function to generate code_challenge from code_verifier
async function generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// Your Client ID and Redirect URI
const CLIENT_ID = "9f92da863667499795e145af129c9b04";
const REDIRECT_URI = "http://localhost:3000/music"; // Or your deployed app's URI
const SCOPES =
  "user-top-read playlist-modify-public playlist-modify-private user-read-private";

export async function redirectToAuthCodeFlow() {
  const verifier = generateRandomString(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("spotify_code_verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", CLIENT_ID);
  params.append("response_type", "code");
  params.append("redirect_uri", REDIRECT_URI);
  params.append("scope", SCOPES);
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  const authUrl = new URL("https://accounts.spotify.com/authorize");
  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

export async function getAccessToken(code) {
  const verifier = localStorage.getItem("spotify_code_verifier");

  const params = new URLSearchParams();
  params.append("client_id", CLIENT_ID);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", REDIRECT_URI);
  params.append("code_verifier", verifier);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const { access_token, refresh_token, expires_in } = await result.json();
  localStorage.setItem("spotify_access_token", access_token);
  localStorage.setItem("spotify_refresh_token", refresh_token);
  localStorage.setItem(
    "spotify_token_expires_at",
    Date.now() + expires_in * 1000
  ); // Store expiry time
  console.log("Access token acquired:", access_token);
  return access_token;
}

export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("spotify_refresh_token");
  if (!refreshToken) return null;

  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refreshToken);
  params.append("client_id", CLIENT_ID); // Client ID is needed for refresh token flow

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  if (!result.ok) {
    console.error("Failed to refresh token:", await result.text());
    localStorage.removeItem("spotify_access_token");
    localStorage.removeItem("spotify_refresh_token");
    localStorage.removeItem("spotify_token_expires_at");
    return null;
  }

  const { access_token, refresh_token, expires_in } = await result.json();
  localStorage.setItem("spotify_access_token", access_token);
  localStorage.setItem("spotify_refresh_token", refresh_token || refreshToken); // refresh_token might not always be returned
  localStorage.setItem(
    "spotify_token_expires_at",
    Date.now() + expires_in * 100000
  );
  return access_token;
}

export function getValidAccessToken() {
  const accessToken = localStorage.getItem("spotify_access_token");
  const expiresAt = localStorage.getItem("spotify_token_expires_at");

  if (accessToken && expiresAt && Date.now() < parseInt(expiresAt, 10)) {
    return Promise.resolve(accessToken);
  } else {
    // Token expired or not present, try to refresh
    return refreshAccessToken();
  }
}
