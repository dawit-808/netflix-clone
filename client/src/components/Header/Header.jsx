import React from "react";
import "./Header.css";

import Logo from "../../assets/netflix-desktop.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#home">
            <img src={Logo} alt="Netflix logo" />
          </a>

          {/* Right icons */}
          <div className="d-flex align-items-center order-lg-1">
            <SearchIcon className="text-white" />
            <NotificationsNoneSharpIcon className="text-white mx-2" />

            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#profile"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <AccountCircleSharpIcon className="text-white display-1" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#action1">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#logout">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Nav */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#tvshows">
                  TvShows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#movies">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#latest">
                  Latest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mylist">
                  MyList
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#languages">
                  Browse by Languages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
