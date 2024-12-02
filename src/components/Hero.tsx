import React from 'react';
import photo from '../assets/hugo.jpeg';

export const Hero: React.FC = () => (
  <section id="home" className="hero">
    <img src={photo} alt="Hugo Leon Matos" />
    <div>
      <h2>Hello, I'm Hugo Leon Matos</h2>
      <p>
        I am a passionate Web Developer specialized in building beautiful
        and functional websites and applications.
      </p>
    </div>
  </section>
);
