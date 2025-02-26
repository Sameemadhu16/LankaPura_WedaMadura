import Welcome from './Welcomeyou';
import landing from '../../assets/Home_Assets/landing_banner.jpg';
import landingii from '../../assets/Home_Assets/landing_banneri.jpg';
import landingiii from '../../assets/Home_Assets/landing_bannerii.jpg';
import play from '../../assets/Home_Assets/playbutton.png';
import React, { useState, useEffect } from 'react';

const Landingview = () => {
  const [animate, setAnimate] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [landing, landingii, landingiii];

  useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePlayClick = () => {
    window.open('https://www.youtube.com/watch?v=Jlz4LmVHF0w', '_blank');
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white transition-all duration-1000 "
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Heading with animation */}
      <Welcome/>
      
      <h1 className="text-center font-[Raleway] text-2xl sm:text-1xl md:text-2xl lg:text-2xl text-[#EEE183]">
        “ Experience the Healing Touch of Ayurveda ...”
      </h1>
      
      <h1 className="text-center font-[Raleway] text-2xl sm:text-1xl md:text-2xl lg:text-2xl text-[#EEE183]">
        Unlock True Wellness with Herbal Excellence
      </h1>

      {/* Play button with hover effect */}
      <button className="mt-5" onClick={handlePlayClick}>
        <img
          src={play}
          alt="Play Button"
          className="w-50 h-10 sm:w-50 sm:h-10 md:w-50 md:h-10 transform transition-transform duration-200 hover:scale-110"
        />
      </button>
    </div>
  );
}

export default Landingview;
