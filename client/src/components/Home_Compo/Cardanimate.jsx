import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Treatcard from "./Treatcard";
import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const treatCardsData = [
    { id: 3, imageUrl: cancer, title: "ALL TYPE OF CANCERS" ,path:'/alltypeofcancers'},
    { id: 4, imageUrl: art, title: "ARTHRITIS",path: '/arthritis' },
    { id: 5, imageUrl: Catarrh, title: "CATARRH",path: '/catarrh' },
    { id: 6, imageUrl: Diabetic, title: "DIABETIC",path: '/diabetic' },
    { id: 7, imageUrl: Infertility, title: "INFERTILITY",path: '/infertility' },
    { id: 8, imageUrl: ITP, title: "I.T.P" ,path: '/itp' },
    { id: 9, imageUrl: Kidney, title: "KIDNEY DISEASES" ,path: '/kidneydisease'},
    { id: 10, imageUrl: Leptospirosis, title: "LEPTOSPIROSIS" ,path: '/leptospirosis'},
    { id: 11, imageUrl: Liver, title: "LIVER DISEASES" ,path: '/liverdisease'},
    { id: 12, imageUrl: Lung, title: "LUNG DISEASES" ,path: '/lungdiseases'},
    { id: 13, imageUrl: LungInsfection, title: "LUNG INFECTIONS",path: '/lunginfection' },
    { id: 14, imageUrl: Migraine, title: "MIGRAINE",path: '/migraine' },
    { id: 15, imageUrl: Nervous, title: "NERVOUS SYSTEM DISEASES",path: '/nsd' },
    { id: 16, imageUrl: Sciatica, title: "SCIATICA",path: '/sciatica' },
    { id: 17, imageUrl: STD, title: "S.T.D",path: '/std' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardsToShowCount = () => {
    if (windowWidth < 640) return 1; // Mobile
    if (windowWidth < 1024) return 2; // Tablet
    return 3; // Desktop
  };

  const getVisibleCards = () => {
    const totalCards = treatCardsData.length;
    const cardsToShowCount = getCardsToShowCount();
    const cardsToShow = [];
    
    for (let i = 0; i < cardsToShowCount; i++) {
      cardsToShow.push(treatCardsData[(currentIndex + i) % totalCards]);
    }
    return cardsToShow;
  };

  const goPrev = () => {
    const cardsToShowCount = getCardsToShowCount();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? treatCardsData.length - cardsToShowCount : prevIndex - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % treatCardsData.length);
  };

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(goNext, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, paused]);

  const getCardStyle = (index, cardsCount) => {
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth < 1024 && !isMobile;
    
    if (isMobile) {
      return {
        opacity: 1,
        transform: 'scale(1)',
        filter: 'none',
      };
    }
    
    if (isTablet) {
      return {
        opacity: 1,
        transform: 'scale(1)',
        filter: 'none',
      };
    }
    
    // Desktop
    return {
      opacity: index === 1 ? 1 : 0.6,
      transform: `scale(${index === 1 ? 1 : 0.9})`,
      filter: index === 1 ? 'none' : 'blur(4px)',
    };
  };

  const visibleCards = getVisibleCards();
  const cardsCount = visibleCards.length;
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024 && !isMobile;

  return (
    <div
      className="relative w-full overflow-hidden scale-95 transition-transform duration-300 ease-in-out flex justify-center mt-4"
    >
      {/* Sliding Cards Container */}
      <div
        className={`flex items-center justify-center transition-transform duration-1000 ease-in-out ${
          isMobile ? 'w-full' : isTablet ? 'w-[calc(300px*2+32px)]' : 'w-[calc(300px*3+64px)]'
        }`}
        style={{
          gap: isMobile ? '0' : '16px',
        }}
      >
        {visibleCards.map((card, index) => (
          <motion.div
            key={card.id}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className={`flex-shrink-0 ${
              isMobile ? 'mx-2' : 'mx-0'
            }`}
            style={{
              width: isMobile ? '280px' : '300px',
              ...getCardStyle(index, cardsCount),
              transition: "opacity 0.3s, transform 0.3s",
              transformOrigin: "center",
            }}
          >
            <Treatcard
              imageUrl={card.imageUrl}
              title={card.title}
              onButtonClick={() => navigate(card.path)}
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white border-none p-2 cursor-pointer rounded-full hover:bg-[#348101] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
      >
        <MdOutlineArrowBack />
      </button>

      <button
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white border-none p-2 cursor-pointer hover:bg-[#348101] text-4xl sm:text-5xl md:text-6xl lg:text-7xl rounded-full"
      >
        <MdOutlineArrowForward />
      </button>
    </div>
  );
};

export default SlidingCard;