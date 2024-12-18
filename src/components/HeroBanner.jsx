import React, { useEffect } from 'react';
import './HeroBanner.css';
import profilePhoto from '../assets/vb_no_bg.png';
// import vb_pic from "../assets/vb_pic.jpg"
// import formalpic from '../assets/vb_formal.png';

const HeroBanner = () => {
  useEffect(() => {
    const titleElement = document.querySelector('.hero-title');
    const subtitleElement = document.querySelector('.hero-subtitle');
    if (titleElement) {
      titleElement.classList.add('animated');
    }
    if (subtitleElement) {
      subtitleElement.classList.add('animated');
    }
  }, []);
  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about'); // Adjust the section ID to match your next section
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="parallax-hero">
      <section id="hero" className="hero-banner" data-aos="fade-up">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Vallabh Suresh Behere</h1>
            <p className="hero-subtitle">Full-Stack Developer & AI/ML Enthusiast at IIT Bombay</p>
            <div className="scroll-down" onClick={handleScrollDown}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="hero-image">
            <img src={profilePhoto } alt="Vallabh Suresh Behere" />


          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
