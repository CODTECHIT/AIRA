import React from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children, direction = "up", delay = 0, className = "" }) => {
  const directions = {
<<<<<<< HEAD
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
=======
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
>>>>>>> 8f593df8ea281f28f9bdc3fc46d321c621a1963f
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
<<<<<<< HEAD
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        duration: 0.7, 
        delay, 
        ease: [0.21, 0.45, 0.32, 0.9] 
      }}
=======
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
>>>>>>> 8f593df8ea281f28f9bdc3fc46d321c621a1963f
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
