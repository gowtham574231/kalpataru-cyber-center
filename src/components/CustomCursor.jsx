import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useSpring(0, { damping: 30, stiffness: 500 });
  const mouseY = useSpring(0, { damping: 30, stiffness: 500 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half the width/height to center
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      // Add more interactive elements for the cursor to react to
      if (e.target.closest('button, a, .service-card, .feature, .gallery-grid img, .about-image img, .nav-links a, i')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovering ? 60 : 20,
        height: isHovering ? 60 : 20,
        borderRadius: '50%',
        backgroundColor: isHovering ? 'rgba(250, 204, 21, 0.15)' : 'rgba(255, 255, 255, 0.1)',
        border: '2px solid #facc15',
        pointerEvents: 'none',
        zIndex: 10000,
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        boxShadow: isHovering ? '0 0 20px rgba(250, 204, 21, 0.5)' : 'none',
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
