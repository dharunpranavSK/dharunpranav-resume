import React from 'react';
import './skills.css';

const skillsData = [

  {
    category: "Development Tools",
    skills: ["Python", "Java", "C", "SQL", "HTML/CSS", "JavaScript", "React.js", "Node.js"]
  },
  {
    category: "Libraries & Frameworks",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "OpenCV"]
  },
  
  {
    category: "Data Visualization",
    skills: ["Power BI", "Excel"]
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"]
  }
];

export function Skills() {
  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      
      {skillsData.map((category) => (
        <div key={category.category}>
          <h3 className="skills-title">{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

