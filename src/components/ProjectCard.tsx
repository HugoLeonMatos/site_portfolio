import React from 'react';

type ProjectCardProps = {
  name: string;
  description: string;
  link: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link }) => (
  <div className="project-card">
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </div>
);
