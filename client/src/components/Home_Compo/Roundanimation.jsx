import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

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

  const getVisibleCards = () => {
    const totalCards = productData.length;
    return Array.from({ length: 3 }, (_, i) => productData[(currentIndex + i) % totalCards]);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? productData.length - 3 : prevIndex - 1));
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
  };

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(goNext, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, paused]);

  return (
    <div className="relative flex justify-center items-center mt-5 w-full overflow-hidden">
      <div className="flex transition-transform duration-1000 ease-in-out justify-center">
        {getVisibleCards().map((card, index) => (
          <motion.div
            key={card.id}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative group mx-2"
            style={{
              height: "500px",
              width: "360px",
              opacity: index === 1 ? 1 : 0.6,
              transform: `scale(${index === 1 ? 1 : 0.8})`,
              filter: index === 1 ? "none" : "blur(4px)",
              transition: "opacity 0.3s, transform 0.3s",
            }}
          >
            <div className="flex flex-col items-center mt-4">
              <div className="relative">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-[360px] h-[360px] object-cover border-4 border-[#E2B68F] rounded-full shadow-2xl"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
                {/* Read More Button */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#348101] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2e6900]">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-4 md:left-11 top-[190px] transform -translate-y-1/2 text-black p-2 cursor-pointer hover:text-white rounded-full hover:bg-[#348101] text-4xl md:text-7xl"
      >
        <MdOutlineArrowBack />
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 md:right-11 top-[190px] transform -translate-y-1/2 text-black p-2 cursor-pointer hover:text-white rounded-full hover:bg-[#348101] text-4xl md:text-7xl"
      >
        <MdOutlineArrowForward />
      </button>

      {/* View All Button */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <button
          className="border border-black bg-tranparent text-black hover:text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2e6900] hover:border-transparent"
          onClick={() => alert("View All Clicked!")}
        >
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Roundanimation;
