// Navbar.js

import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Your Movie App
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
        {/* You can include login/logout buttons or user profile here */}
      </div>
    </nav>
  );
};

export default Navbar;
