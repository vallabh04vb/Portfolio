import React, { useState } from 'react';
import './Leadership.css';

const leadershipRoles = [
  {
    title: "Web Manager",
    organization: "Abhyuday, IIT Bombay",
    duration: "Apr ’24 - Present",
    description: [
      "Developed TEDxIITBOMBAY website with 2000+ enrollments via OTP confirmation.",
      "Integrated OAuth 2.0 for authentication, optimized SEO, and deployed using AWS.",
      "Pioneered a team of 800+ volunteers to execute 10+ competitions and 50+ events."
    ]
  },
  {
    title: "Tech & Operations Head",
    organization: "Eshway | IIT Bombay Startup",
    duration: "Jan ’23 - Jun ’24",
    description: [
      "Delivered 15+ web and app development projects, overseeing execution end-to-end.",
      "Successfully mentored the EshVision web-dev program for 700+ students.",
      "Managed teams and freelancers, ensuring smooth project delivery."
    ]
  },
  {
    title: "College Representative",
    organization: "Abhyuday, IIT Bombay",
    duration: "Jul ’23",
    description: [
      "Built a Django backend platform with 7k+ nationwide registrations.",
      "Implemented leaderboards, automated invites, and Google Auth for engagement.",
      "Boosted user engagement by 25% with backend optimization for scalability."
    ]
  }
];

const Leadership = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="leadership" className="leadership" data-aos="fade-up">
      <h2 onClick={toggleOpen} className="leadership-header">
        Leadership
      </h2>
      {isOpen && (
        <div className="leadership-timeline">
          {leadershipRoles.map((role, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{role.title}</h3>
                <p className="organization">{role.organization}</p>
                <p className="duration">{role.duration}</p>
                <ul>
                  {role.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Leadership;
