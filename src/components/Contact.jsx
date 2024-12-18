import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';

import animationData from '../assets/contact-animation.json';
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
  const [state, handleSubmit] = useForm("mzzblynl");
  const [open, setOpen] = useState(false);


  // const navigate = useNavigate();

  if (state.succeeded) {
    if(!open){
      setOpen(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      // router.push('/')
    }
    // alert ("Thanks for joining!");
  }

  return (
    <div className="contact-parallax">
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-animation">
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: '300px', width: '300px' }}
            />
          </div>
          <div className="contact-info">
            <h2>Reach Out to Me</h2>
            <p>
              I'm always open to new opportunities and collaborations. Feel free to
              send me a message or connect with me on social media!
            </p>
            <div className="social-media">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            {open && (
              <>
              <div className="modal-overlay"></div>
              <div className="modal">
                <h3>Thanks for Submitting!</h3>
                <p>Your message has been sent successfully.</p>
              </div>
            </>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <input type="email" name="email" placeholder="Your Email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <footer className="footer">
          <p className="footer-text">
            &copy; 2024 Vallabh Suresh Behere | All Rights Reserved
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Contact;
