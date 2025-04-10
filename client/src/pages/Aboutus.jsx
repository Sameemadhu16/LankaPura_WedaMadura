

import React from "react";
import landing from "../assets/aboutus.jpg";
import plantImage from "./../assets/wedamedura-ayurveda.jpg";
import aboutthedoctorImage from "../assets/DOCTOR.jpg";
import { BsChevronDoubleDown } from "react-icons/bs";
import LankapuraVideo from './../assets/lankapuravideo.mp4';
import "../css/Aboutus.css"; // Ensure this CSS file exists and includes styles


const Aboutus = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <main
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)), url(${landing})`,
        }}
      >
      <div className="mb-4 text-center font-medium " style={{ marginTop: '350px' }}>  
        <h1
          className="title font-[playfair] text-7xl"
          initial={{ opacity: 0, y: 30 }} // Start slightly lower
          animate={{ opacity: 1, y: 0 }} // Move to final position
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }} // Smooth cubic bezier easing

        >
          Crafted by nature, trusted by you
        </h1>
      </div>
        <h1 className="text-center font-[Raleway] text-2xl text-[#EEE183]" style={{ marginTop: '20px' }}>
        “Embracing Wellness Through the Wisdom of Ayurveda...”
        </h1>
        <div className="animated-arrow-container">
          <span className="animated-arrow"></span> {/* Retain only the arrow */}
        </div>


        
      </main>

      {/* About Section */}
      <section className="bg-[#FEF7FF] py-12 px-6">
        <h1 className="text-center text-xl sm:text-2xl font-[Raleway] text-black font-light mb-6">
          We have found many successful medicines for many diseases, relying only on Herbs.
        </h1>

        {/* Content Layout */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="lg:w-1/2">
            {/* <h2 className="text-3xl sm:text-4xl font-[playfair] font-bold text-[#5A3D00] mb-6">
              Our Story
            </h2> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[playfair] font-bold text-[#5A3D00] mb-6 text-center sm:text-left">
              Our Story
            </h2>

            <p className="text-justify text-lg font-[Raleway] leading-relaxed">
              Dr. Tharanga Kumari Wickramasuriya, the last surviving member of a 700-year-old lineage of medicine, 
              is a beacon of hope in the medical community. Known as the{" "}
              <span className="text-green-700 font-bold">“Dengue Doctor”</span>, she has developed a 100% successful 
              drug for dengue fever, curing over 100,000 patients. Her innovative treatments have also addressed{" "}
              <span className="text-green-700 font-bold">COVID-19</span>, providing care to both local and international patients.
            </p>

            <p className="text-justify text-lg font-[Raleway] leading-relaxed mt-6">
              At Lankapura Medical Center, we prioritize quality service in a serene and welcoming environment. 
              Our holistic approach ensures that each patient receives tailored care, promoting overall well-being and healing.
            </p>
          </div>

          
          <div className="video-container" >
            <video controls >
              <source src={LankapuraVideo} type="video/mp4"  />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Doctor Section with Collage-Style Gallery */}
        <div className="max-w-6xl mx-auto mt-16 text-center">
        <div className="relative py-8">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-600 rounded-full"></div>
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-50 rounded-full opacity-30"></div>
          
          {/* Main heading with enhanced styling */}
          <h2 className="text-3xl sm:text-4xl font-[playfair] font-bold text-[#5A3D00] mb-2 tracking-wide relative">
            <span className="relative inline-block">
              Discover The Legacy of
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-700 transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
            </span>
          </h2>
          
          <h2 className="text-4xl sm:text-5xl font-[playfair] font-bold text-[#5A3D00] mt-2 mb-6 tracking-wide relative">
            <span className="relative inline-block">
              Dr. Tharanga Kumari
              <span className="absolute -bottom-3 left-0 w-full h-0.5 bg-green-700 transform origin-left scale-x-30"></span>
            </span>
          </h2>
          
          {/* Optional subtitle with elegant styling */}
          <p className="text-lg font-[Raleway] text-amber-800 italic mt-4 max-w-xl mx-auto">
            A 700-year legacy of healing wisdom
          </p>
          
          {/* Decorative flourish */}
          <div className="flex justify-center items-center mt-6">
            <div className="w-12 h-0.5 bg-amber-700"></div>
            <div className="mx-3">
              <svg className="w-6 h-6 text-amber-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="w-12 h-0.5 bg-amber-700"></div>
          </div>
        </div>

          {/* Asymmetric Collage Gallery */}
          <div className="relative w-full h-[800px] sm:h-[700px] mx-auto px-4">
            {/* Large left image */}
            <div className="absolute left-0 top-0 w-[45%] h-[60%] p-1">
              <img 
                src={aboutthedoctorImage} 
                alt="Dr. Tharanga Kumari" 
                className="w-full h-full object-cover border-2 border-white shadow-lg"
              />
            </div>
            
            {/* Medium center-right image */}
            <div className="absolute right-0 top-0 w-[50%] h-[50%] p-1">
              <img 
                src={aboutthedoctorImage} 
                alt="Dr. Tharanga with patients" 
                className="w-full h-full object-cover border-2 border-white shadow-lg"
              />
            </div>
            
            {/* Small center-left bottom image */}
            <div className="absolute left-[10%] bottom-0 w-[30%] h-[35%] p-1">
              <img 
                src={aboutthedoctorImage} 
                alt="Dr. Tharanga preparing medicine" 
                className="w-full h-full object-cover border-2 border-white shadow-lg"
              />
            </div>
            
            {/* Medium right bottom image */}
            <div className="absolute right-[5%] bottom-0 w-[45%] h-[45%] p-1">
              <img 
                src={aboutthedoctorImage} 
                alt="Dr. Tharanga teaching" 
                className="w-full h-full object-cover border-2 border-white shadow-lg"
              />
            </div>
            
            {/* Optional: Small accent image */}
            <div className="absolute left-[45%] top-[30%] w-[25%] h-[30%] p-1">
              <img 
                src={aboutthedoctorImage} 
                alt="Ayurvedic herbs" 
                className="w-full h-full object-cover border-2 border-white shadow-lg"
              />
            </div>
          </div>
          
          {/* Explore Button - Below the gallery */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => (window.location.href = "/abd")}
              className="px-6 py-3 text-lg font-bold text-white bg-green-700 border border-green-800 rounded-lg shadow-md hover:bg-green-800 transition"
            >
              Explore Her Full Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;

