import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-link" style={{ listStyleType: "none" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <li>Home</li>
        </Link>
        <Link to="/About" style={{ textDecoration: "none", color: "black" }}>
          <li>About</li>
        </Link>
        <Link to="/Resume" style={{ textDecoration: "none", color: "black" }}>
          <li>Resume</li>
        </Link>
        <Link to="/Projects" style={{ textDecoration: "none", color: "black" }}>
          <li>Projects</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
