import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="relative w-full">
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            y: 15
          },
          visible: { 
            opacity: 1, 
            y: 0
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.8,     // Snappy, professional timing
          ease: [0.25, 0.1, 0.25, 1.0], // Smooth standard ease curve
          delay: 0.1 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;