import React, { useRef } from "react";

import "../sass/scss/navbar.scss";

import tim from "../assets/img/logoTIM.png";

import { Link } from "react-router-dom";

function Navbar() {
  const hamburgerRef = useRef(null);
  const navbarRef = useRef(null);

  const handleClick = () => {
    hamburgerRef.current.classList.toggle("active");
    navbarRef.current.classList.toggle("active");
  };

  const handleLinkClick = () => {
    hamburgerRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <nav className="navbar">
      <div ref={hamburgerRef} className="hamburger-lines" onClick={handleClick}>
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>

      <ul ref={navbarRef} className="navbar__list ">
        <li className="navbar__item">
          <Link
            to="/react-etude"
            className="navbar__link"
            onClick={handleLinkClick}
          >
            Intro
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/apprentissages"
            className="navbar__link"
            onClick={handleLinkClick}
          >
            Apprentissages
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/difficulte"
            className="navbar__link"
            onClick={handleLinkClick}
          >
            Difficultés
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/app" className="navbar__link" onClick={handleLinkClick}>
            Application
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/conclusion"
            className="navbar__link"
            onClick={handleLinkClick}
          >
            Conclusion
          </Link>
        </li>

        <div className="navbarLogo">
          <img className="imgNavbar" src={tim} alt="test2" />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
