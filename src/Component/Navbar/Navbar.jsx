/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top  mb-5 ">
        <div className="container ">
          <Link
            className="navbar-brand fw-bold py-3 text-white ms-5 ps-4"
            to={""}
          >
            START REACT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse fw-bold"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 me-5 pe-4">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-green nav-link mx-3" : " nav-link mx-3"
                  }
                  to={"portfolio"}
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                    isActive ? "bg-green nav-link mx-3" : " nav-link mx-3"
                  } to={"about"}>
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                    isActive ? "bg-green nav-link mx-3" : " nav-link mx-3"
                  } to={"contact"}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
