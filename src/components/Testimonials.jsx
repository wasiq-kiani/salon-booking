import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      comment: 'Best salon experience ever! The stylists are true professionals.',
      rating: '★★★★★',
    },
    {
      id: 2,
      name: 'Michael Chen',
      comment: 'Always leave feeling like a new person. Highly recommend!',
      rating: '★★★★★',
    },
    {
      id: 3,
      name: 'Emma Williams',
      comment: 'The facial treatments are amazing. My skin has never looked better.',
      rating: '★★★★☆',
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">{testimonial.rating}</div>
              <p className="comment">"{testimonial.comment}"</p>
              <p className="name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;