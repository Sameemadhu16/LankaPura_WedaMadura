import Welcome from './Welcomeyou';
import landing from '../../assets/Home_Assets/landing_banner.jpg';
import landingii from '../../assets/Home_Assets/landing_banneri.jpg';
import landingiii from '../../assets/Home_Assets/landing_bannerii.jpg';
import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa'; // Importing the Play icon

const Landingview = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [landing, landingii, landingiii];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayClick = () => {
    window.open('https://www.youtube.com/watch?v=Jlz4LmVHF0w', '_blank');
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white transition-all duration-1000 px-4"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Heading with animation */}
      <Welcome/>

      <h1 className="text-center font-[Raleway] text-lg sm:text-lg md:text-xl lg:text-2xl text-[#EEE183] leading-snug">
        “Experience the Healing Touch of Ayurveda...”
      </h1>

      <h1 className="text-center font-[Raleway] text-lg sm:text-lg md:text-xl lg:text-2xl text-[#EEE183] leading-snug mt-2">
        Unlock True Wellness with Herbal Excellence
      </h1>

      {/* Custom Play Button */}
      <button
        className="mt-6 flex items-center border border-white px-5 py-2 rounded-full text-white text-sm md:text-lg transition-all duration-300 hover:bg-white hover:text-[#3D1E0D]"
        onClick={handlePlayClick}
      >
        Discover the Story
        <FaPlay className="ml-2 text-sm md:text-md" />
      </button>
    </div>
  );
};

export default Landingview;
