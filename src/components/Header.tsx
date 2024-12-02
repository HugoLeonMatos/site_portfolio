import React from 'react';


export const Header: React.FC = () => (
  <header>
    <h1>Hugo Leon Matos</h1>
    <nav>
      <a href="#home" className="nav-link">Home</a><br />
      <a href="#projects" className="nav-link">Projects</a><br />
      <a href="#skills" className="nav-link">Skills</a><br />
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  </header>
);
