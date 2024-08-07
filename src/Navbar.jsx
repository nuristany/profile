import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css"; // Ensure to import your CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="navbar-desktop">
        <div className="nav-title-container">
          <h3 className="nav-title">Zhakya Nuristany</h3>
        </div>

        <div
          className={`menue ${isOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          role="button"
          tabIndex="0"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div>
          {/* Conditional class name based on isOpen state */}
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <NavLink to="/" onClick={handleMenuToggle}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/contact" onClick={handleMenuToggle}>
              <li>Contact</li>
            </NavLink>
            <NavLink to="/about" onClick={handleMenuToggle}>
              <li>About Me</li>
            </NavLink>
            <NavLink to="/project" onClick={handleMenuToggle}>
              <li>My Projects</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
