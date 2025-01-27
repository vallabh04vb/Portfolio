import React, { useRef, useEffect } from 'react';
import './Projects.css';

// Define the projects array at the top level
const projects = [
  {
    title: "E-commerce Website",
    description: "Full-stack MERN e-commerce platform with secure payments, user authentication, and admin dashboard. Generated $5K+ in revenue.",
    link: "https://github.com/vallabh04vb/ECOMMERCE-WEBSITE-ESHWAY-PROJECT.git",
    backgroundImage: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3", // Temporary image URL
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "College Representative Platform",
    description: "Scalable platform connecting 7000+ students nationwide. Features include real-time analytics, automated workflows, and reward system.",
    link: "https://github.com/vallabh04vb/CR-portal.git",
    backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3", // Temporary image URL
    tags: ["React", "Django", "AWS"]
  },
  {
    title: "Abhyuday IITB Main Website",
    description: "Built the official main website for Abhyuday IIT Bombay, the social body of IIT Bombay,showcasing various events and activities of the body",
    link: "https://abhyudayiitb.org",
    backgroundImage: require("../assets/aabhyuday.jpeg"), // Temporary image URL
    tags: ["React", "CSS", "JavaScript"]
  }, {
    title: "TedxIITB Website",
    description: "Modern portfolio website built with React, featuring smooth animations, responsive design, and optimized performance.",
    link: "https://github.com/vallabh04vb/",
    backgroundImage: require("../assets/final2.png"), // Temporary image URL
    tags: ["React", "Tailwind", "Django"]
  }, {
    title: "Competitions Portal",
    description: "Developed and Deployed the portal for the competitions Abhyuday IIT Bombay, hosting more than 1000+ participants and 9+ competitions",
    link: "https://competitions-iitb.onrender.com",
    backgroundImage: require("../assets/comp.jpg"), // Temporary image URL
    tags: ["React", "Djaango", "JavaScript"]
  },
  {
    title: "Computer Vision Gesture Control",
    description: "Developed a computer vision gesture control system using OpenCV and MediaPipe, allowing users to control media players with hand gestures.",
    link: "https://github.com/vallabh04vb/Gesture-Control-System", 
    backgroundImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3", // AI/ML workspace with hand gesture
    tags: ["React", "CSS", "JavaScript"]
  },
  {
    title: "AI RAG based travel Chatbot",
    description: "Developed the Rag system with LLMs for the travel chatbot, allowing users to ask questions about travel destinations and get personalized recommendations.",
    link: "https://github.com/vallabh04vb/TRAVEL-CHAT-LLM.git",
    backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3", // AI chatbot interface with travel elements
    tags: ["React", "CSS", "JavaScript"]
  }
];

const Projects = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          entry.target.style.setProperty("--animation-trigger", "running");
        } else {
          entry.target.classList.remove("animated");
          entry.target.style.setProperty("--animation-trigger", "paused");
        }
      });
    }, observerOptions);

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 ref={headingRef}>Featured Projects</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="card"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${project.backgroundImage})`,
            }}
          >
            <div className="card-content">
              <h3>{project.title}</h3>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <p className="description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                View Project <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
