import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Sidebar from './Sidebar';
import NavLinks from './NavLinks';
import Backdrop from './Backdrop';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(true);
  }
  
  const toggleClose = () => {
    setIsOpen(false);
  }
  
  return (
    <nav className="container">
      <div className="nav-logo">
        <h1>WEBDEV WHISNANT</h1>
      </div>
      <div className="nav-links">
        <a href="#home" alt="Home">
          Home
        </a>
        <a href="#about" alt="About Me">
          About Me
        </a>
        <a href="#portfolio" alt="Portfolio">
          Portfolio
        </a>
        <a href="#contacts" alt="Contacts">
          Contacts
        </a>
      </div>
      <div className="nav-hamburger">
        <button className="nav-hamburger-btn" type="button" onClick={toggleOpen}>
          <FontAwesomeIcon className="nav-hamburger-icon" icon={faBars} />
        </button>
        { isOpen && <Backdrop onClick={toggleClose} />}
          <Sidebar show={isOpen} onClick={toggleClose} >
            <NavLinks />
          </Sidebar>
      </div>
      
    </nav>
  );
}

export default Navbar;