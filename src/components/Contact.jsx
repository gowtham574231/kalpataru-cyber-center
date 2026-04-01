import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, phone, message } = formData
    const whatsappUrl = `https://wa.me/919945902841?text=${encodeURIComponent(
      `*New Message from Website*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Message:* ${message}`
    )}`
    window.open(whatsappUrl, '_blank')
    setFormData({ name: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="contact glass-container">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-container">
        <motion.div 
          className="contact-info-card glass-panel"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Kalpataru Cyber Center</h3>
          <ul className="contact-list">
            <li><i className="fa-solid fa-location-dot"></i> <span>Opp to SVS Temple Main Road, Panemangalore, Karnataka - 574231 India</span></li>
            <li><i className="fa-solid fa-phone"></i> <span><a href="tel:+919945902841">+91 9945902841</a></span></li>
            <li><i className="fa-solid fa-envelope"></i> <span>gannashu@gmail.com</span></li>
            <li><i className="fa-solid fa-clock"></i> <span>Mon - Sun: 9:00 AM - 9:00 PM</span></li>
          </ul>

          <a href="https://wa.me/919945902841" className="btn-whatsapp-full" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div 
          className="contact-form glass-panel"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Send us a Message</h3>
          <form id="contactForm" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number" 
              required 
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea 
              name="message"
              placeholder="How can we help you?" 
              rows="4" 
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </motion.div>
      </div>

      <div className="map-container glass-panel" style={{ padding: '10px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5419301560596!2d75.04240667489123!3d12.872835887433547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a7e703322a5d%3A0x23fa4409a316cbea!2sKalpataru%20cyber%20center!5e0!3m2!1sen!2sin!4v1773496772577!5m2!1sen!2sin"
          width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}

export default Contact
