import React from "react";
import "./Navbar.css";
// import {BrowserRouter as Router,NavLink,NavItem} from 'react-router-dom'
import { BsFillTelephoneFill, BsAlarmFill, BsJustify } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      {/* ****************************************
                Top-bar container
        *******************************************/}

      <section
        id="top-container"
        className="d-flex align-items-center fixed-top topbar-transparent"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-end">
          <i className="d-flex align-items-center bi bi-telephone">
            <BsFillTelephoneFill />
            <span> +1 23423 24323 4423</span>
          </i>
          <i className="ms-4 d-none d-lg-flex align-items-center">
            <BsAlarmFill />
            <span> Mon-Sat: 11:00 AM - 23:00 PM</span>
          </i>
        </div>
      </section>

      {/* ****************************************
                Navbar-container
        *******************************************/}
      {/* <Router> */}
      <header
        id="header-container"
        className="fixed-top align-items-center header-transparent"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          {/* Navbar-logo here */}
          <div className="logo me-auto">
            <h1>
              <Link
                className="logo-heading animated infinite heartBeat"
                onClick={scrollToTop}
              >
                Delicious
              </Link>
            </h1>
          </div>

          <nav id="navbar" className="navbar order-list order-lg-0">
            {/* <ul> */}

            <Link
              className="nav-link"
              activeClass="active"
              to="hero-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="whyUs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Why Us
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="menu"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Menu
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="specials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Specials
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Events
            </Link>

            <Link
              className="nav-link"
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Gallery
            </Link>

            <Link
              className="nav-link"
              activeClass="active"
              to="chefs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Chefs
            </Link>
            <i className="mobile-nav-toggle">
              {" "}
              <BsJustify />
            </i>
          </nav>
          <Link
            to="bookTable"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="book-a-table scrollto"
          >
            book a table
          </Link>
        </div>
      </header>
      {/* </Router> */}
    </>
  );
};

export default Navbar;
