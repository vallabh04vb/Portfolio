import React, { useState, useRef, useEffect } from 'react';
import './Experience.css';
import userImage from '../assets/vb_no_bg.png'; // Replace with the actual image path
// import cvFile from '../assets/Vallabh_Behere_CV.pdf';

const experiences = [
  {
    role: "Software Development Intern",
    company: "IITB Research Park",
    companyImage: require("../assets/rp.png"), // Add the image path here
    duration: "Jul ’23 - Sep ’23",
    description: [
      "Integrated and debugged a dynamic I-coins Calculator app into a Django backend, boosting engagement by 25%.",
      "Optimized AWS systems by integrating CI/CD pipelines and unit tests, increasing deployment reliability by 30%.",
      "Integrated 5+ RESTful APIs for data fetching & enabling informed decision-making through data-driven insights."
    ]
  },
  {
    role: "Full-Stack Developer & LLM Researcher Intern",
    company: "Asva.AI",
    companyImage: require("../assets/asva.jpg"), // Add the image path here
    duration: "May ’24 - Jun ’24",
    description: [
      "Built a B2B product Resume Parser with CTO by leveraging OpenAI & OCR, achieving $10K revenue growth.",
      "Deployed fine-tuned LLMs on rented GPUs, incorporating features like chat history, generating $8K revenue.",
      "Synchronized Hugging Face LLMs, including LLAMA 3, which are 4x faster & 20x cheaper than GPT-4 Turbo."
    ]
  },
  {
    role: "Tech & Operations Head",
    company: "Eshway | IIT Bombay Startup",
    companyImage: require("../assets/eshway.jpeg"), // Add the image path here
    duration: "Jan ’23 - Jun ’24",
    description: [
      "Delivered 15+ diverse web & app development projects with MERN stack, overseeing end-to-end execution.",
      "Successfully piloted 10+ projects, managed 5+ teams and 7+ freelancers, ensuring seamless digital service delivery.",
      "Mentored EshVision free web-dev program for 700+ students, providing learn & earn opportunities."
    ]
  },{
    role: "Tech & Operations Head",
    company: "Eshway | IIT Bombay Startup",
    companyImage: require("../assets/eshway.jpeg"), // Add the image path here
    duration: "Jan ’23 - Jun ’24",
    description: [
      "Delivered 15+ diverse web & app development projects with MERN stack, overseeing end-to-end execution.",
      "Successfully piloted 10+ projects, managed 5+ teams and 7+ freelancers, ensuring seamless digital service delivery.",
      "Mentored EshVision free web-dev program for 700+ students, providing learn & earn opportunities."
    ]
  }
  
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add("animated");
          target.style.setProperty("--animation-trigger", "running");
        } else {
          target.classList.remove("animated");
          target.style.setProperty("--animation-trigger", "paused");
        }
      });
    }, observerOptions);

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience">
      <h2 ref={headingRef}>Experience</h2>
      <div className="experience-container">
        <div className="experience-content">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${expandedIndex === index ? 'expanded' : ''}`}
              style={{ height: expandedIndex === index ? 'auto' : '250px' }}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="experience-header">
                <img src={exp.companyImage} alt={`${exp.company} logo`} className="company-image" />
                <h3 className="experience-title">{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
              </div>
              {expandedIndex === index && (
                <div className="experience-details">
                  <ul>
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button className="read-more" onClick={() => toggleExpand(index)}>
                {expandedIndex === index ? 'Read Less' : 'Read More'}
              </button>
            </div>
          ))}
        </div>
        <div className="user-image-container">
          <img src={userImage} alt="User" className="user-image" />
          <a href="https://drive.google.com/file/d/1uvTSaLQEqFbLjRKwtFw3rXeCHBpPkuRF/view?usp=sharing" download="Vallabh_Behere_CV" className="cv-download-button">
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;