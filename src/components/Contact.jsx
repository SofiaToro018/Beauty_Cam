import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    const whatsappMessage = `Hola! Me gustaría agendar una cita.%0ANombre: ${formData.name}%0AServicio: ${formData.service}%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/573215161162?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-subtitle">
          Agenda tu cita y comienza tu transformación
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Ubicación</h4>
                <p>Tuluá, Valle del Cauca, Colombia</p>
              </div>
            </div>

            <div className="info-item">
              <FaClock className="info-icon" />
              <div>
                <h4>Horario de Atención</h4>
                <p>Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                <p>Domingos: Con cita previa</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h4>Teléfono</h4>
                <p>+57 321 516 1162</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://wa.me/573215161162" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="https://www.instagram.com/beauty_studio.cam?igsh=MXBqam9yd2Zsa2h0NQ==" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                <FaInstagram /> Instagram
              </a>
            </div>

            <div className="map-placeholder">
              <FaMapMarkerAlt className="map-icon" />
              <p>Beauty Study Camila</p>
              <p>Tuluá</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Agenda tu Cita</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu Nombre *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Tu Teléfono *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un Servicio *</option>
                  <option value="cejas">Diseño de Cejas</option>
                  <option value="pestañas">Extensiones de Pestañas</option>
                  <option value="maquillaje">Maquillaje Profesional</option>
                  <option value="tratamientos">Tratamientos Faciales</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Mensaje o consulta"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FaWhatsapp /> Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
