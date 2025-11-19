import React from "react";
import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// // import App from "./toolbar";
// // import Appt from "./spot";
// import reportWebVitals from "./reportWebVitals";
import PlaylistCreator from "./PlaylistCreator";

export default function MusicPage() {
  const [getPlaylistID, setPlaylistID] = useState("1tw0qyyJabfk29XLVGq25D");

  return (
    <div>
      <div className="Music Intro">
        <h1>Welcome to My Music Blog</h1>
        <h2></h2>
      </div>

      <div className="My Songs">
        <h2>
          Hopefully this section will showcase music I plan to make in the
          future. For now, here are some compositions I made in my intro to
          music production class! (Heads up: they are a bit rough around the
          edges)
        </h2>

        <ul>
          <li>
            <h3>The Tube - My first composition in abelton</h3>
            <audio controls>
              <source src="/music/found_sound.wav" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
          <li>
            <h3>Funky Beat - My first Abelton Push project</h3>
            {/* <audio controls>
              <source src="/music/synthwave_journey.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio> */}
          </li>
        </ul>
      </div>

      <div className="Playlist">
        <PlaylistCreator playlistId={getPlaylistID} />
      </div>
    </div>
  );
}
