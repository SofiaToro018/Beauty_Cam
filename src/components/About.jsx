import React from 'react';
import { FaAward, FaHeart, FaStar } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <p className="section-subtitle">
          Tu belleza en manos expertas en el corazón de Tuluá
        </p>

        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <div className="about-placeholder">
                <span className="placeholder-icon">💄</span>
                <p>Profesionalismo</p>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3>Beauty Study Camila</h3>
            <p>
              En <strong>Beauty Study Camila</strong>, nos especializamos en realzar tu 
              belleza natural a través de servicios profesionales de cejas, pestañas y 
              maquillaje. Ubicados en Tuluá, nos enorgullece ser tu destino de confianza 
              para lucir radiante en cada ocasión.
            </p>
            <p>
              Con años de experiencia y pasión por el arte de la belleza, nuestro equipo 
              está comprometido en brindarte resultados excepcionales que superen tus 
              expectativas. Utilizamos productos de alta calidad y técnicas innovadoras 
              para garantizar tu satisfacción.
            </p>

            <div className="about-features">
              <div className="feature-card">
                <FaAward className="feature-icon" />
                <h4>Experiencia</h4>
                <p>Años de trayectoria en el sector de la belleza</p>
              </div>
              <div className="feature-card">
                <FaHeart className="feature-icon" />
                <h4>Pasión</h4>
                <p>Amor por lo que hacemos en cada servicio</p>
              </div>
              <div className="feature-card">
                <FaStar className="feature-icon" />
                <h4>Calidad</h4>
                <p>Productos premium y resultados garantizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
