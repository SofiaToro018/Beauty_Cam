import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      service: 'Diseño de Cejas',
      rating: 5,
      comment: 'Excelente servicio! Mis cejas quedaron perfectas. El diseño es exactamente lo que buscaba. Super recomendado.',
      image: '👩'
    },
    {
      name: 'Laura Martínez',
      service: 'Extensiones de Pestañas',
      rating: 5,
      comment: 'Las mejores extensiones que me he hecho. Quedaron súper naturales y han durado mucho tiempo. Camila es una profesional.',
      image: '👱‍♀️'
    },
    {
      name: 'Carolina Ruiz',
      service: 'Maquillaje de Novia',
      rating: 5,
      comment: 'Me maquillé para mi boda y quedé encantada! Lucí hermosa todo el día. Muchas gracias por hacer mi día especial aún más perfecto.',
      image: '👰'
    },
    {
      name: 'Andrea López',
      service: 'Laminado de Cejas',
      rating: 5,
      comment: 'Increíble el resultado del laminado. Mis cejas se ven más pobladas y definidas. El trato es súper profesional.',
      image: '👩‍🦰'
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">Testimonios</h2>
        <p className="section-subtitle">
          Lo que dicen nuestras clientas satisfechas
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              className="testimonial-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FaQuoteLeft className="quote-icon" />
              
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <span>{testimonial.image}</span>
                </div>
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <p className="service-name">{testimonial.service}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="testimonial-comment">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
