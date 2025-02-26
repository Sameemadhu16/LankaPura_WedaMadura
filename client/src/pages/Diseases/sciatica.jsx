import React from 'react'

import landing from "../../assets/lankapura.jpg";
import plantImage from "../../assets/plantcrop.png"; 

export default function sciatica() {
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
            width: 35%; /* Adjust size to cover the right side */
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
            Sciatica
          </h1>
        </div>

        {/* Curved Image on the Right */}
        {/* <img
          src={kidneyImage} // Replace with the image path
          alt="Curved Right Image"
          className="curved-image"
        /> */}
      </main>

      <section
        className="py-12 px-6 content-section"
        style={{
          backgroundColor: "#FEF7FF", // Light wheat background
          height: "1300px", // Set the height to 500px
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
          Sciatica
        </h2>
        <p
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
            fontSize: "1.2rem",
          }}
        >
          Sciatica refers to pain that radiates along the path of the sciatic 
          nerve, which branches from your lower back through your hips and 
          buttocks and down each leg. Typically, sciatica affects only one 
          side of your body. The most common cause is a herniated or slipped 
          disk that causes pressure on the nerve root. This causes inflammation, 
          pain and often some numbness in the affected leg.
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
          <li>Lower back pain</li>
          <li>Pain in the rear or leg that is worse when sitting</li>
          <li>Hip pain</li>
          <li>Burning or tingling down the leg</li>
          <li>Weakness, numbness, or a hard time moving the leg or foot</li>
          <li>A constant pain on one side of the rear</li>
          <li>A shooting pain that makes it hard to stand up</li>
          
        </ul>

        <h2
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
         
          <span style={{ color: "#006400" }}>Sciatica</span>{" "} pain feel like
        </h2>

        <p
          style={{
            fontWeight: 400,
          }}        
        >
          People describe sciatica pain in different ways, 
          it depends on its cause. Some people describe the 
          pain as sharp, shooting or jolts of pain. While 
          some describe this pain as “burning,” “electric” or “stabbing.”
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Are you at a risk of{" "}
          <span style={{ color: "#006400" }}>Sciatica</span>?
        </h2>

        <p
          style={{
            fontWeight: 400,
          }}        
        >
          If you have following factors, you have a greater risk,
        </p>

        <ul
          style={{
            fontWeight: 400,
          }}        
        >
          <li>Have or previously had an injury to your lower back or spine</li>
          <li>When a person gets old</li>
          <li>Overweight</li>
          <li>Lack a strong core</li>
          <li>Doing jobs that require heavy lifting</li>
          <li>Incorrect posture</li>
          <li>Have diabetes or Osteoarthritis</li>
          <li>Inactive lifestyle</li>
          <li>Smoking</li>
        </ul>

        <h2
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Is the {" "}
          <span style={{ color: "#006400" }}>increase of weight of a pregnant person</span>{" "}also a reason?
        </h2>

        <p
          style={{
            fontWeight: 400,
          }}        
        >
          It’s true that sciatica is common in pregnancy. 
          But increased weight is not the main reason why 
          pregnant women get sciatica. It happens because 
          certain hormones of pregnancy cause a loosening of their ligaments.
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
