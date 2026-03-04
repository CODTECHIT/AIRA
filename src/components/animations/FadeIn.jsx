import React from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children, direction = "up", delay = 0, className = "" }) => {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        duration: 0.7, 
        delay, 
        ease: [0.21, 0.45, 0.32, 0.9] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
