import React from 'react';
import { FaHeart, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Beauty Study Camila</h3>
            <p className="footer-description">
              Tu destino de confianza para realzar tu belleza natural en Tuluá. 
              Especialistas en cejas, pestañas y maquillaje profesional.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/beauty_studio.cam?igsh=MXBqam9yd2Zsa2h0NQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://wa.me/573215161162" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('hero')}>Inicio</a></li>
              <li><a onClick={() => scrollToSection('about')}>Nosotros</a></li>
              <li><a onClick={() => scrollToSection('services')}>Servicios</a></li>
              <li><a onClick={() => scrollToSection('gallery')}>Galería</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li><a>Diseño de Cejas</a></li>
              <li><a>Extensiones de Pestañas</a></li>
              <li><a>Maquillaje Profesional</a></li>
              <li><a>Tratamientos Faciales</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="footer-contact">
              <li>Tuluá, Valle del Cauca</li>
              <li>+57 321 516 1162</li>
              <li>beautystudycamila@email.com</li>
              <li>Lun - Sáb: 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Beauty Study Camila. Todos los derechos reservados.
          </p>
          <p className="footer-love">
            Hecho con <FaHeart className="heart-icon" /> en Tuluá
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
