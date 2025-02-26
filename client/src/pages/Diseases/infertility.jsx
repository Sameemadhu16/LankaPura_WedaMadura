import React from 'react'

import landing from "../../assets/lankapura.jpg";
import plantImage from "../../assets/plantcrop.png"; // Replace with your actual image for the right side

export default function infertility() {
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
            Infertility

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
          height: "1150px", // Set the height to 500px
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
          Infertility

        </h2>
        <p
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
            fontSize: "1.2rem",
          }}
        >
          Infertility is defined as trying to get pregnant (with frequent intercourse) 
          for at least a year with no success. Female infertility, male infertility 
          or a combination of the two affects millions of couples. An estimated 10 to 18 
          percent of couples have trouble getting pregnant or having a successful delivery. 
          Infertility results from female factors about one-third of the time and male 
          factors about one-third of the time. The cause is either unknown or a combination
          of male and female factors in the remaining cases.
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
          <li>Main symptom is not getting pregnant.</li>
          <li>A menstrual cycle that’s too long (35 days or more), too short (less than 21 days)</li>
          <li>A man with infertility may have some signs of hormonal problems, such as changes in hair growth or sexual function.</li>
          
        </ul>

        <h2
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          When you need {" "}
          <span style={{ color: "#006400" }}>treatments</span>?
        </h2>


        <p
          style={{
            fontWeight: 400,
          }}        
        >
          You probably don’t need to go for treatments or advice about infertility unless 
          you have been trying regularly to get pregnant for at least one year.
          A woman should go for treatments or advice if,
        </p>

        <ul
          style={{
            fontWeight: 400,
          }}
        >
          <li>Age 35 or older and have been trying to conceive for six months or longer</li>
          <li>Over age 40</li>
          <li>Have irregular or absent periods</li>
          <li>Have very painful periods</li>
          <li>Have known fertility problems</li>
          <li>Have been diagnosed with endometriosis or pelvic inflammatory disease</li>
          <li>Have had multiple miscarriages</li>
          <li>Have undergone treatment for cancer</li>
        </ul>

        <h2
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          A man should go for treatments or advice if,
        </h2>

        <ul
          style={{
            fontWeight: 400,
          }}
        >
          <li>A low sperm counts or other problems with sperm</li>
          <li>A history of testicular, prostate or sexual problems</li>
          <li>Undergone treatment for cancer</li>
          <li>Small testicles or swelling in the scrotum</li>
          <li>Others in your family with infertility problems</li>

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
