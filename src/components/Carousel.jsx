import React, { useEffect, useRef, useState } from "react";
import "./ExtraCurricular.css";

const Carousel = () => {
  const carouselContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const headingRef = useRef(null);

  const items = [
    {
      id: 1,
      content: "Career Counseling Campaigns - 5000+ students",
      image: require("../assets/1.avif"),
    },
    {
      id: 2,
      content: "AI Chatbot Project - Deep Learning",
      image: require("../assets/2.avif"),
    },
    {
      id: 3,
      content: "Environmental Initiatives - Beach Cleanup",
      image: require("../assets/3.jpg"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          // Add animated class and trigger animation
          target.classList.add("animated");
          target.style.setProperty("--animation-trigger", "running"); // Start animation
        } else {
          // Reset animation
          target.classList.remove("animated");
          target.style.setProperty("--animation-trigger", "paused"); // Pause animation
        }
      });
    }, observerOptions);
  
    // Observe the heading
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
  
   
  
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="extra">
      <h2 ref={headingRef}>ExtraCirriculars</h2>
    <div className="carousel">
      <div className="carousel__container" ref={carouselContainerRef}>
        {items.map((item) => (
          <div className="carousel__item" key={item.id}>
            <img src={item.image} alt={item.content} className="carousel__image" />
            <p className="carousel__text">{item.content}</p>
          </div>
        ))}
      </div>
      <div className="carousel__controls">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel__indicator ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Carousel;
