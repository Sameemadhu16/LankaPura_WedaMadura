import React from 'react';
import Checkmark from './Checkmark';
import DoctorImage from './Doctor';

const Aboutthedoctor = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full px-2 sm:px-5 md:px-6 lg:px-7 bg">
      {/* Doctor's Image */}
      <DoctorImage className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" />

      {/* About Content */}
      <div className="w-full items-center max-w-[600px] sm:w-3/4 md:w-1/2 lg:w-1/2 -ml-0 sm:-ml-10 md:-ml-20 lg:-ml-24 mt-8 sm:mt-0">
        <h1 className="font-[playfair] text-4xl sm:text-5xl md:text-6xl lg:text-6xl mb-6 sm:mb-8 md:mb-12 lg:mb-14 text-center mt-10">
          <span className="text-black">ABOUT THE </span>
          <span className="text-[#348101]">DOCTOR</span>
        </h1>
        <h2 className="text-2xl sm:text-2xl font-medium text-center font-[Raleway]">
          Dr. Tharanga Kumari Wickramasooriya
        </h2>
        <h2 className="text-2xl sm:text-2xl font-medium mb-8 sm:mb-10 md:mb-12 text-center font-[Raleway] text-[#348101]">
          - A Legacy in Herbal Healing -
        </h2>
        <p className="text-gray-600 mb-7 sm:mb-8 text-center font-[Raleway]">
          Dr. Tharanga Kumari Wickramasooriya is the proud torchbearer of a 700-year-old legacy
          of healing, blending traditional wisdom with modern medical expertise. Inspired by her
          father, a respected doctor, and her grandfather, a renowned hereditary healer, she grew up
          surrounded by dedication and care. Their passion ignited her sense of responsibility to
          continue this extraordinary family tradition, combining precision, compassion, and timeless
          knowledge in her practice.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 mb-10">
          <div className="flex items-center gap-2 p-4">
            <span><Checkmark /></span>
            <p>Professional Therapist</p>
          </div>
          <div className="flex items-center gap-2 p-4">
            <span><Checkmark /></span>
            <p>Organic Herbal</p>
          </div>
          <div className="flex items-center gap-2 p-4">
            <span><Checkmark /></span>
            <p>24/7 Support</p>
          </div>
        </div> 
        {/* Read More Button */}
        <div className="w-full flex justify-center mt-6">
          <button className="px-6 py-3 text-black rounded-lg shadow-md border border-black hover:bg-[#348101] hover:text-white hover:border-transparent">
            Read More {'>>>'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutthedoctor;
