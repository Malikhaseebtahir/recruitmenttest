import React from "react";
import { Link, NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Testing Project
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {user && (
            <>
              <NavLink className="nav-item nav-link" to="/customers">
                Customers
              </NavLink>
              <NavLink className="nav-item nav-link" to="/profile">
                Profile
              </NavLink>
            </>
          )}
          {!user && (
            <React.Fragment>
              <NavLink
                className={`nav-item nav-link ${classes.navbarText}`}
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={`nav-item nav-link ${classes.navbarText}`}
                to="/register"
              >
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
