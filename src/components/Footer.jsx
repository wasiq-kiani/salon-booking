import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Glamour Salon</h3>
            <p>123 Beauty Street<br />New York, NY 10001</p>
          </div>
          <div className="footer-section">
            <h3>Hours</h3>
            <p>Monday - Friday: 9am - 8pm<br />Saturday: 10am - 6pm<br />Sunday: Closed</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Phone: (123) 456-7890<br />Email: info@glamoursalon.com</p>
            <div className="social-icons">
              <a href="#facebook">FB</a>
              <a href="#instagram">IG</a>
              <a href="#twitter">TW</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Glamour Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;