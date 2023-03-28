import React from "react";
import logo from "../../assets/images/main_logo.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg h-5 ">
        <a className="navbar-brand" href="#">
          <img src={logo} className="logo" width="115" height="auto" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link " aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="./abt.html">
              About us
            </a>
            <a className="nav-link" href="./appoinment.html">
              Book an appoinment
            </a>
            <a className="nav-link" href="#">
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
