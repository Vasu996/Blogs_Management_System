import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";  // Import the CSS file

function Navbar() {
  return (
    <nav>
      {/* Left - Logo */}
      <Link to="/" className="nav-logo">Blog Management</Link>

      {/* Right - Links and Search Bar in a Styled Container */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blog/create">Create Blog</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
