import React, { useState, useEffect } from "react";

export default function PlaylistCreator({ playlistId }) {
  const [playlistLink, setPlaylistLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createMonthlyTopSongsPlaylist = async () => {
    // setLoading(true);
    // setError(null);
    // try {
    //   // 1. Get User ID
    //   const userResponse = await fetch("https://api.spotify.com/v1/me", {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   });
    //   if (!userResponse.ok)
    //     throw new Error(`Spotify API error: ${userResponse.statusText}`);
    //   const userData = await userResponse.json();
    //   const userId = userData.id;
    //   // 2. Get User's Top Tracks (short_term = past 4 weeks)
    //   const topTracksResponse = await fetch(
    //     "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20",
    //     {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     }
    //   );
    //   if (!topTracksResponse.ok)
    //     throw new Error(`Spotify API error: ${topTracksResponse.statusText}`);
    //   const topTracksData = await topTracksResponse.json();
    //   const trackUris = topTracksData.items.map((track) => track.uri);
    //   if (trackUris.length === 0) {
    //     setError(
    //       "Could not find any top tracks for the past month. Listen to some music!"
    //     );
    //     setLoading(false);
    //     return;
    //   }
    //   // 3. Create a new playlist
    //   const playlistResponse = await fetch(
    //     `https://api.spotify.com/v1/users/${userId}/playlists`,
    //     {
    //       method: "POST",
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name: "My 20 Most Played Songs (Past Month)",
    //         description:
    //           "Automatically generated playlist from your Spotify listening habits.",
    //         public: false, // Set to true if you want it public
    //       }),
    //     }
    //   );
    //   if (!playlistResponse.ok)
    //     throw new Error(`Spotify API error: ${playlistResponse.statusText}`);
    //   const playlistData = await playlistResponse.json();
    //   const playlistId = playlistData.id;
    //   // 4. Add tracks to the playlist
    //   await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       uris: trackUris,
    //     }),
    //   });
    //   setPlaylistLink(playlistData.external_urls.spotify);
    // } catch (err) {
    //   console.error("Error creating playlist:", err);
    //   setError(err.message || "Failed to create playlist.");
    // } finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    setPlaylistLink(`https://open.spotify.com/playlist/${playlistId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* <button onClick={createMonthlyTopSongsPlaylist} disabled={loading}>
        {loading ? "Creating Playlist..." : "Create My Monthly Top 20 Playlist"}
      </button> */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {/* {playlistLink && (
        <p>
          Playlist created!{" "}
          <a href={playlistLink} target="_blank" rel="noopener noreferrer">
            Open in Spotify
          </a>
        </p>
      )} */}
      <iframe
        src={
          playlistLink
            ? playlistLink.replace("open.spotify.com", "open.spotify.com/embed")
            : ""
        }
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        title="Spotify Playlist Example"
      ></iframe>
    </div>
  );
}

// export default PlaylistCreator;
