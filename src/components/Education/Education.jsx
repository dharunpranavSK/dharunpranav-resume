import React from 'react';
import './Education.css';

const educationData = [
  {
    school: "Green Park Matric Hr Sec School, Namakkal",
    degree: "10TH STD",
    score: "468/500 for the 2016 - 2017",
    logo: "\GPLogo.png?height=48&width=48"
  },
  {
    school: "Green Park Matric Hr Sec School, Namakkal",
    degree: "12TH STD",
    score: "502/600 for the 2018 - 2019",
    logo: "\GPLogo.png?height=48&width=48"
  },
  {
    school: "Bannari Amman Institute of Technology",
    degree: "B.Tech AI&DS",
    score: "8.41/10 CGPA for the 2022 - 2026",
    logo: "\BITLogo.png?height=50&width=50"
  }
];

function Education() {
  return (
    <section className="education-section">
      <div className="education-title">
        <h2>Education</h2>
      </div>
      
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="school-logo">
              <img 
                src={edu.logo} 
                alt={`${edu.school} logo`}
              />
            </div>
            <div className="education-info">
              <h3 className="school-name">{edu.school}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="score">{edu.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

