import React from 'react'
import { motion } from 'framer-motion'

const galleryImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
]

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title text-glow">Kalpataru Cyber Center</h2>
      <div className="gallery-grid">
        {galleryImages.map((src, index) => (
          <motion.img 
            key={index}
            src={src} 
            alt={`Gallery Item ${index + 1}`} 
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.1, 
              zIndex: 100,
              boxShadow: "0 50px 150px rgba(0,0,0,0.9)",
              transition: { duration: 0.3 }
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery
