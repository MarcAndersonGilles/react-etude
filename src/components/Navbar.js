import React from 'react';
import "../sass/scss/navbar.scss";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav class ="navbar">
        <ul className="navbar__list">
      <li className="navbar__item">
        <Link to="/home" className="navbar__link">Home</Link>
      </li>
      <li className="navbar__item">
        <Link to="/about" className="navbar__link">About</Link>
      </li>
      <li className="navbar__item">
        <Link to="/profile" className="navbar__link">Profile</Link>
      </li>
    </ul>
        </nav>
  );
}

export default Navbar