import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import aw1 from "../../assets/Home_Assets/Archivement/aw1.png";
import aw2 from "../../assets/Home_Assets/Archivement/aw2.jpg";
import aw3 from "../../assets/Home_Assets/Archivement/aw3.png";
import aw4 from "../../assets/Home_Assets/Archivement/aw4.png";
import aw5 from "../../assets/Home_Assets/Archivement/aw5.png";

const images = [aw4, aw2, aw3, aw5, aw1];

export default function Awards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 w-full">

      <div className="text-center mt-20 px-4">
        <h1 className="font-[Raleway] text-lg md:text-2xl tracking-[.4em]">
          Honoring Excellence, Celebrating Success, Inspiring Future.        </h1>
        <div className="flex justify-center flex-wrap">
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-black">
            Our{" "}
          </span>
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-[#348101] ml-2 md:ml-4">
            Achievements
          </span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative h-[500px] flex justify-center items-center w-full max-w-xl md:max-w-3xl lg:max-w-4xl mt-6 rounded-3xl drop-shadow-[0px_10px_100px_rgba(0,0,0,0.5)]  shadow-2xl overflow-hidden backdrop-filter: blur(10px); bg-white/30 backdrop-blur-sm">
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 rounded-full shadow-md hover:bg-[#348101] transition"
        >
          <AiOutlineLeft size={24} />
        </button>

        <div className="overflow-hidden w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Award"
              className="rounded-lg w-full h-auto max-h-[400px] object-contain"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 rounded-full shadow-md hover:bg-[#348101] transition"
        >
          <AiOutlineRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex mt-4 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-[#348101]" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
