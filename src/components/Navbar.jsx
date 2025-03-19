import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
        duration: 1000
      });
    }
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          closeMenu();
        }}>
          VB
        </a>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li style={{"--i": 1}}><a href="#" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();
          }}>Home</a></li>
          <li style={{"--i": 2}}><a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>About</a></li>
          <li style={{"--i": 3}}><a href="#experience" onClick={(e) => {
            e.preventDefault();
            scrollToSection('experience');
          }}>Experience</a></li>
          <li style={{"--i": 4}}><a href="#projects" onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}>Projects</a></li>
          <li style={{"--i": 5}}><a href="#skills" onClick={(e) => {
            e.preventDefault();
            scrollToSection('skills');
          }}>Skills</a></li>
          <li style={{"--i": 6}}><a href="#extra" onClick={(e) => {
            e.preventDefault();
            scrollToSection('extra');
          }}>ExtraCurricular</a></li>
          <li style={{"--i": 7}}><a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
