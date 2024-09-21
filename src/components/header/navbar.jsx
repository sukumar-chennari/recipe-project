import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo and App Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          {/* You can replace the src with an actual logo if available */}
          <img
            src="../src/assets/LOGO.jpg"
            alt="logo"
            className="me-2"
            style={{ height: "80px" }}
          />
          <span className="fs-4 fw-bold">SK's Recipes</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Link to Home Screen */}
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Main Screen
              </Link>
            </li>
            {/* Link to Favourites Screen */}
            <li className="nav-item">
              <Link className="nav-link" to="/favourites">
                Favourites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
