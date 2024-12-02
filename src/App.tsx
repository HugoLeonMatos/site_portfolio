import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import Contact from './components/Contact';
import { Skills } from './components/Skills';

const App: React.FC = () => {
  return (
    <div>
      {/* Cabeçalho */}
      <Header />

      {/* Seção Hero */}
      <Hero />
      <Skills />


      {/* Seção Projetos */}
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
