import React from "react";
import banner from "../../assets/Home_Assets/OTHERBANNER.jpg";
import SlidingCard from "./Cardanimate";

const Othertreatment = () => {
  const tap = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "570px",
  };

  return (
    <div style={tap} className="flex flex-col items-center justify-center py-12">
      {/* Heading with perfect center alignment */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[playfair] font-semibold">
          <span className="text-black">OTHER </span>
          <span className="text-[#348101]">TREATMENTS</span>
        </h1>
      </div>

      {/* Sliding Card - Centered */}
      <div className="w-full flex justify-center px-4">
        <SlidingCard />
      </div>

      {/* View All Button */}
      <div className="mt-8">
        <button className="bg-transparent border border-black hover:bg-[#348101] hover:border-[#348101] text-black hover:text-white px-6 py-2 rounded-lg font-[Raleway] font-semibold transition-colors duration-300">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Othertreatment;