import React from "react";
import "./Projects.css";

// Add background images to your project data
const projects = [
  {
    title: "E-commerce Website",
    description: "Developed with MERN stack, generated $5K in revenue.",
    link: "https://github.com/project1",
    backgroundImage: require("../assets/ecom.jpeg"), // Add your image path here
  },
  {
    title: "College Representative Platform",
    description: "Achieved 7k+ nationwide registrations with incentives.",
    link: "https://github.com/project2",
    backgroundImage: require("../assets/cr.jpg"), // Add your image path here
  },
  {
    title: "TEDx IITB Website",
    description: "Functional website with 2000+ registrations.",
    link: "https://github.com/project3",
    backgroundImage: require("../assets/final2.png"), // Add your image path here
  },
  {
    title: "PROFECTUS INTERNSHIP PORTAL",
    description: "Functional website with 2000+ registrations.",
    link: "https://github.com/project3",
    backgroundImage: require("../assets/profectus.jpeg"), // Add your image path here
  },
  {
    title: "LLAMA TRAVEL CHATBOT",
    description: "Functional website with 2000+ registrations.",
    link: "https://github.com/project3",
    backgroundImage: require("../assets/chabot.jpeg"), // Add your image path here
  },
  {
    title: "ML PREDICTIVE MODELS",
    description: "Functional website with 2000+ registrations.",
    link: "https://github.com/project3",
    backgroundImage: require("../assets/models.avif"), // Add your image path here
  },
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="projects-container">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="card"
          style={{
            backgroundImage: `url(${project.backgroundImage})`, // Use `url()` to set the image
            // Set the height
          
          }}
        >
          <p>
            <span>{project.title}</span>
            <span className="details">
              {project.description}
              <br />
              <br />
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </span>
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
