import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  
  // margin: "-20%" means the animation won't start until 
  // the element is 20% into the viewport.
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      // Optional: Remove this line if you only want it to animate once
      mainControls.start("hidden"); 
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="relative w-full">
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            y: 100,      // Increased from 75 to 100 for more "travel"
            scale: 0.95  // Slight scale up adds a lot of "pop"
          },
          visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1 
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.8,     // Slower duration makes it more visible
          ease: [0.17, 0.67, 0.83, 0.67], // Custom cubic-bezier for a smooth "glide"
          delay: 0.1 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;