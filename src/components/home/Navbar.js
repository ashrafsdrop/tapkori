import React from 'react'
import $ from 'jquery';
import { Link } from "react-router-dom";

function Navbar() {
  // const [active, setIsActive] = useState(false);
  window.onscroll = function() {scrollFunction()};
  var element = document.getElementById("body");
  function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      $(".navbar").addClass("fixed-top");
      element.classList.add("header-small");
      $("body").addClass("body-top-padding");

  } else {
      $(".navbar").removeClass("fixed-top");
      element.classList.remove("header-small");
      $("body").removeClass("body-top-padding");
  }
  }
  return (
    <header id="header-section">
  <nav className={`navbar navbar-expand-lg pl-3 pl-sm-0 header-small`} id="navbar">
    <div className="container">
      <div className="navbar-brand-wrapper d-flex w-100">
        <img className="logobrant" src="images/TapKori.png" alt="" />
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="mdi mdi-menu navbar-toggler-icon" />
        </button>
      </div>
      <div
        className="collapse navbar-collapse navbar-menu-wrapper"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav align-items-lg-center align-items-start ml-auto">
          <li className="d-flex align-items-center justify-content-between pl-4 pl-lg-0">
            <div className="navbar-collapse-logo">
              <img src="images/mini.png" alt="" />
            </div>
            <button
              className="navbar-toggler close-button"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="mdi mdi-close navbar-toggler-icon pl-5" />
            </button>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#header-section">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features-section">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#digital-marketing-section">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#feedback-section">
              Testimonials
            </a>
          </li>
          <li className="nav-item btn-contact-us pl-4 pl-lg-0">
          <Link to="/login">
          <button className="btn btn-info">Login</button>
          </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  )
}

export default Navbar