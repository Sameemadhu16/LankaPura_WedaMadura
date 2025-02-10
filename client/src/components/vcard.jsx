import React, { useState } from "react";
import logo from "../assets/covid19.jpg";

function Vcard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="max-w-sm mx-auto overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl w-80 h-80"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <img
          src={logo}
          alt="Earth with a mask"
          className={`w-full h-48 object-cover absolute transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
        />
        <h2 className={`text-xl font-semibold text-center p-2 absolute transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}>
          Covid 19
        </h2>
        
        <div className={`p-4 text-center absolute transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <p className="mb-4 text-gray-600">
            Herbal treatments for COVID-19 have been a topic of interest and
            discussion throughout the pandemic. While some remedies may help
            boost immunity, it’s essential to follow medical guidelines and seek
            expert advice.
          </p>
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Vcard;
