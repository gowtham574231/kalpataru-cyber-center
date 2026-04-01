import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WhatsAppAgent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const windowRef = useRef(null)

  const toggleChat = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (windowRef.current && !windowRef.current.contains(event.target) && !event.target.closest('#whatsappToggle')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  const handleServiceClick = (service) => {
    const phoneNumber = "919945902841"
    const message = encodeURIComponent(`Hi! I'm interested in your ${service} service. Can you provide more details?`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    setIsOpen(false)
  }

  return (
    <div className="whatsapp-agent-container">
      {/* Floating Button */}
      <button 
        className="whatsapp-float pulse" 
        id="whatsappToggle" 
        onClick={toggleChat}
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            ref={windowRef}
            className="chat-window glass-panel active"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chat-header">
              <div className="agent-info">
                <div className="agent-avatar">
                  <i className="fa-solid fa-user-tie"></i>
                  <span className="status-dot"></span>
                </div>
                <div>
                  <h4>Digital Assistant</h4>
                  <p>Online | Quick Response</p>
                </div>
              </div>
              <button className="close-chat" onClick={() => setIsOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="chat-body">
              <div className="message-bubble agent">
                <p>Hi there! 👋 How can we help you today? Please choose a service below:</p>
              </div>
              <div className="service-options">
                {['Printing & Xerox', 'Ticket Booking', 'Aadhaar & PAN', 'Computer Repair', 'Other Inquiry'].map((service) => (
                  <button 
                    key={service} 
                    className="service-btn" 
                    onClick={() => handleServiceClick(service)}
                  >
                    <i className={`fa-solid ${
                      service === 'Printing & Xerox' ? 'fa-print' :
                      service === 'Ticket Booking' ? 'fa-train' :
                      service === 'Aadhaar & PAN' ? 'fa-id-card' :
                      service === 'Computer Repair' ? 'fa-tools' : 'fa-comment-dots'
                    }`}></i> {service}
                  </button>
                ))}
              </div>
            </div>
            <div className="chat-footer">
              <p>Typically replies in minutes</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default WhatsAppAgent
