// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./homepage";
import MusicPage from "./music";
import ProjectsPage from "./projects";

function App() {
  return (
    <Router>
      <ul className="nav-bar">
        <li className="nav">
          <Link to="/">Home</Link>
        </li>
        <li className="nav">
          <Link to="/music">Music</Link>
        </li>
        <li className="nav">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav" style={{ float: "right" }}>
          <text>Contact me at evanteal15@gmail.com</text>
        </li>
      </ul>
      {/* <Link to="/">Home</Link> | <Link to="/music">Music</Link> |{" "}
      <Link to="/projects">Projects</Link> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
