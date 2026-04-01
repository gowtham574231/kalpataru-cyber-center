import React, { useState } from 'react'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  const handleLinkClick = () => {
    setIsActive(false)
  }

  return (
    <nav className="navbar glass-panel">
      <div className="logo">
        <i className="fa-solid fa-desktop"></i> Kalpataru Cyber Center
      </div>
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#why-us" onClick={handleLinkClick}>Why Us</a></li>
        <li><a href="#gallery" onClick={handleLinkClick}>Gallery</a></li>
        <li><a href="#contact" className="nav-contact-btn" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
