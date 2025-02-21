import React from 'react'

import landing from "../../assets/lankapura.jpg";
import plantImage from "../../assets/plantcrop.png"; // Replace with your actual image for the right side

export default function itp() {
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
            className="text-4xl font-[playfair] font-bold mb-2"
            style={{
              
              fontWeight: 500,
              marginLeft: "150px", // Move the text slightly to the right
              fontSize: "3rem",
            }}
          >
            Ayurvedic Treatments for
          </h1>

          {/* Second Line with Padding */}
          <h1
            className="text-4xl font-[playfair] font-bold"
            style={{
             
              fontWeight: 500,
              marginLeft: "200px", // Additional margin for the second line
              fontSize: "3rem",
            }}
          >
            I.T.P
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
         
          height: "850px", // Set the height to 500px
        }}
      >
        <h2
          className="text-4xl font-[playfair] font-bold"
          style={{
            color: "#5A3D00",
            
            fontWeight: 600,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "3rem",
          }}
        >
          I.T.P
        </h2>
        <p
          className="font-[Raleway]"
          style={{
            
            fontWeight: 400,
            marginTop: "20px", // Additional margin for the second line
            fontSize: "1.2rem",
          }}
        >
          I.T.P is an immune disorder in which the blood doesn’t clot normally. 
          This is a blood disorder characterized by a decrease in the number of 
          platelets in the blood. This condition is now more commonly referred 
          to as immune thrombocytopenia (ITP). ITP can cause excessive bruising 
          and bleeding. An unusually low level of platelets, or thrombocytes, 
          in the blood results in ITP. Platelets are produced in the bone marrow. 
          They help stop bleeding by clumping together to form a clot that seals 
          cut or small tears in blood vessel walls and tissues. If your blood 
          doesn’t have enough platelets, it’s slow to clot. Internal bleeding 
          or bleeding on or under the skin can result.
        </p>

        <h2
          className="font-[playfair]"
          style={{
            
            fontWeight: 500,
            marginLeft: "1px", // Additional margin for the second line
            fontSize: "2rem",
          }}
        >
          Symptoms
        </h2>
        <ul
          className="font-[Raleway]"
          style={{
            fontWeight: 400,
          }}
        >
          <li>Bruising easily</li>
          <li>Pinpoint-sized Petechiae, often on the lower legs</li>
          <li>Spontaneous nosebleeds</li>
          <li>Bleeding from the gums (for example, during dental work)</li>
          <li>Blood in the urine</li>
          <li>Blood in the stool</li>
          <li>Internal bleeding</li>
          <li>Abnormally heavy or long menstruation</li>
          <li>Prolonged bleeding from cuts</li>
          <li>Profuse bleeding during surgery</li>
         
        </ul>

        <p
          className="font-[Raleway]"
          style={{
            fontWeight: 400,
          }}        
        >
          Normally, a person who appears to have been cured of ITP 
          will experience a relapse, perhaps months or even years 
          after the initial episode. If this happens the person will 
          need repeat treatment. In most cases, the relapse seems to 
          be triggered by a viral infection.

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
