import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '57XXXXXXXXXX';
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com';

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line-1">Beauty Study</span>
            <span className="title-line-2">Camila</span>
          </h1>
          <p className="hero-subtitle">
            Especialistas en Cejas, Pestañas y Maquillaje
          </p>
          <p className="hero-description">
            Realza tu belleza natural con nuestros servicios profesionales en Tuluá. 
            Tu mejor versión está a un paso de distancia.
          </p>
          <div className="hero-buttons">
            <a href={`https://wa.me/${whatsappNumber}?text=Hola! Me gustaría agendar una cita.`} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FaWhatsapp /> Reserva tu Cita
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FaInstagram /> Síguenos
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="image-placeholder">
              <div className="beauty-icon">✨</div>
              <p>Belleza Profesional</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Desliza para ver más</span>
      </div>
    </section>
  );
};

export default Hero;
