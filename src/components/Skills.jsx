import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", percentage: 90, icon: "💻" },
      // { name: "JavaScript", percentage: 85, icon: "🌟" },
      { name: "HTML/CSS/JS", percentage: 95, icon: "🎨" },
      { name: "BS/Tailwind", percentage: 70, icon: "⚡" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node/Express.js", percentage: 85, icon: "🔧" },
      { name: "Python/Django", percentage: 90, icon: "🐍" },
      { name: "MongoDB", percentage: 85, icon: "🗄️" },
      // { name: "Express.js", percentage: 80, icon: "🚀" }
    ]
  },
  {
    category: "AI/ML",
    items: [
      { name: "LLMs & NLP", percentage: 90, icon: "🤖" },
      { name: "Neural Networks/DL", percentage: 80, icon: "🧠" },
      // { name: "Deep Learning", percentage: 75, icon: "📊" },
      { name: "Computer Vision", percentage: 75, icon: "👁️" }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git/GitLab", percentage: 90, icon: "📚" },
      { name: "Docker", percentage: 70, icon: "🐳" },
      { name: "AWS", percentage: 80, icon: "☁️" },
      // { name: "Firebase", percentage: 85, icon: "🔥" }
    ]
  }
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            entry.target.style.setProperty("--animation-trigger", "running");
            setVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills">
      <h2 ref={headingRef}>Technical Skills</h2>
      <div className="skills-container">
        {skills.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-grid">
              {category.items.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <span className="skill-icon">{skill.icon}</span>
                  <p className="skill-name">{skill.name}</p>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar" 
                      style={{ 
                        width: visible ? `${skill.percentage}%` : '0%'
                      }}
                    >
                      <span className="percentage">{skill.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
