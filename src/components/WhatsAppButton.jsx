import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '57XXXXXXXXXX';
  
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hola! Me gustaría agendar una cita.`, '_blank');
  };

  return (
    <button className="whatsapp-float" onClick={handleClick} aria-label="Contactar por WhatsApp">
      <FaWhatsapp className="whatsapp-icon" />
    </button>
  );
};

export default WhatsAppButton;
