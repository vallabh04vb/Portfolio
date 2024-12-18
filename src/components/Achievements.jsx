import React from 'react';
import './Achievements.css';

const achievements = [
  { title: "JEE Advanced", description: "Cleared JEE Advanced among 0.25 million students." },
  { title: "MHTCET Score", description: "Scored 98.20 percentiles, showcasing aptitude in STEM." },
  { title: "National Cyber Olympiad Gold", description: "Awarded Gold medal in NCO by SOF in India." }
];

const Achievements = () => (
  <div className="achiv-parallax">
  <section id='achievements' className="achievements" data-aos="fade-right">
    <h2>Achievements</h2>
    <div className="achievement-grid">
      {achievements.map((ach, idx) => (
        <div className="achievement-card" key={idx} data-aos="zoom-in">
          <h3>{ach.title}</h3>
          <p>{ach.description}</p>
        </div>
      ))}
    </div>
  </section>
  </div>
);

export default Achievements;
