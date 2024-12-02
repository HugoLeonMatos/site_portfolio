import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    name: 'Trybetunes App',
    description: 'Trybetunes is a music app built with React that uses an API to display songs and features a basic login system.',
    link: 'https://trybe-tunes-musicas.vercel.app/',
  },

  // Adicione mais projetos aqui
];

export const Projects: React.FC = () => (
  <section id="projects" className="projects">
    <h2>My Projects</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);
