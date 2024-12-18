import React, { useEffect, useState } from 'react';
import './Skills.css';

const skills = [
  { name: "WordPress", percentage: 90 },
  { name: "HTML/CSS", percentage: 99 },
  { name: "jQuery", percentage: 95 },
  { name: "Design", percentage: 100 },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.skills');
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 70) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="underline"></div>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-percentage">
              <div className="number">
                {visible ? (
                  <DynamicCounter target={skill.percentage} />
                ) : (
                  0
                )}
              </div>
              <span>%</span>
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const DynamicCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < target) {
      const interval = setInterval(() => {
        setCount((prev) => Math.min(prev + 1, target));
      }, 50); // Adjust speed of animation here
      return () => clearInterval(interval);
    }
  }, [count, target]);

  return <>{count}</>;
};

export default Skills;
