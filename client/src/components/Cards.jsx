// import React from "react";
// import { Link } from "react-router-dom";

// const Card = ({ title, description, image, link }) => {
//   return (
//     <Link to={link}>
//       <div className="flip-box">
//         <div
//           className="front"
//           style={{ backgroundImage: `url(${image})` }}
//         >
//           <div className="content text-center">
//             <h2>{title}</h2>
//           </div>
//         </div>
//         <div className="back">
//           <div className="content">
//             <h2>{title}</h2>
//             <p>{description}</p>
//             <Link to={link}>
//               <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 mt-4">
//                 Learn More
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Card;






import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, image, link }) => {
  return (
    <Link to={link}>
      <div className="flip-box">
        <div
          className="front"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="content text-center">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="back">
          <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={link}>
              <button
                style={{
                  backgroundImage: "linear-gradient(to right, #00C853, #1B5E20)", // Bright green to dark green
                  color: "white",
                  padding: "0.5rem 1rem", // Reduced padding
                  borderRadius: "1rem",
                  fontWeight: "600",
                  fontSize: "0.875rem", // Slightly smaller font size
                  transition: "all 0.3s ease",
                  marginTop: "0.5rem", // Slightly below the content
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Stronger shadow for emphasis
                  border: "none", // Removes border for a clean look
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundImage =
                    "linear-gradient(to right, #1B5E20, #00C853)"; // Reverse gradient on hover
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundImage =
                    "linear-gradient(to right, #00C853, #1B5E20)"; // Original gradient
                }}
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;




