import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import aw1 from "../../assets/Home_Assets/Archivement/aw1.png";
import aw2 from "../../assets/Home_Assets/Archivement/aw2.jpg";
import aw3 from "../../assets/Home_Assets/Archivement/aw3.png";
import aw4 from "../../assets/Home_Assets/Archivement/aw4.png";
import aw5 from "../../assets/Home_Assets/Archivement/aw5.png";

const images = [aw1, aw2, aw3, aw4, aw5];

export default function Archivement() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center">
      {/* Title with Waving Animation */}
      <motion.div
        className="text-center mr-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl font-[playfair] font-bold text-black"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          OUR
        </motion.h1>
        <motion.h1
          className="text-[#348101] text-6xl font-[playfair] font-bold"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.1 }}
        >
          CERTIFICATIONS
        </motion.h1>
        <motion.h1
          className="text-6xl font-[playfair] font-bold text-black"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
        >
          AND
        </motion.h1>
        <motion.h1
          className="text-[#348101] text-6xl font-[playfair] font-bold"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
        >
          AWARDS
        </motion.h1>
      </motion.div>

      {/* Image Container with Smooth Transitions */}
      <div className="relative flex items-center justify-center w-[500px] h-[600px] mt-8 ml-20">
        {/* Left Button */}
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg"
        >
          <AiOutlineCaretLeft size={30} />
        </button>

        {/* Animated Image */}
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Gallery"
          className="rounded-lg w-[450px] h-[550px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />

        {/* Right Button */}
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg"
        >
          <AiOutlineCaretRight size={30} />
        </button>
      </div>
    </div>
  );
}
