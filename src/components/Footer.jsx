import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h3><i className="fa-solid fa-desktop"></i> Kalpataru Cyber Center</h3>
          <p>Your one-stop destination for printing, online forms, ticket booking, and computer repair in
            Panemangalore. Bridging the digital divide with trust and quality.</p>
          <div className="social-links">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/919945902841"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li><i className="fa-solid fa-print"></i> High-Quality Printing</li>
            <li><i className="fa-solid fa-train"></i> Ticket Booking</li>
            <li><i className="fa-solid fa-id-card"></i> Aadhaar Services</li>
            <li><i className="fa-solid fa-tools"></i> Computer Repair</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <div className="links-row">
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Kalpataru Cyber Center. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
