import React from 'react';
import { FaEye, FaPaintBrush, FaSpa } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaEye />,
      title: 'Diseño de Cejas',
      description: 'Microblading, laminado y diseño personalizado de cejas para realzar tu mirada.',
      features: ['Microblading', 'Laminado de Cejas', 'Diseño 3D', 'Depilación']
    },
    {
      icon: <FaEye />,
      title: 'Extensiones de Pestañas',
      description: 'Pestañas voluminosas y naturales que resaltan la belleza de tus ojos.',
      features: ['Extensión Pelo a Pelo', 'Efecto Volumen', 'Lifting de Pestañas', 'Tinte']
    },
    {
      icon: <FaPaintBrush />,
      title: 'Maquillaje Profesional',
      description: 'Maquillaje para todo tipo de eventos, desde lo natural hasta lo glamuroso.',
      features: ['Maquillaje Social', 'Maquillaje de Novia', 'Automaquillaje', 'Asesoría Personalizada']
    },
    {
      icon: <FaSpa />,
      title: 'Tratamientos Faciales',
      description: 'Cuida tu piel con nuestros tratamientos especializados y rejuvenecedores.',
      features: ['Limpieza Facial', 'Hidratación', 'Anti-edad', 'Mascarillas']
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Servicios especializados para realzar tu belleza natural
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-button">Reservar Ahora</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
