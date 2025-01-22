import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/Home_Assets/products/1.jpg";
import img2 from "../../assets/Home_Assets/products/2.jpg";
import img3 from "../../assets/Home_Assets/products/3.jpg";
import img4 from "../../assets/Home_Assets/products/4.jpg";
import img5 from "../../assets/Home_Assets/products/5.jpg";

const images = [img1, img2, img3, img4, img5];

const Roundanimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Navigation buttons
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Motion variants for animation
  const variants = {
    enter: { opacity: 0, scale: 0.8 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-white to-orange-100 py-10">
      <div className="relative w-full max-w-4xl h-[300px] overflow-hidden">
        <AnimatePresence>
          {images.map((image, index) => (
            index === currentIndex && (
              <motion.img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="absolute w-[250px] h-[250px] rounded-full shadow-lg object-cover"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              />
            )
          ))}
        </AnimatePresence>
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:scale-110 transition"
        >
          &#8592;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:scale-110 transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Roundanimation;
