import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const images = [
    { id: 1, category: 'cejas', alt: 'Diseño de cejas' },
    { id: 2, category: 'pestañas', alt: 'Extensiones de pestañas' },
    { id: 3, category: 'maquillaje', alt: 'Maquillaje profesional' },
    { id: 4, category: 'cejas', alt: 'Microblading' },
    { id: 5, category: 'pestañas', alt: 'Lifting de pestañas' },
    { id: 6, category: 'maquillaje', alt: 'Maquillaje de novia' },
    { id: 7, category: 'cejas', alt: 'Laminado de cejas' },
    { id: 8, category: 'maquillaje', alt: 'Maquillaje social' },
  ];

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'cejas', label: 'Cejas' },
    { id: 'pestañas', label: 'Pestañas' },
    { id: 'maquillaje', label: 'Maquillaje' },
  ];

  const filteredImages = activeFilter === 'todos' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Galería</h2>
        <p className="section-subtitle">
          Descubre nuestros trabajos y transformaciones
        </p>

        <div className="gallery-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div 
              className="gallery-item" 
              key={image.id}
              style={{ animationDelay: `${image.id * 0.05}s` }}
            >
              <div className="gallery-placeholder">
                <span className="gallery-icon">
                  {image.category === 'cejas' && '👁️'}
                  {image.category === 'pestañas' && '✨'}
                  {image.category === 'maquillaje' && '💄'}
                </span>
                <p>{image.alt}</p>
              </div>
              <div className="gallery-overlay">
                <h3>{image.alt}</h3>
                <button className="view-btn">Ver Más</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
