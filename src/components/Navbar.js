import React, { useState } from 'react';
import "../sass/scss/navbar.scss";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <nav className ="navbar">
  
  <div class="container nav-container ">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
            
      {/* <div className="navbar__toggle" onClick={toggleOpen}>
        <i className={`fa fa-bars ${isOpen ? 'open' : ''}`} />
      </div> */}
      
      <ul className={`navbar__list ${isOpen ? 'navbar__list--open' : ''}`}>
      <li className="navbar__item">
        <Link to="/home" className="navbar__link">Page d'accueil</Link>
      </li>
      <li className="navbar__item">
        <Link to="/about" className="navbar__link">À propos de moi</Link>
      </li>
      <li className="navbar__item">
        <Link to="/profile" className="navbar__link">Profil</Link>
      </li>
      <li className="navbar__item">
        <Link to="/services" className="navbar__link">Services</Link>
      </li>
      <li className="navbar__item">
        <Link to="/gallerie" className="navbar__link">Galerie</Link>
      </li>
      <li className="navbar__item">
        <Link to="/retroaction" className="navbar__link">Rétroaction</Link>
      </li>
    </ul>

    
    </div>  
        </nav>
        
  );
};

export default Navbar