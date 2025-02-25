import React from 'react';
import WWA from '../../assets/Home_Assets/WWA.png';
import INTRO from '../../assets/Home_Assets/INTRO.png';

const Whoweare = () => {
  return (
    <div
      className="flex justify-center items-center w-full relative"
      style={{
        marginTop: '30px',
        backgroundImage: `url(${WWA})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '1000px',
        '@media (max-width: 768px)': {
          height: '400px',  
        },
      }}
    >
      <div 
        className="absolute"
        style={{
          top: '60%', 
          left: '60%', 
          transform: 'translate(-135%, -65%)',
        }}
      >
        <img src={INTRO} alt="intro" className="w-full h-auto rounded" />
        <button
          className="absolute lg:px-4 lg:py-2 lg:text-sm md:px-2 md:py-1 md:text-sm sm:px-2 sm:py-1 sm:text-sm border border-black text-black rounded-lg transition-all duration-200 hover:text-white hover:bg-[#8CC85F] hover:border-transparent"
          style={{
            top: '91%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Read More {'>>>'}
        </button>
      </div>
      {/* Responsive Adjustments */}
      <div 
        className="absolute w-[90%] sm:w-[80%] md:w-[70%] lg:hidden"
        style={{
          top: '60%', 
          left: '50%', 
          transform: 'translate(-50%, -65%)',
        }}
      >
        <img src={INTRO} alt="intro" className="w-full h-auto rounded" />
        <button
          className="absolute px-4 py-2 border border-black text-black rounded-lg transition-all duration-200 hover:text-white hover:bg-[#8CC85F] hover:border-transparent"
          style={{
            top: '91%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Read More {'>>>'}
        </button>
      </div>
    </div>
  );
};

export default Whoweare;
