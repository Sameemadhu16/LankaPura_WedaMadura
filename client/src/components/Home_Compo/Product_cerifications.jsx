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

const certifications = [
  { id: 1, name: "Quality Management System Certification", logo: img1 },
  { id: 2, name: "Quality Management System Certification",  logo: img2 },
  { id: 3, name: "Food Safety Management System Certification", logo: img3 },
  { id: 4, name: "Good Manufacturing Practice Certification", logo: img4 },
  { id: 5, name: "Certification Of Malaysian Health Ministry",  logo: img5 },
  { id: 6, name: "Halal Certification", logo: img6 },
  { id: 7, name: "Certification Of SriLanka Ayurvedic Council", logo: img7 },
  { id: 8, name: "Quality Tested", logo: img8 },
  { id: 9, name: "Certification Of SriLanka Ayurvedic Department", logo: img9 },
];

export default function CertificationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const itemsPerView = 4;

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = certifications.length - itemsPerView;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = certifications.length - itemsPerView;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = certifications.length - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="max-w-7xl mx-auto my-12 px-4">
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
        className="relative bg-transparent rounded-lg py-8 "
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-black hover:text-white hover:bg-[#348101] transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Previous certification"
        >
          <ChevronLeft size={36} />
        </button>

        <div className="relative w-full px-20">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex-shrink-0 bg-transparent rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  style={{ width: '25%' }}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="relative w-32 h-32 mb-4 flex items-center justify-center">
                      <img
                        src={cert.logo}
                        alt={`${cert.name} certification`}
                        className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-[Raleway] text-[#000000] mb-3">
                      {cert.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-black hover:text-white hover:bg-[#348101] transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Next certification"
        >
          <ChevronRight size={36} />
        </button>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: certifications.length - itemsPerView + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#348101] w-6'
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={toggleAutoPlay}
          className="absolute bottom-2 right-2 text-gray-500 hover:text-[#348101] focus:outline-none focus:text-[#348101]"
          aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
        >
          {isAutoPlaying ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
        </button>
      </div>
    </div>
  );
}
