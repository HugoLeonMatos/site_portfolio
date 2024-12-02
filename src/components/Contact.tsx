import React from 'react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" style={footerStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Contact</h2>
        <p style={textStyle}>Hugo Leon Matos</p>
        <p style={textStyle}>
          Email: <a href="mailto:hugoleon@outlook.com" style={linkStyle}>hugoleon@outlook.com</a>
        </p>
        <p>Phone: + 55 13 99726-0578</p>
        <div style={socialLinksStyle}>
          <a href="https://github.com/HugoLeonMatos" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/hugo-leon-76275212b/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

// Estilos inline (mover para codigo separado)
const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem 0',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 1rem',
};

const titleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
};

const textStyle: React.CSSProperties = {
  margin: '0.5rem 0',
};

const socialLinksStyle: React.CSSProperties = {
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
};

const linkStyle: React.CSSProperties = {
  color: '#00bcd4',
  textDecoration: 'none',
};

export default Contact;
