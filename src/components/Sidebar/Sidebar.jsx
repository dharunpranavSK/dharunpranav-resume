import React from 'react';
import './Sidebar.css'; // We'll create a separate CSS file for Sidebar
import { CgMail } from "react-icons/cg";
import { FiLink } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md"
import { MdLocationOn } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='component'>
      <img src="src\assets\dp resume pic.jpg" alt="Profile" className="profile-img" />
      <h1>Dharun Pranav S K</h1>
      <h2>Aspiring Software Developer</h2>
      <p className="quote">
       
      </p>
      <div className='line'></div>
<div className='personnel-info'>
    <div className='info'>
      <div>
        <CgMail size={30}/>
      </div>
      <div>
      <h4>Email</h4>
      <p>dharunpranavsk@gmail.com</p>
      </div>
      </div>
      <div className='info'>
      <div>
        <FiLink  size={30}/>
      </div>
      <div>
      <h4>Website</h4>
        <p><a href="https://dharunpranavsk.github.io/LinkVault/" target="_blank" rel="noopener noreferrer">LinkVault</a></p> 
      </div>
      </div>
      <div className='info'>
      <div>
        <MdLocalPhone  size={30}/>
      </div>
      <div>
      <h4>Mobile</h4>
        <p>(+91) 9345509925</p>
      </div>
      </div>
       <div className='info'>
      <div>
        <MdLocationOn   size={30}/>
      </div>
      <div>
      <h4>Address</h4>
      <p><a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwqsgyyzJg9OLIS8xNzM5OzAEAQnkGhg&q=namakkal&rlz=1C1RXQR_enIN1088IN1088&oq=namakkal&gs_lcrp=EgZjaHJvbWUqCggBEC4YsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyCggCEAAYsQMYgAQyBwgDEC4YgAQyBwgEEAAYgAQyEggFEC4YFBivARjHARiHAhiABDINCAYQLhivARjHARiABDINCAcQABiDARixAxiABDIHCAgQLhiABDIQCAkQABiDARixAxiABBiKBdIBCDMwMjdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">Namakkal, India</a></p> 
      </div>
      </div>
      <div className='line'></div>
    </div>
      <div>
        <h3>Languages</h3>
        <div className='info'>
      <div>
      <img src="src\assets\indian flag.png" alt="Profile" className="language-img" />
      </div>
      <div>
      <h4>Tamil</h4>
      <p>Native</p>
      </div>
      </div>
      <div className='info'>
      <div>
      <img src="src\assets\uk flag.png" alt="Profile" className="language-img" />
      </div>
      <div>
      <h4>Engilsh</h4>
      <p>Professional Working</p>
      </div>
      </div>
      </div>
      <div className='line'></div>
    <div>

    </div>
    <div>
      <h3>Social</h3>
      
    <div className='info'>
    <div>
      <img src="src\assets\LinkedIn logo.png" alt="Profile" className="language-img" />
      </div>
      <div>
      <h4>Linked In</h4>
      <p><a href="https://www.linkedin.com/in/dharunpranavsk/" target="_blank" rel="noopener noreferrer">dharunpranavsk</a></p> 
      </div>
      </div>
      <div className='info'>
      <div>
      <img src="src\assets\instagram logo.jpeg" alt="Profile" className="language-img" />
      </div>
      <div>
      <h4>Instagram</h4>
      <p><a href="https://www.instagram.com/dharun_pranav/">dharun_pranav</a></p> 
      </div>
      </div>
      <div className='info'>
      <div>
      <img src="src\assets\github logo.png" alt="Profile" className="language-img" />
      </div>
      <div>
      <h4>Git Hub</h4>
      <p><a href="https://github.com/dharunpranavSK/" target="_blank" rel="noopener noreferrer">dharunpranavSK</a></p> 
      </div>
      </div>
      </div>
     
      <div className='line'></div>
      </div>
    </div>
  );
};

export default Sidebar;
