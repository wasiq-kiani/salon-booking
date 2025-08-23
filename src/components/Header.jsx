import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Glamour Salon</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#booking">Book Now</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            {/*<li><a href="#services">Testing Services</a></li>*/}
            <li><button className="cta-button">Login</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;