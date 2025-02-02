import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import landing from "../assets/lankapura.jpg";
import plantImage from "../assets/plantcrop.png"; // Replace with your actual image for the right side

export default function kidneydisease() {
  return (
    <div>
      <Header />
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
            Kidney Disease
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
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "3rem",
          }}
        >
          Kidney Disease (C.K.D)
        </h2>
        <p
          style={{
            fontWeight: 500,
            marginTop: "20px", // Additional margin for the second line
            fontSize: "1.2rem",
          }}
        >
          The kidneys are a pair of fist-sized organs located at the bottom of
          the rib cage. There is one kidney on each side of the spine. Kidneys
          are essential to having a healthy body. They are mainly responsible for
          filtering waste products, excess water, and other impurities out of
          the blood. These toxins are stored in the bladder and then removed during
          urination. The kidneys also regulate pH, salt, and potassium levels in
          the body. They produce hormones that regulate blood pressure and control
          the production of red blood cells. The kidneys even activate a form of
          vitamin D that helps the body absorb calcium.
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
        <ul>
          <li>Fatigue</li>
          <li>Difficulty concentrating</li>
          <li>Trouble sleeping</li>
          <li>Poor appetite</li>
          <li>Muscle cramping</li>
          <li>Swollen feet/ankles</li>
          <li>Puffiness around the eyes in the morning</li>
          <li>Dry, scaly skin</li>
          <li>Frequent urination, especially late at night</li>
          <li>Nausea</li>
          <li>Vomiting</li>
          <li>Loss of appetite</li>
          <li>Changes in urine output</li>
          <li>Fluid retention</li>
        </ul>

        <p>
          But it’s better if you can ask your doctor about getting a blood test
          for kidney problems. Kidney problems generally don’t cause symptoms
          until they’re more advanced. So, don’t wait until the last moment.
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          How Can We Prevent{" "}
          <span style={{ color: "#006400" }}>Kidney Disease</span>?
        </h2>

        <ul>
          <li>Drink plenty of water</li>
          <li>If you have diabetes, control your blood sugar</li>
          <li>Control blood pressure</li>
          <li>Reduce consumption of salt</li>
          <li>Quit smoking</li>
          <li>Be careful when taking too much medication (such as aspirin)</li>
          <li>Limit taking foods containing excessive sodium, animal protein (such
            as beef and chicken), citric acid (found in lemon, oranges, etc.), and
            oxalates (found in beets, spinach, chocolate, etc.)</li>
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
  );
}
