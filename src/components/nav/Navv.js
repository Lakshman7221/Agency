import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
const Navv = () => {
  return (
    <div>
      <nav className="mainNav navbar navbar-expand-sm">
        <div className="container-fluid">
          <h1>
            <NavLink to="/Agency/" className="nav-link">
              AGENCY
            </NavLink>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse pagesNames" id="mynavbar">
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/whyus" className="nav-link" href="#">
                    WHY US
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" href="#">
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link" href="#">
                    SERVICES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/portifolio" className="nav-link" href="#">
                    PORTIFOLIO
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/process" className="nav-link" href="#">
                    PROCESS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/reviews" className="nav-link" href="#">
                    REVIEWS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/our-skills" className="nav-link" href="#">
                    OUR SKILLS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contacts" className="nav-link" href="#">
                    CONTACTS
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* <form className="d-flex">
              <button className="btn btn-outline-warning btn-sm" type="button">
                Login
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-outline-warning btn-sm" type="button">
                Register
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navv;
