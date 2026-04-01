import React from 'react'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Us</h2>
      <div className="about-grid">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>Kalpataru Cyber Center is a trusted local digital service center located in the heart of Panemangalore,
            Karnataka. We are dedicated to bridging the digital divide by providing comprehensive online services,
            high-quality printing, reliable ticket booking, essential document services, and expert computer repair.
          </p>
          <p>Whether you are a student needing quick printouts, a professional requiring reliable document typing, or
            a community member looking for assistance with government portals and Aadhaar updates, our skilled staff
            is ready to help you quickly and affordably.</p>
        </motion.div>
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Friendly Staff Assisting Customers" 
            className="glass-panel" 
            style={{ padding: '10px' }}
            whileHover={{ 
              scale: 1.1, 
              zIndex: 50,
              boxShadow: "0 50px 150px rgba(0,0,0,0.9)",
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
