import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Treatcard from "./Treatcard"; // Import Treatcard component
import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";

import Covid from '../../assets/Home_Assets/disease images/Covid19.jpg';
import dengu from '../../assets/Home_Assets/disease images/Dengue.jpg';
import cancer from '../../assets/Home_Assets/disease images/All type of cancers.jpg';
import art from '../../assets/Home_Assets/disease images/Arthritis.jpg';
import Catarrh from '../../assets/Home_Assets/disease images/Catarrh.webp';
import Diabetic from '../../assets/Home_Assets/disease images/Diabetic.jpg';
import Infertility from '../../assets/Home_Assets/disease images/Infertility.jpg';
import ITP from '../../assets/Home_Assets/disease images/ITP.webp';
import Kidney from '../../assets/Home_Assets/disease images/Kidney disease.jpg';
import Leptospirosis from '../../assets/Home_Assets/disease images/Leptospirosis.jpg';
import Liver from '../../assets/Home_Assets/disease images/Liver disease.jpg';
import Lung from '../../assets/Home_Assets/disease images/Lung diseases.webp';
import LungInsfection from '../../assets/Home_Assets/disease images/Lung Insfection.webp';
import Migraine from '../../assets/Home_Assets/disease images/Migraine.webp';
import Nervous from '../../assets/Home_Assets/disease images/Nervous System Diseases.jpg';
import Sciatica from '../../assets/Home_Assets/disease images/Sciatica.webp';
import STD from '../../assets/Home_Assets/disease images/STD.webp';

const SlidingCard = () => {
  const treatCardsData = [
    { id: 1, imageUrl: Covid, title: "COVID 19" },
    { id: 2, imageUrl: dengu, title: "DENGUE" },
    { id: 3, imageUrl: cancer, title: "ALL TYPE OF CANCERS" },
    { id: 4, imageUrl: art, title: "ARTHRITIS" },
    { id: 5, imageUrl: Catarrh, title: "CATARRH" },
    { id: 6, imageUrl: Diabetic, title: "DIABETIC" },
    { id: 7, imageUrl: Infertility, title: "INFERTILITY" },
    { id: 8, imageUrl: ITP, title: "I.T.P" },
    { id: 9, imageUrl: Kidney, title: "KIDNEY DISEASES" },
    { id: 10, imageUrl: Leptospirosis, title: "LEPTOSPIROSIS" },
    { id: 11, imageUrl: Liver, title: "LIVER DISEASES" },
    { id: 12, imageUrl: Lung, title: "LUNG DISEASES" },
    { id: 13, imageUrl: LungInsfection, title: "LUNG INFECTIONS" },
    { id: 14, imageUrl: Migraine, title: "MIGRAINE" },
    { id: 15, imageUrl: Nervous, title: "NERVOUS SYSTEM DISEASES" },
    { id: 16, imageUrl: Sciatica, title: "SCIATICA" },
    { id: 17, imageUrl: STD, title: "S.T.D" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Get the three visible cards based on the current index
  const getVisibleCards = () => {
    const totalCards = treatCardsData.length;
    const cardsToShow = [];
    for (let i = 0; i < 3; i++) {
      cardsToShow.push(treatCardsData[(currentIndex + i) % totalCards]);
    }
    return cardsToShow;
  };

  // Navigate to the previous card
  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? treatCardsData.length - 3 : prevIndex - 1
    );
  };

  // Navigate to the next card
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % treatCardsData.length);
  };

  // Auto-slide the cards every second
  useEffect(() => {
    if (!paused) {
      const interval = setInterval(goNext, 3000); // 1000ms = 1 second
      return () => clearInterval(interval); // Clear interval when component unmounts or paused
    }
  }, [currentIndex, paused]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        transform: "scale(0.95)", // Scale down the container slightly (you can adjust the value as needed)
        transition: "transform 0.3s ease", // Smooth transition for the scaling effect
      }}
      className="flex justify-center mt-4"
    >
      {/* Sliding Cards Container */}
      <div
        className="h-1000"
        style={{
          display: "flex",
          transition: "transform 1s ease",
        }}
      >
        {getVisibleCards().map((card, index) => (
          <motion.div
            key={card.id}
            onMouseEnter={() => setPaused(true)} // Pause the animation
            onMouseLeave={() => setPaused(false)} // Resume the animation
            style={{
              width: "300px",
              margin: "0 16px",
              opacity: index === 1 ? 1 : 0.6,
              transform: `scale(${index === 1 ? 1 : 0.9})`,
              filter: index === 1 ? "none" : "blur(4px)",
              transition: "opacity 0.3s, transform 0.3s",
              transformOrigin: "center", // Ensures the zoom happens from the center of the card
            }}
            className="card"
          >
            <Treatcard
              imageUrl={card.imageUrl}
              title={card.title}
              onButtonClick={() => alert(`You clicked ${card.title}`)}
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white border-none p-2 cursor-pointer rounded-full hover:bg-[#348101] text-7xl"
      >
        <MdOutlineArrowBack />
      </button>

      <button
        onClick={goNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white border-none p-2 cursor-pointer hover:bg-[#348101] text-7xl rounded-full"
      >
        <MdOutlineArrowForward />
      </button>
    </div>
  );
};

export default SlidingCard;
