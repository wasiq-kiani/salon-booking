import React, { useState } from 'react';
import { db } from './../../src/firebase.js'; // Firebase Firestore instance
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Booking submitted for ${formData.service} on ${formData.date} at ${formData.time}`);
    // Here you would typically send the data to your backend
    try {
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        status: 'confirmed',
        createdAt: new Date()
      });
      alert('Booking confirmed!');
      //onClose();
    } catch (error) {
      alert('Error: ' + error.message);
    } 
  };

  return (
    <section id="booking" className="booking">
      <div className="container">
        <h2>Book Your Appointment</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="Hair Styling">Hair Styling</option>
              <option value="Hair Coloring">Hair Coloring</option>
              <option value="Manicure">Manicure</option>
              <option value="Pedicure">Pedicure</option>
              <option value="Facial">Facial</option>
              <option value="Massage">Massage</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="cta-button">Confirm Booking</button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;