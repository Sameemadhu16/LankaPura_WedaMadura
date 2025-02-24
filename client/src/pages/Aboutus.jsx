import React from 'react'

import landing from "../assets/aboutus.jpg";
import plantImage from "./../assets/wedamedura-ayurveda.jpg";
import aboutthedoctorImage from "../assets/DOCTOR.jpg";


import "../css/Aboutus.css"; // Ensure this CSS file exists and includes styles





const Aboutus = () => {
 
  return (
    <div> 
      <style>
        {`
          .right-image {
            position: absolute;
            margin-top: 960px; /* Adjust as needed */
            margin-right: 110px; /* Adjust as needed */
            width: 40%; /* Adjust size to cover the right side */
            height: 105.3%;
            object-fit: cover;
            z-index: 10;
            right: 0;
            top: 0; /* Adjust as needed */
            max-width: 100%; /* Ensures responsiveness */
            height: 50%;
}
        `}

{`
          .left-image {
            position: absolute;
            margin-top: 1400px; /* Adjust as needed */
            margin-left: 280px; /* Adjust as needed */
            width: 40%; /* Adjust size to cover the right side */
            height: auto;
            object-fit: contain;
            z-index: 10;
            left: 0;
            top: 0; /* Adjust as needed */
            max-width: 20%; /* Ensures responsiveness */
            // max-height: 80%; 
            
}
        `}
      </style>

    
      <main
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 100)), url(${landing})`,
        }}
      >
        <h1
          className="mb-4 font-[playfair] text-center font-medium text-7xl animate-fade-in"
          style={{ marginTop: '390px' }}
        >
          About Lankapura Weda Madura
        </h1>

          <h1 className="text-center font-[Raleway] text-2xl text-[#EEE183]"
          style={{
            marginRight: "100px", // Additional margin for the second line
            
          }}
          >
          "The People's Wellness Hub, 
          </h1>
          
          <h1
          className="text-center font-[Raleway] text-2xl text-[#EEE183]"
          style={{
            marginLeft: "100px", // Additional margin for the second line
            
          }}>
          where healing hands unite."
          </h1> 

      </main>

      <section
        className="py-12 px-6 "
        style={{
          backgroundColor: "#FEF7FF", 
          height: "1100px",// Light wheat background  #FEF7FF
        }}
      >
        <h1
            className="font-[Raleway] text-center text-2xl mb-6"
            style={{ color: "black",
              fontWeight: "100",
             }}
          >
            We have found many successful medicines for many diseases, raying only on Herbs.
          </h1>
        
        <div className="max-w-6xl mx-auto text-left">
          
          <h2
            className="text-4xl font-[playfair] font-bold w-1/2 "
            style={{
              color: "#5A3D00",
              marginTop: "50px",
              fontWeight: 400,
              marginLeft: "0px", // Additional margin for the second line
              fontSize: "3rem",
            }}
          >
            Our Story
          </h2>

          <p
          className="font-[Raleway] font-normal w-1/2 text-justify leading-relaxed ml-0 mt-10"  
                   
          >
          Dr. Tharanga Kumari Wickramasuriya, the last surviving member 
          of a 700-year-old lineage of medicine, is a beacon of hope in 
          the medical community. Known as the <span style={{ color: "#006400", fontWeight: "bold" }}>“Dengue Doctor,”</span>{" "}she has 
          developed a 100% successful drug for dengue fever, curing over 
          100.000 patients. Her innovative treatments have also addressed 
          <span style={{ color: "#006400", fontWeight: "bold" }}>{" "}COVID-19,</span> providing care to both local and international patients. 
          At Lankapura Medical Center, Dr. Wickramasooriya offers comprehensive 
          medical care for all physical ailments.

          
          </p>

          <p
          className="font-[Raleway] font-normal w-1/2 text-justify leading-relaxed"  
          style={{marginTop: "30px"  }}         
          >
          
          Why People Choose Us At Lankapura Medical Center, we prioritize quality 
          service in a serene and welcoming environment. Our commitment to excellence 
          is reflected in our ability to offer a wide range of personalized treatments, 
          harnessing the power of Sri Lankan indigenous medicine. Our holistic approach 
          ensures that each patient receives tailored care that addresses their unique 
          needs. promoting overall well-being and healing
          </p>

          <img
          src={plantImage}
          alt="Plant"
          className="right-image"
          />
          
        </div>

        

        
        
        <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl font-[playfair] font-bold text-left"
          style={{
            color: "#5A3D00",
            marginTop: "70px",
            fontWeight: 400,
            marginLeft: "610px", // Additional margin for the second line
            fontSize: "3rem",
          }}
        >
          Discover The Legacy of Dr.Tharanga Kumari
          
        </h2>

        

        <div className="arrow">&#8595;</div>


          {/* <p
            className="font-[Raleway] font-normal w-1/2 text-justify leading-relaxed ml-auto mt-10"
          >
            Dr. Tharanga Kumari Wickramasooriya is the proud torchbearer of a 700-year-old
            legacy of healing, blending traditional wisdom with modern medical expertise.
            Inspired by her father, a respected doctor, and her grandfather, a renowned
            hereditary healer, she grew up surrounded by dedication and care. Their passion
            ignited her sense of responsibility to continue this extraordinary family tradition,
            combining precision, compassion, and timeless knowledge in her practice.
            <a href="/abd" className="text-green-700 cursor-pointer hover:underline hover:text-green-900"> Read more...</a>
          </p> */}

                

                <button
                onClick={() => (window.location.href = "/abd")}
                className="px-2 py-1 text-black rounded-lg shadow-md border border-black hover:bg-[#348101] hover:text-white hover:border-transparent "
                style={{marginLeft: "300px" , marginTop: "10px"}}
                >
                Click here
                </button>

          <img
          src={aboutthedoctorImage}
          alt="Plant"
          className="left-image"
          />
        </div>

        


        {/* <img
          src={aboutthedoctorImage}
          alt="Plant"
          className="left-image"
        /> */}
      </section>


    </div>
  )
}

export default Aboutus




