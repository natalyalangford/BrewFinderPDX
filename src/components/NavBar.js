import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

export default function NavBar() {
  const linkClass = ({ isActive }) => "nav-link" + (isActive ? " active" : "");

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-title brand">BrewFinderPDX</div>

      <div className="nav-links">
        <NavLink to="/home" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/cafes" className={linkClass}>
          Cafe Directory
        </NavLink>
        <NavLink to="/metrics" className={linkClass}>
          Cafe Stats
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </div>
    </nav>
  );
}
