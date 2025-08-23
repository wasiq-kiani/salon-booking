import React from 'react';
import { motion } from 'framer-motion';
import BookingForm from './BookingForm';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.3,
      delayChildren: 0.2 
    }
  }
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 100 
    }
  }
};

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="hero-content" variants={containerVariants}>
          <motion.h1 variants={childVariants}>
            Your Beauty, Our Passion
          </motion.h1>
          <motion.p variants={childVariants}>
            Book an appointment with our expert stylists and experience luxury hair and beauty treatments.
          </motion.p>
          <motion.div variants={childVariants}>
            <button className="cta-button"><a href="#booking">Book Now</a></button>
            
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;