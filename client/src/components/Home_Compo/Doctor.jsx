import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ATD from '../../assets/Home_Assets/About_the_doctor.png';

const DoctorImage = () => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-[1200px] md:w-[70%] lg:w-[65%] flex justify-center mx-0 top-0 -mr-[80px]"
      initial={{
        opacity: 0, // Initially hidden
        scale: 0.90, // Start slightly smaller
      }}
      whileInView={{
        opacity: 1, // Fully visible when scrolled into view
        scale: 1, // Scale to original size
      }}
      transition={{
        duration:2.5,  // Duration for the fade-in and scale effect
        ease: 'easeOut', // Smooth easing
      }}
    >
      <img
        src={ATD}
        alt="Doctor"
        className="w-[80%] h-auto md:w-full"
      />
    </motion.div>
  );
};

export default DoctorImage;
