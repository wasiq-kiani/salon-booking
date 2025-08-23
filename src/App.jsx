import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="salon-app">
      <Header />
      <main>
        <Hero />
        <Services />
        <BookingForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
