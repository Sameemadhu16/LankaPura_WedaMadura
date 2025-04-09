import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, PauseCircle, PlayCircle } from 'lucide-react';

import img1 from '../../assets/Home_Assets/products/products/Certification/1.png';
import img2 from '../../assets/Home_Assets/products/products/Certification/2.png';
import img3 from '../../assets/Home_Assets/products/products/Certification/3.png';
import img4 from '../../assets/Home_Assets/products/products/Certification/4.png';
import img5 from '../../assets/Home_Assets/products/products/Certification/5.png';
import img6 from '../../assets/Home_Assets/products/products/Certification/6.png';
import img7 from '../../assets/Home_Assets/products/products/Certification/7.png';
import img8 from '../../assets/Home_Assets/products/products/Certification/8.png';
import img9 from '../../assets/Home_Assets/products/products/Certification/9.png';

// Sample certification data - replace with your actual certifications
const certifications = [
  {
    id: 1,
    name: "GMP Certified",
    description: "Good Manufacturing Practice certified ensuring quality and safety standards",
    logo: img1
  },
  {
    id: 2,
    name: "Organic Certified",
    description: "100% Organic ingredients sourced sustainably from trusted farms",
    logo: img2
  },
  {
    id: 3,
    name: "Ayurvedic Council",
    description: "Approved by Ayurvedic Medical Council of India for authenticity and efficacy",
    logo: img3
  },
  {
    id: 4,
    name: "Quality Tested",
    description: "Laboratory tested for purity, potency and absence of contaminants",
    logo: img4
  },
  {
    id: 5,
    name: "GMP Certified",
    description: "Good Manufacturing Practice certified ensuring quality and safety standards",
    logo: img5
  },
  {
    id: 6,
    name: "Organic Certified",
    description: "100% Organic ingredients sourced sustainably from trusted farms",
    logo: img6
  },
  {
    id: 7,
    name: "Ayurvedic Council",
    description: "Approved by Ayurvedic Medical Council of India for authenticity and efficacy",
    logo: img7
  },
  {
    id: 8,
    name: "Quality Tested",
    description: "Laboratory tested for purity, potency and absence of contaminants",
    logo: img8
  },
  {
    id: 9,
    name: "Quality Tested",
    description: "Laboratory tested for purity, potency and absence of contaminants",
    logo: img9
  }
];

export default function CertificationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  // Auto slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering]);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Toggle autoplay
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <div className="text-center mb-8">
        <h2 className="font-[Raleway] text-lg md:text-2xl tracking-[.4em] text-gray-600 uppercase mb-2">
          Trusted Quality for Authentic Ayurvedic Excellence
        </h2>
        <div className="flex justify-center flex-wrap">
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-black">
            PRODUCT{" "}
          </span>
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-[#348101] ml-2 md:ml-4">
            CERTIFICATIONS
          </span>
        </div>
      </div>
      
      <div 
        className="relative bg-green-50 rounded-lg p-8 shadow-2xl"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex items-center justify-between">
          <button 
            onClick={prevSlide}
            className="absolute left-4 bg-white rounded-full p-2 shadow-md text-black hover:text-white hover:bg-[#348101] transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Previous certification"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="w-full flex flex-col md:flex-row items-center justify-center p-4 transition-opacity duration-300">
            <div className="relative w-64 h-64 flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <img 
                src={certifications[currentIndex].logo} 
                alt={`${certifications[currentIndex].name} certification`}
                className="w-60 h-60 object-contain transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="text-center md:text-left max-w-md">
              <h3 className="text-2xl font-[Raleway] font-semibold text-[#348101] mb-3">
                {certifications[currentIndex].name}
              </h3>
              <p className="text-gray-700 font-[Raleway] text-lg">
                {certifications[currentIndex].description}
              </p>
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-4 bg-white rounded-full p-2 shadow-md text-black hover:text-white hover:bg-[#348101] transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Next certification"
          >
            <ChevronRight size={36} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#348101] w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={toggleAutoPlay}
          className="absolute bottom-2 right-2 text-gray-500 hover:text-[#348101] focus:outline-none focus:text-[#348101]"
          aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isAutoPlaying ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
        </button>
      </div>
    </div>
  );
}