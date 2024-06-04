import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const websiteTemp01 = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contactUs':
        return <ContactUs />;
      case 'education':
        return <Education />;
      case 'experience':
        return <Experience />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />
      <div className="container mt-4">
        {renderSection()}
      </div>
    </div>
  );
};

export default websiteTemp01;



const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={() => setActiveSection('home')}>Portfolio</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setActiveSection('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setActiveSection('about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setActiveSection('contactUs')}>Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setActiveSection('education')}>Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setActiveSection('experience')}>Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Experience = () => {
  return (
    <div>
      <h2>Experience</h2>
      <p>This is the experience section.</p>
    </div>
  );
};

const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      <p>This is the education section.</p>
    </div>
  );
};



const ContactUs = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>This is the contact us section.</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about section.</p>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to my portfolio!</p>
    </div>
  );
};