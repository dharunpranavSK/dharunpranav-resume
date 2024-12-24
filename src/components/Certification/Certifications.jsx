import React from 'react';
import './Certifications.css';

const certificationsData = [
  {
    title: "Networking Basics",
    description: "This course covers the foundation of networking and network devices, media, and protocols.",
    image: "\Networking_Basics_Badge20240905-7-p1evdr_page-0001.jpg?height=160&width=300"
  },
  {
    title: "Fundamentals of deep learning",
    description: "The NVIDIA Fundamentals of Deep Learning course provides hands-on training in building, training, and optimizing neural networks for real-world applications using GPU-accelerated tools.",
    image: "\Fundamentals of deep learning.jpg?height=160&width=300"
  },
  {
    title: "Google Data analytics",
    description: "The Google Data Analytics Certificate is an online program that provides foundational skills in data analysis, including data cleaning, visualization, and analysis using tools like SQL, R, and Tableau, preparing learners for entry-level roles in data analytics.",
    image: "\Coursera Data analytics_page-0001.jpg?height=160&width=300"
  },
  {
    title: "Computer Networks And Internet Protocol",
    description: "The NPTEL Computer Networks and Internet Protocol course teaches the fundamentals of computer networking, focusing on protocols, IP addressing, routing, and data transmission within the internet.",
    image: "\Computer Networks And Internet Protocol_page-0001.jpg?height=300&width=300"
  },
  {
    title: "Programming in Java",
    description: "The NPTEL Programming in Java course covers core Java programming concepts such as data types, control structures, object-oriented programming, exception handling, and Java libraries, aiming to build a strong foundation for software development using Java.",
    image: "\Programming in Java_page-0001.jpg?height=300&width=300"
  },
  {
    title: "The Joy Of Computing Using Python",
    description: "The NPTEL Joy of Computing Using Python course introduces the basics of programming with Python, focusing on problem-solving, algorithms, and data structures, while emphasizing hands-on coding experience to make learning engaging and interactive.",
    image: "\The Joy Of Computing Using Python (3)_page-0001.jpg?height=260&width=300"
  },
  {
    title: "Introduction to Git and Github",
    description: "The Introduction to Git and GitHub course teaches the basics of version control with Git and collaboration using GitHub, including managing repositories, branches, and commits.",
    image: "\Coursera introduction to git and github_page-0001.jpg?height=160&width=300"
  },
  {
    title: "Introduction to Cyber Security",
    description: "The Introduction to Cyber Security course covers the fundamental concepts of cybersecurity, including network security, cryptography, threat analysis, and best practices for protecting systems and data from cyber threats.",
    image: "\Coursera introduction to cyber security_page-0001.jpg?height=160&width=300"
  }
];

function Certifications() {
  return (
    <div className="certifications-section">
      <div className="certifications-title">
        <h2>Certifications</h2>
      </div>
      
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="certificate-image">
              <img 
                src={cert.image} 
                alt={cert.title} 
              />
            </div>
            <div className="certificate-content">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;

