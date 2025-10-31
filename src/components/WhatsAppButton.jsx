import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/573215161162?text=Hola! Me gustaría agendar una cita.', '_blank');
  };

  return (
    <button className="whatsapp-float" onClick={handleClick} aria-label="Contactar por WhatsApp">
      <FaWhatsapp className="whatsapp-icon" />
    </button>
  );
};

export default WhatsAppButton;
