import React, { useEffect, useState } from "react";
import {
  redirectToAuthCodeFlow,
  getAccessToken,
  getValidAccessToken,
} from "./AuthSpotify";
import PlaylistCreator from "./PlaylistCreator";

function Appt() {
  const [getPlaylistID, setPlaylistID] = useState("1tw0qyyJabfk29XLVGq25D");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    // if (code) {
    // We're coming back from Spotify authorization
    //   console.log("Authorization code found:", code);
    //   getAccessToken(code).then((token) => {
    //     // setAccessToken(token);
    //     // Clear the code from the URL for cleaner UX
    //     window.history.replaceState(
    //       {},
    //       document.title,
    //       window.location.pathname
    //     );
    //   });
    // } else {
    //   console.log("Getting valid access token...");
    //   // Check if we already have a valid token
    //   getValidAccessToken().then((token) => {
    //     setAccessToken(token);
    //   });
    // }

    // redirectToAuthCodeFlow();
  }, []);

  const handleLogin = () => {
    redirectToAuthCodeFlow();
  };

  return (
    <div>
      <></>
      <div className="Playlist">
        <h1>I love all type of music</h1>
        <h2>Come listen to my top 20 songs of the past month!</h2>
        <PlaylistCreator playlistId={getPlaylistID} />
      </div>
    </div>
  );
}

export default Appt;
