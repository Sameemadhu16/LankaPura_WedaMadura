import React from "react";

const Longcard = ({ title, description }) => {
    return (
      <div className="relative flex justify-center items-center">
        {/* Background Layer for Depth Effect */}
        <div className="absolute top-3 left-3 w-full h-full bg-gray-300 rounded-2xl shadow-md"></div>
  
        {/* Foreground Card */}
        <div className=" group relative w-[450px] p-6 bg-white rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300 ease-in-out hover:bg-[#E2B68F] hover:border-transparent">
          <h2 className="text-green-700 font-semibold text-2xl text-center group-hover:text-white ">{title}</h2>
          <p className="text-gray-700 text-lg text-center mt-2">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Longcard;
  