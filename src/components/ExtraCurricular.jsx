import React, { useRef, useEffect, useState } from 'react';
import './ExtraCurricular.css';

const activities = [
  {
    id: 1,
    title: "Career Counseling",
    description: "Led career counseling campaigns impacting 5000+ students nationwide through workshops and mentoring sessions",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
    link: "https://example.com/career",
  },
  {
    id: 2,
    title: "YouTube Channel",
    description: "Creating educational content on tech, coding, and career guidance. 1000+ subscribers and growing community",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3",
    link: "https://youtube.com/@your-channel",
    isYoutube: true
  },
  {
    id: 3,
    title: "AI Research",
    description: "Conducted research on LLMs and their applications in educational technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3",
    link: "https://example.com/ai",
  },
  {
    id: 4,
    title: "Environmental Initiative",
    description: "Led beach cleanup drives and environmental awareness campaigns",
    image: "https://images.unsplash.com/photo-1618477202872-89cec6f8d62e?ixlib=rb-4.0.3",
    link: "https://example.com/environment",
  }
];

const ExtraCurricular = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const headingRef = useRef(null);
  const carouselRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

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
    <section className="extra" id="extra">
      <h2 ref={headingRef}>ExtraCurricular</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>←</button>
        <div className="carousel-track" ref={carouselRef}>
          {activities.map((activity, index) => {
            const position = (index - activeIndex + activities.length) % activities.length;
            return (
              <div 
                key={activity.id}
                className={`carousel-item ${position === 0 ? 'active' : ''}`}
                style={{
                  '--position': position,
                  '--total': activities.length,
                }}
              >
                <div className="carousel-card">
                  <div className="carousel-image" style={{ backgroundImage: `url(${activity.image})` }}>
                    {activity.isYoutube && (
                      <div className="youtube-badge">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                          <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="carousel-content">
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                    <a href={activity.link} target="_blank" rel="noopener noreferrer">
                      Learn More <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="carousel-button next" onClick={nextSlide}>→</button>
        <div className="carousel-indicators">
          {activities.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular; 