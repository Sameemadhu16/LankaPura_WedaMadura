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
//               <button
//                 style={{
//                   backgroundImage: "linear-gradient(to right, #00C853, #1B5E20)", // Bright green to dark green
//                   color: "white",
//                   padding: "0.5rem 1rem", // Reduced padding
//                   borderRadius: "1rem",
//                   fontWeight: "600",
//                   fontSize: "0.875rem", // Slightly smaller font size
//                   transition: "all 0.3s ease",
//                   marginTop: "0.5rem", // Slightly below the content
//                   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Stronger shadow for emphasis
//                   border: "none", // Removes border for a clean look
//                   cursor: "pointer",
//                 }}
//                 onMouseOver={(e) => {
//                   e.target.style.backgroundImage =
//                     "linear-gradient(to right, #1B5E20, #00C853)"; // Reverse gradient on hover
//                 }}
//                 onMouseOut={(e) => {
//                   e.target.style.backgroundImage =
//                     "linear-gradient(to right, #00C853, #1B5E20)"; // Original gradient
//                 }}
//               >
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





// import React from "react";
// import { Link } from "react-router-dom";

// const Card = ({ title, description, image, link }) => {
//   return (
//     <div className="relative w-auto sm:w-[30rem] h-auto rounded-xl p-6 border bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
//       <h2 className="text-xl font-bold text-neutral-600 dark:text-white">
//         {title}
//       </h2>
//       <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
//         {description}
//       </p>
//       <div className="w-full mt-4">
//         <img
//           src={image}
//           alt={title}
//           className="h-60 w-full object-cover rounded-xl shadow-md"
//         />
//       </div>
//       <div className="flex justify-between items-center mt-6">
//         <Link to={link} className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
//           Learn More →
//         </Link>
//         <Link
//           to={link}
//           className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//         >
//           Visit
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;









// import React from "react";
// import { Link } from "react-router-dom";

// const Card = ({ title, description, image, link }) => {
//   return (
//     <div className="relative w-auto sm:w-[20rem] h-auto rounded-lg p-4 border bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] shadow-lg transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl ml-4"> {/* Added ml-4 for shifting the card */}
//       <h2 className="text-lg font-bold text-neutral-600 dark:text-white">
//         {title}
//       </h2>
//       <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
//         {description}
//       </p>
//       <div className="w-full mt-3">
//         <img
//           src={image}
//           alt={title}
//           className="h-48 w-full object-cover rounded-lg shadow-md"
//         />
//       </div>
//       <div className="flex justify-center mt-4">
//         <Link
//           to={link}
//           className="px-3 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold transition-colors duration-300 hover:bg-gray-700 dark:hover:bg-gray-500"
//         >
//           Learn more
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;





import React from "react";
import { Link } from "react-router-dom";
// bg-gradient-to-r from-[rgba(108,32,32,0.94)]  to-[rgba(255,64,64,0.91)]
// bg-gradient-to-r from-[rgba(194,65,12,0.7)] via-[rgba(194,65,12,0.7)]  to-[rgba(134,104,30,0.8)]
// bg-[rgba(134,104,30,0.8)] bg-opacity-20

const Card = ({ title, description, image, link }) => {
  return (
    <div className="bg-[rgba(134,104,30,0.8)]



        relative w-auto sm:w-[20rem] h-auto rounded-lg p-4 border  dark:border-white/[0.2] border-black/[0.1] shadow-lg transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl ml-4"> {/* Added ml-4 for shifting the card */}
      <h2 className="text-lg font-bold text-neutral-600 dark:text-black">
        {title}
      </h2>
      <p className=" text-sm max-w-sm mt-2 ">
        {description}
      </p>
      <div className="w-full mt-3">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to={link}
          className="px-3 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold transition-colors duration-300 hover:bg-gray-700 dark:hover:bg-gray-500"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Card;