import React from 'react'

import landing from "../assets/lankapura.jpg";
import plantImage from "../assets/plantcrop.png";

export default function migraine() {
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
            width: 25%; /* Adjust size to cover the right side */
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
            Migraine
          </h1>
        </div>

      </main>

      <section
        className="py-12 px-6 content-section"
        style={{
          backgroundColor: "#FEF7FF", // Light wheat background
          height: "860px", // Set the height to 500px
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
          Migraine
        </h2>
        <p
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
            fontSize: "1.2rem",
          }}
        >
          A migraine can cause severe throbbing pain or a pulsing sensation, usually on
           one side of the head. It’s often accompanied by nausea, vomiting, and extreme 
           sensitivity to light and sound. Migraine attacks can last for hours to days, 
           and the pain can be so severe that it interferes with your daily activities. 
           For some people, a warning symptom known as an aura occurs before or with the 
           headache. An aura can include visual disturbances, such as flashes of light 
           or blind spots, or other disturbances, such as tingling on one side of the 
           face or in an arm or leg and difficulty speaking.
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
          <li>A severe headache</li>
          <li>Constipation</li>
          <li>Mood changes, from depression to euphoria</li>
          <li>Food cravings</li>
          <li>Neck stiffness</li>
          <li>Increased thirst and urination</li>
          <li>Frequent yawning</li>
          
        </ul>

        <h2
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          4 Stages of a migraine
        </h2>

        <ul
          style={{
            fontWeight: 400,
          }}        
        >
          <li>Prodromal stage – Change in mood/energy levels/behavior and appetite</li>
          <li>Aura – Usually visual problems</li>
          <li>Headache stage – Pulsation pain on usually one side of the head</li>
          <li>Resolution stage – Above symptoms gradually fade away but may feel tires for few days afterwards</li>
          
        </ul>

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
