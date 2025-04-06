import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

// Product images
import img1 from "../../assets/Home_Assets/products/products/1.png";
import img2 from "../../assets/Home_Assets/products/products/2.png";
import img3 from "../../assets/Home_Assets/products/products/3.png";
import img4 from "../../assets/Home_Assets/products/products/4.png";
import img5 from "../../assets/Home_Assets/products/products/5.png";

const productData = [
  { id: 1, imageUrl: img1, title: "Product 1" },
  { id: 2, imageUrl: img2, title: "Product 2" },
  { id: 3, imageUrl: img3, title: "Product 3" },
  { id: 4, imageUrl: img4, title: "Product 4" },
  { id: 5, imageUrl: img5, title: "Product 5" },
];

const Roundanimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardsToShow = () => {
    if (windowWidth < 768) return 1; // Mobile
    if (windowWidth < 1024) return 1; // Tablet
    return 3; // Desktop
  };

  const getVisibleCards = () => {
    const cardsToShow = getCardsToShow();
    return Array.from({ length: cardsToShow }, (_, i) => 
      productData[(currentIndex + i) % productData.length]
    );
  };

  const goPrev = () => {
    const cardsToShow = getCardsToShow();
    setCurrentIndex(prev => 
      prev === 0 ? productData.length - cardsToShow : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex(prev => (prev + 1) % productData.length);
  };

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(goNext, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, paused]);

  const isMobile = windowWidth < 1024;
  const cardSize = isMobile ? 250 : 360;
  const arrowTop = isMobile ? `${cardSize/2 + 20}px` : `${cardSize/2 + 40}px`;

  return (
    <div className="relative w-full flex flex-col py-8 md:py-16"> {/* Removed overflow-hidden, increased padding */}
      <div className="flex justify-center items-center w-full">
        <div className="flex transition-transform duration-1000 ease-in-out">
          {getVisibleCards().map((card, index) => (
            <motion.div
              key={card.id}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className={`relative group ${isMobile ? 'mx-1' : 'mx-2'}`}
              style={{
                height: `${cardSize}px`,
                width: `${cardSize}px`,
                opacity: isMobile ? 1 : index === 1 ? 1 : 0.6,
                transform: isMobile ? 'scale(1)' : index === 1 ? 'scale(1)' : 'scale(0.8)',
                filter: isMobile ? 'none' : index === 1 ? 'none' : 'blur(4px)',
                transition: "opacity 0.3s, transform 0.3s",
              }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className={`w-full h-full object-cover border-4 border-[#E2B68F] rounded-full shadow-xl`}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#348101] text-white px-4 sm:px-6 py-1 sm:py-2 rounded-lg font-semibold hover:bg-[#2e6900] text-sm sm:text-base">
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Arrows (unchanged) */}
      <button
        onClick={goPrev}
        style={{ top: arrowTop }}
        className={`absolute left-2 sm:left-4 md:left-8 transform -translate-y-1/2 text-black p-2 cursor-pointer hover:text-white rounded-full hover:bg-[#348101] text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-10`}
      >
        <MdOutlineArrowBack />
      </button>

      <button
        onClick={goNext}
        style={{ top: arrowTop }}
        className={`absolute right-2 sm:right-4 md:right-8 transform -translate-y-1/2 text-black p-2 cursor-pointer hover:text-white rounded-full hover:bg-[#348101] text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-10`}
      >
        <MdOutlineArrowForward />
      </button>

      {/* VIEW ALL button (moved down) */}
      <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2">
        <button
          className="border border-black bg-transparent text-black hover:text-white px-4 sm:px-6 py-1 sm:py-2 rounded-lg font-semibold hover:bg-[#2e6900] hover:border-transparent transition-colors duration-300 text-sm sm:text-base"
          onClick={() => alert("View All Clicked!")}
        >
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Roundanimation;