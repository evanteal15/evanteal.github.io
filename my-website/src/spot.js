import React, { useEffect, useState } from "react";
import {
  redirectToAuthCodeFlow,
  getAccessToken,
  getValidAccessToken,
} from "./AuthSpotify";
import PlaylistCreator from "./PlaylistCreator";

function Appt() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // We're coming back from Spotify authorization
      getAccessToken(code).then((token) => {
        setAccessToken(token);
        // Clear the code from the URL for cleaner UX
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      });
    } else {
      // Check if we already have a valid token
      getValidAccessToken().then((token) => {
        setAccessToken(token);
      });
    }
  }, []);

  const handleLogin = () => {
    redirectToAuthCodeFlow();
  };

  return (
    <div className="App">
      <h1>Spotify Playlist Generator</h1>
      {!accessToken ? (
        <button onClick={handleLogin}>Login with Spotify</button>
      ) : (
        <PlaylistCreator accessToken={accessToken} />
      )}
    </div>
  );
}

export default Appt;
