import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import background from '../../assets/Home_Assets/Treatmentbackground.png';
import virus from '../../assets/Home_Assets/virus.png';
import den from '../../assets/Home_Assets/Mosquito.png';

const Treatment = () => {
  // Background styling
  const tap = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  // Track the visibility of the animated images
  const [virusInView, setVirusInView] = useState(false);
  const [denInView, setDenInView] = useState(false);

  // Reusable Section Component
  const Section = ({ title, highlight, description, buttonText }) => (
    <div className="text-center">
      <h1 className="font-[Raleway] text-black text-4xl font-semibold">
        {title}{' '}
        <span className="font-[Raleway] text-red-600 text-4xl font-semibold">{highlight}</span>
      </h1>
      {description.map((line, index) => (
        <p key={index} className="font-[Raleway] text-black text-xl mt-4">
          {line}
        </p>
      ))}
      <button className="border border-black bg-black text-white px-4 py-1 rounded-lg mt-6 font-[Raleway] hover:bg-[#348101] hover:border-transparent transition duration-300">
        {buttonText}
      </button>
    </div>
  );

  return (
    <div style={tap} className="relative">
      {/* Header Section */}
      <div className="relative flex justify-center">
        <h1 className="flex justify-center h-screen font-[Raleway] absolute top-9 text-2xl tracking-[.39em]">
          We cure diseases with Hela medicine in Sri Lanka
        </h1>
        <h1 className="absolute top-20 text-center">
          <span className="text-6xl font-[playfair] font-bold text-black">OUR AYURVEDHA </span>
          <span className="text-[#348101] text-6xl font-[playfair] font-bold">TREATMENT</span>
        </h1>
      </div>

      {/* COVID-19 Section */}
      <div className="flex justify-center relative mt-10" style={{ top: '23%' }}>
        <Section
          title="Medication against"
          highlight="COVID 19"
          description={[
            'We’ve launched a medicine which can successfully fight',
            'against COVID 19',
            'by boosting your immunity system.',
          ]}
          buttonText="Read more"
        />
      </div>

      {/* Dengue Section */}
      <div className="flex justify-center relative mt-23" style={{ top: '29%' }}>
        <Section
          title="A successful medicine for"
          highlight="Dengue"
          description={[
            'Our medicine for Dengue has successfully',
            'cured thousands',
            'of patients throughout the country.',
          ]}
          buttonText="Read more"
        />
      </div>

      {/* Animated Images with Scroll Effect */}
      <motion.div
        className="absolute flex justify-center p-5"
        style={{ top: '16%', left: '3%' }}
        initial={{ opacity: 0, x: '-30%' }} // Start off-screen from the left
        animate={{
          opacity: virusInView ? 1 : 0,
          x: virusInView ? 0 : '-30%', // Move to original position after scrolling
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        onViewportEnter={() => setVirusInView(true)} // Trigger animation when entering the viewport
        onViewportLeave={() => setVirusInView(false)} // Reset when leaving the viewport
        transition={{
          duration: 2,
          ease: 'easeOut',
        }}
      >
        <img
          src={virus}
          alt="COVID-19 Virus"
          style={{ width: '430px', height: 'auto' }}
        />
      </motion.div>

      <motion.div
        className="absolute flex justify-center"
        style={{ top: '58%', right: '8%' }}
        initial={{ opacity: 0, x: '30%' }} // Start off-screen from the right
        animate={{
          opacity: denInView ? 1 : 0,
          x: denInView ? 0 : '30%', // Move to original position after scrolling
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        onViewportEnter={() => setDenInView(true)} // Trigger animation when entering the viewport
        onViewportLeave={() => setDenInView(false)} // Reset when leaving the viewport
        transition={{
          duration: 2,
          ease: 'easeOut',
        }}
      >
        <img
          src={den}
          alt="Dengue Mosquito"
          style={{ width: '310px', height: 'auto' }}
        />
      </motion.div>
    </div>
  );
};

export default Treatment;
