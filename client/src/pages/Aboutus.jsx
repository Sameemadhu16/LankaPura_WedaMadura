// import React from 'react'
// import landing from "../assets/aboutus.jpg";
// import plantImage from "./../assets/wedamedura-ayurveda.jpg";
// import aboutthedoctorImage from "../assets/DOCTOR.jpg";
// import { BsChevronDoubleDown } from "react-icons/bs";
// import "../css/Aboutus.css"; // Ensure this CSS file exists and includes styles





// const Aboutus = () => {
 
//   return (
//     <div> 
//       <style>
//         {`
//           .right-image {
//             position: absolute;
//             margin-top: 960px; /* Adjust as needed */
//             margin-right: 110px; /* Adjust as needed */
//             width: 40%; /* Adjust size to cover the right side */
//             height: 105.3%;
//             object-fit: cover;
//             z-index: 10;
//             right: 0;
//             top: 0; /* Adjust as needed */
//             max-width: 100%; /* Ensures responsiveness */
//             height: 50%;
// }
//         `}

// {`
//           .left-image {
//             position: absolute;
//             margin-top: 1400px; /* Adjust as needed */
//             margin-left: 280px; /* Adjust as needed */
//             width: 40%; /* Adjust size to cover the right side */
//             height: auto;
//             object-fit: contain;
//             z-index: 10;
//             left: 0;
//             top: 0; /* Adjust as needed */
//             max-width: 20%; /* Ensures responsiveness */
//             // max-height: 80%; 
            
// }
//         `}
//       </style>

    
//       <main
//         className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
//         style={{
//           backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 100)), url(${landing})`,
        
//         }}
//       >
//         <h1
//           className="mb-4 font-[playfair] text-center font-medium text-7xl fade-in"
//           style={{ marginTop: "390px" }}
//         >
//           About Lankapura Weda Madura
//         </h1>


//           <h1 className="text-center font-[Raleway] text-2xl text-[#EEE183]"
//           style={{
//             marginRight: "100px", // Additional margin for the second line
            
//           }}
//           >
//           "The People's Wellness Hub, 
//           </h1>
          
//           <h1
//           className="text-center font-[Raleway] text-2xl text-[#EEE183]"
//           style={{
//             marginLeft: "100px",
            
//           }}>
//           where healing hands unite."
//           </h1> 

          

          

//       </main>

//       <section
//             className="py-12 px-6 "
//             style={{
//               backgroundColor: "#FEF7FF", 
//               height: "1100px",
//             }}
//           >
//           <h1
//               className="font-[Raleway] text-center text-2xl mb-6"
//               style={{ color: "black",
//                 fontWeight: "100",
//               }}
//           >
//             We have found many successful medicines for many diseases, raying only on Herbs.
//           </h1>
        
//         <div className="max-w-6xl mx-auto text-left">
          
//           <h2
//             className="text-4xl font-[playfair] font-bold w-1/2 "
//             style={{
//               color: "#5A3D00",
//               marginTop: "50px",
//               fontWeight: 400,
//               marginLeft: "0px", 
//               fontSize: "3rem",
//             }}
//           >
//             Our Story
//           </h2>

//           <p
//           className="font-[Raleway] font-normal w-1/2 text-justify leading-relaxed ml-0 mt-10"  
                   
//           >
//           Dr. Tharanga Kumari Wickramasuriya, the last surviving member 
//           of a 700-year-old lineage of medicine, is a beacon of hope in 
//           the medical community. Known as the <span style={{ color: "#006400", fontWeight: "bold" }}>“Dengue Doctor,”</span>{" "}she has 
//           developed a 100% successful drug for dengue fever, curing over 
//           100.000 patients. Her innovative treatments have also addressed 
//           <span style={{ color: "#006400", fontWeight: "bold" }}>{" "}COVID-19,</span> providing care to both local and international patients. 
//           At Lankapura Medical Center, Dr. Wickramasooriya offers comprehensive 
//           medical care for all physical ailments.

          
//           </p>

//           <p
//           className="font-[Raleway] font-normal w-1/2 text-justify leading-relaxed"  
//           style={{marginTop: "30px"  }}         
//           >
          
//           Why People Choose Us At Lankapura Medical Center, we prioritize quality 
//           service in a serene and welcoming environment. Our commitment to excellence 
//           is reflected in our ability to offer a wide range of personalized treatments, 
//           harnessing the power of Sri Lankan indigenous medicine. Our holistic approach 
//           ensures that each patient receives tailored care that addresses their unique 
//           needs. promoting overall well-being and healing
//           </p>

//           <img
//           src={plantImage}
//           alt="Plant"
//           className="right-image"
//           />
          
//         </div>

        

        
        
//         <div className="max-w-6xl mx-auto text-center">
//         <h2
//           className="text-4xl font-[playfair] font-bold text-left"
//           style={{
//             color: "#5A3D00",
//             marginTop: "70px",
//             fontWeight: 400,
//             marginLeft: "610px", // Additional margin for the second line
//             fontSize: "3rem",
//           }}
//         >
//           Discover The Legacy of 
          
//         </h2>

//         <h2
//           className="text-4xl font-[playfair] font-bold text-left"
//           style={{
//             color: "#5A3D00",
           
//             fontWeight: 400,
//             marginLeft: "640px", 
//             fontSize: "3rem",
//           }}
//         >
//           Dr.Tharanga Kumari
          
//         </h2>

        

//         <div className=" flex justify-center" >

//         <BsChevronDoubleDown className='text-9xl arrow' style={{marginLeft:'500px'}} />

//         </div>


          

                

//                 <button
//                 onClick={() => (window.location.href = "/abd")}
//                 className="px-10 py-1 text-black rounded-lg shadow-md border border-black hover:bg-[#348101] hover:text-white hover:border-transparent  "
//                 style={{marginLeft: "510px" , marginTop: "10px", fontWeight: "bold"}}
//                 >
//                 Explore me
//                 </button>

//           <img
//           src={aboutthedoctorImage}
//           alt="Plant"
//           className="left-image"
//           />
//         </div>

        
//       </section>




//     </div>
//   )
// }

// export default Aboutus



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
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-[playfair] font-medium fade-in" style={{marginTop:'400px'}}>
          About Lankapura Weda Madura
        </h1>
        <h1 className="text-center font-[Raleway] text-2xl text-[#EEE183]" style={{ marginTop: '20px' }}>
        “Embracing Wellness Through the Wisdom of Ayurveda...”
        </h1>

        
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

        {/* Doctor Section */}
        <div className="max-w-6xl mx-auto mt-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-[playfair] font-bold text-[#5A3D00]">
            Discover The Legacy of <br /> Dr. Tharanga Kumari
          </h2>

          {/* Scroll Icon */}
          <div className="flex justify-center mt-8">
            <BsChevronDoubleDown className="text-5xl sm:text-7xl text-gray-700 animate-bounce" />
          </div>

          
          {/* <button
            onClick={() => (window.location.href = "/abd")}
            className="mt-6 px-6 py-2 text-lg font-bold text-black border border-black rounded-lg shadow-md hover:bg-green-700 hover:text-white transition"
          >
            Explore me
          </button>

          
          <div className="flex justify-center mt-10" >
            <img src={aboutthedoctorImage} alt="Doctor" className="w-full sm:w-3/4 lg:w-1/2 rounded-lg shadow-lg"  />
          </div> */}

          <div className="relative flex justify-center mt-10">
            {/* Wrapper for hover effect */}
            <div className="relative group w-full sm:w-3/4 lg:w-1/2">
              {/* Doctor Image with Shading on Hover */}
              <img 
                src={aboutthedoctorImage} 
                alt="Doctor" 
                className="w-full rounded-lg shadow-lg transition duration-300 group-hover:brightness-75 "

              />

              {/* Explore Me Button (Appears Only on Hover) */}
              <button
                onClick={() => (window.location.href = "/abd")}
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-2 text-lg font-bold text-black border border-black rounded-lg shadow-md bg-white opacity-0 transition duration-300 group-hover:opacity-100 hover:bg-green-700 hover:text-white"
               
              >
                Explore here
              </button>
            </div>
          </div>



        </div>
      </section>
    </div>
  );
};

export default Aboutus;

