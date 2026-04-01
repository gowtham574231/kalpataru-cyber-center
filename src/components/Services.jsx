import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Printing & Copies',
    variant: 'grad-cyan-blue',
    img: 'https://5.imimg.com/data5/SELLER/Default/2023/8/335079545/ZW/ZR/TQ/28791641/small-xerox-machine.jpeg',
    items: [
      { icon: 'fa-copy', text: 'Xerox / Photocopy', color: '#facc15' },
      { icon: 'fa-file-lines', text: 'Black & White Print', color: '#ffffff' },
      { icon: 'fa-fill-drip', text: 'Color Printout', color: '#ef4444' },
      { icon: 'fa-file-invoice', text: 'Document Scanning', color: '#4ade80' },
    ]
  },
  {
    title: 'Binding & Finish',
    variant: 'grad-emerald-teal',
    img: 'https://5.imimg.com/data5/HN/MV/UA/SELLER-93481086/spiral-book-binding-service-500x500.jpeg',
    items: [
      { icon: 'fa-layer-group', text: 'Lamination', color: '#ec4899' },
      { icon: 'fa-folder-open', text: 'File Binding', color: '#fbbf24' },
      { icon: 'fa-address-card', text: 'Card Printing', color: '#38bdf8' },
      { icon: 'fa-image', text: 'Passport Size Photo', color: '#a78bfa' },
    ]
  },
  {
    title: 'Identity Services',
    variant: 'grad-royal-purple',
    img: 'https://www.idmerit.com/wp-content/uploads/2025/03/id-verification.png',
    items: [
      { icon: 'fa-pen-to-square', text: 'PAN Apply & Correction', color: '#f97316' },
      { icon: 'fa-fingerprint', text: 'Aadhaar Services', color: '#facc15' },
      { icon: 'fa-check-to-slot', text: 'Voter ID Apply', color: '#4ade80' },
      { icon: 'fa-certificate', text: 'Caste & Income Certificate', color: '#fb7185' },
    ]
  },
  {
    title: 'Travel Booking',
    variant: 'grad-emerald-teal', // Consistency
    img: 'https://images.indianexpress.com/2025/07/train-launch.jpg?w=1200',
    items: [
      { icon: 'fa-train', text: 'Train Tickets', color: '#ef4444' },
      { icon: 'fa-bus', text: 'Bus Tickets', color: '#fbbf24' },
    ]
  },
  {
    title: 'Online Applications',
    variant: 'grad-royal-purple', // Consistency
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    items: [
      { icon: 'fa-building-columns', text: 'Online Govt Form', color: '#40ff40' },
      { icon: 'fa-graduation-cap', text: 'Scholarship Apps', color: '#0ea5e9' }, // Cyan instead of pink
      { icon: 'fa-briefcase', text: 'Job Applications', color: '#80dfff' },
    ]
  },
  {
    title: 'Digital Services',
    variant: 'grad-cyan-blue', // Consistency
    img: 'https://hpservicecenterschennai.in/wp-content/uploads/2019/06/img-01.jpg',
    items: [
      { icon: 'fa-keyboard', text: 'Resume Typing', color: '#ffffff' },
      { icon: 'fa-screwdriver-wrench', text: 'PC Service & Repair', color: '#ff9933' },
      { icon: 'fa-print', text: 'Printer Service', color: '#ffff33' },
    ]
  }
]

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="section-title">Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className={`service-card ${service.variant || ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              y: -15, 
              scale: 1.02,
              rotateX: 5,
              rotateY: -5,
              boxShadow: "0 25px 60px rgba(250, 204, 21, 0.2)",
              transition: { duration: 0.3 }
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ perspective: 1000 }}
          >
            <img src={service.img} alt={service.title} className="service-card-img" />
            <div className="service-content">
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>
                    <i className={`fa-solid ${item.icon}`} style={{ color: item.color }}></i> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
