import React from 'react'

import landing from "../../assets/lankapura.jpg";
import plantImage from "../../assets/plantcrop.png";

export default function catarrh() {
  return (
    <div>

      {/* Inline CSS for animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(-5px); /* Subtle left-to-right animation */
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .fade-in {
            animation: fadeIn 2s ease-in-out;
          }

          /* CSS for the right-side image */
          .right-image {
            position: absolute;
            top: 0;
            right: 0;
            width: 30%; /* Adjust size to cover the right side */
            height: 105.3%;
            object-fit: cover;
            z-index: 10;
            opacity: 0.3; /* Reduced opacity */
          }

          /* Curved bottom edge of the landing page */
          .landing-page {
            background-image: url(${landing});
            background-size: cover;
            background-position: center;
            height: 500px; /* Fixed height for the background image */
            position: relative;
            clip-path: polygon(0 0, 100% 0%, 100% 85%, 50% 100%, 0 85%); /* Curved bottom edge */
            overflow: hidden; /* Ensures the content doesn't spill over */
          }

          /* Overlay Layer */
          .landing-overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
          }

          /* Content Layer */
          .landing-content {
            position: relative;
            z-index: 10;
            flex-direction: column;
            align-items: start;
            padding-left: 40px;
            display: flex;
            justify-content: center;
            height: 100%;
          }

          .landing-content h1 {
            font-family: 'Playfair Display SC', serif;
            font-weight: 700;
            color: white; /* Change the text color to white */
          }

          .content-section {
            padding: 80px;
            text-align: left;
            font-family: Arial, sans-serif;
            font-size: 1.1rem;
            position: relative; /* Added relative positioning to contain the absolute image */
          }

          .content-section h2 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .content-section ul {
            list-style-type: disc;
            margin-left: 20px;
          }

          .content-section ul li {
            margin-bottom: 0.5rem;
          }

          .content-section p {
            margin-bottom: 1rem;
          }
          .footer-section {
      
            overflow: hidden; /* Hide the bottom part of the image */
          }
        `}
      </style>

      <main className="landing-page">
        {/* Overlay Layer */}
        <div className="landing-overlay"></div>

        {/* Content Layer */}
        <div className="landing-content fade-in">
          {/* First Line */}
          <h1
            className="text-4xl font-bold mb-2"
            style={{
              fontFamily: "'Playfair Display SC', serif",
              fontWeight: 500,
              marginLeft: "150px", // Move the text slightly to the right
              fontSize: "3rem",
            }}
          >
            Ayurvedic Treatments for
          </h1>

          {/* Second Line with Padding */}
          <h1
            className="text-4xl font-bold"
            style={{
              fontFamily: "'Playfair Display SC', serif",
              fontWeight: 500,
              marginLeft: "200px", // Additional margin for the second line
              fontSize: "3rem",
            }}
          >
            Catarrh
          </h1>
        </div>

      </main>

      <section
        className="py-12 px-6 content-section"
        style={{
          backgroundColor: "#FEF7FF", // Light wheat background
          height: "1000px", // Set the height to 500px
        }}
      >
        <h2
          className="text-4xl font-bold"
          style={{
            color: "#5A3D00",
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 600,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "3rem",
          }}
        >
          Catarrh
        </h2>
        <p
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
            fontSize: "1.2rem",
          }}
        >
          The term catarrh, or postnasal drip, describes a buildup of mucus in 
          the back of the nose, throat, or sinuses. Mucus is a slippery, fluid 
          substance that the mucus glands in the nose and throat produce. It helps 
          moisten the nasal passages while trapping any debris, viruses, or bacteria 
          a person inhale. This helps prevent pathogens from getting into the body, 
          where they could cause an infection.
        </p>

        

        <h2
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Symptoms
        </h2>
        <ul
          style={{
            fontWeight: 400,
          }}
        >
          <li>Rasping or gurgling when talking</li>
          <li>Tickling feeling of mucus draining into the throat</li>
          <li>Feeling as though there is a lump in the throat</li>
          <li>Having to clear the throat frequently</li>
          <li>Coughing</li>
          <li>Having to swallow frequently</li>
          <li>Difficulty swallowing</li>
          <li>A sore throat</li>
          <li>A blocked or stuffy nose</li>
          <li>A headache</li>
          <li>Facial pain</li>
          <li>A loss of taste or smell</li>
          <li>Difficulty of sleeping</li>
        </ul>

        <h2
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Can we prevent {" "}
          <span style={{ color: "#006400" }}>Catarrh</span>?
        </h2>

        <p
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
            fontSize: "1.2rem",
          }}
        >
          It is recommended that you avoid things which can trigger catarrh 
          (such as smoky places or allergens) and take sips of cold water when 
          you feel the need to clear your throat. It is important to note that 
          constantly clearing your throat may make things worse. Catarrh can 
          also be caused by warm and dry atmospheres like air conditioning or 
          car heating. So, if you can avoid these environments, combined with 
          staying well hydrated should help.
        </p>

        {/* Plant Image */}
        <img
          src={plantImage}
          alt="Plant"
          className="right-image"
        />
      </section>

      {/* <Footer /> */}
    </div>
  )
}
