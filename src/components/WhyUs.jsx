import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: 'fa-bolt',
    title: 'Fast Service',
    text: 'We value your time. Our modern equipment and experienced staff ensure quick turnaround times for all tasks.',
    variant: 'feature-fast'
  },
  {
    icon: 'fa-indian-rupee-sign',
    title: 'Affordable Prices',
    text: 'Premium digital services that don\'t break the bank. We offer highly competitive rates for students and locals.',
    variant: 'feature-price'
  },
  {
    icon: 'fa-handshake',
    title: 'Trusted Local Center',
    text: 'Years of dedicated service in Panemangalore. Our reputation is built on reliability, privacy, and trust.',
    variant: 'feature-trust'
  },
  {
    icon: 'fa-globe',
    title: 'All Online Services',
    text: 'From simple Xerox to complex government applications, we truly have all online services under one roof.',
    variant: 'feature-all'
  }
]

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="train-container">
        <div className="features-grid train-track">
          {/* Duplicate set for seamless loop */}
          {[...features, ...features].map((feature, index) => (
            <motion.div 
              key={index} 
              className={`feature ${feature.variant}`}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
            >
              <div className="feature-icon">
                <i className={`fa-solid ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
