import React, { useRef, useEffect } from 'react';
import './Projects.css';

// Define the projects array at the top level
const projects = [
  {
    title: "E-commerce Website",
    description: "Full-stack MERN e-commerce platform with secure payments, user authentication, and admin dashboard. Generated $5K+ in revenue.",
    link: "https://github.com/project1",
    backgroundImage: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3", // Temporary image URL
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "College Representative Platform",
    description: "Scalable platform connecting 7000+ students nationwide. Features include real-time analytics, automated workflows, and reward system.",
    link: "https://github.com/project2",
    backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3", // Temporary image URL
    tags: ["React", "Firebase", "Analytics"]
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React, featuring smooth animations, responsive design, and optimized performance.",
    link: "https://github.com/project3",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3", // Temporary image URL
    tags: ["React", "CSS", "JavaScript"]
  }, {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React, featuring smooth animations, responsive design, and optimized performance.",
    link: "https://github.com/project3",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3", // Temporary image URL
    tags: ["React", "CSS", "JavaScript"]
  }, {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React, featuring smooth animations, responsive design, and optimized performance.",
    link: "https://github.com/project3",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3", // Temporary image URL
    tags: ["React", "CSS", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React, featuring smooth animations, responsive design, and optimized performance.",
    link: "https://github.com/project3",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3", // Temporary image URL
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
