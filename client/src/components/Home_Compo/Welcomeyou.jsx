import { motion } from 'framer-motion';

const Welcomeyou = () => {
  return (
    <div className="mb-4 font-[playfair] text-center font-medium text-7xl" style={{ marginTop: '390px' }}>
      <motion.h1
        initial={{ opacity: 0, x: -70 }}  // Start from the left
        animate={{ opacity: 1, x: 0 }}    // Move to final position (center)
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        Welcome to Lankapura
      </motion.h1>
      
      <motion.h1
        initial={{ opacity: 0, x: 70 }}   // Start from the right
        animate={{ opacity: 1, x: 0 }}    // Move to final position (center)
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        Ayurvedic
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, x: -70 }}  // Start from the left
        animate={{ opacity: 1, x: 0 }}    // Move to final position (center)
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        Medical Center
      </motion.h1>
    </div>
  );
};

export default Welcomeyou;
