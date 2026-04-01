import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const floatingLogos = [
    { icon: 'fa-id-card', color: '#facc15', class: 'float-1' }, /* Amber/Yellow */
    { icon: 'fa-print', color: '#ef4444', class: 'float-2' },   /* Red */
    { icon: 'fa-train', color: '#10b981', class: 'float-3' },   /* Green */
    { icon: 'fa-passport', color: '#0ea5e9', class: 'float-4' },/* Cyan (Instead of Pink) */
    { icon: 'fa-cloud', color: '#3b82f6', class: 'float-5' },   /* Blue */
  ]

  return (
    <header id="hero" className="hero">
      <div className="hero-content">
        <motion.h1 
          className="animate-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Kalpataru Cyber Center
        </motion.h1>
        <p className="tagline">All Online & Document Services in One Place</p>
        <p className="sub-text">
          Your trusted local digital service center in Panemangalore for all online services,
          printing, and ticketing.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn-primary">
            <i className="fa-solid fa-list"></i> View Services
          </a>
          <a href="#contact" className="btn-secondary">
            <i className="fa-solid fa-phone"></i> Contact Us
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="central-logo-wrapper">
          <img 
            src="/assets/logo.png" 
            alt="Kalpataru Cyber Center Logo" 
            className="central-logo" 
          />
        </div>
        <div className="hero-logo-grid">
          {floatingLogos.map((logo, index) => (
            <div key={index} className={`floating-logo ${logo.class}`}>
              <i 
                className={`fa-solid ${logo.icon}`} 
                style={{ color: logo.color, fontSize: '2rem' }}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Hero
