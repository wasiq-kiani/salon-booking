import React from 'react';

const Services = () => {
  const services = [
    { name: 'Hair Styling', icon: '✂️', price: '$50+' },
    { name: 'Hair Coloring', icon: '🎨', price: '$80+' },
    { name: 'Manicure', icon: '💅', price: '$35+' },
    { name: 'Pedicure', icon: '👣', price: '$45+' },
    { name: 'Facial', icon: '✨', price: '$60+' },
    { name: 'Massage', icon: '💆', price: '$70+' },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.price}</p>
              <button className="secondary-button">Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;