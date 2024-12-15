import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      {/* User Info */}
      <div className="user-info">
        <span className="user-icon">👤</span> {/* Placeholder for user icon */}
        <div className="user-details">
          <a href="#" className="user-name">
            Dr. Riaz
          </a>
          <span className="user-role">Director ORIC</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;