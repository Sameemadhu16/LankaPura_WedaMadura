import React from "react";
import banner from "../../assets/Home_Assets/OTHERBANNER.jpg";
import SlidingCard from "./Cardanimate";

const Othertreatment = () => {
  const tap = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "570px",
  };

  return (
    <div style={tap} className="mt-10 flex flex-col items-center">
      {/* Heading */}
      <h1 className="flex justify-center pt-8 text-center flex-wrap px-4">
        <span className="text-4xl md:text-6xl font-[playfair] font-semibold text-black">
          OTHER
        </span>
        <span className="text-4xl md:text-6xl font-[playfair] font-semibold text-[#348101] ml-2 md:ml-4">
          TREATMENTS
        </span>
      </h1>

      {/* Sliding Card */}
      <div className="flex justify-center w-full px-2">
        <SlidingCard />
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-5">
        <button
          className="hover:bg-[#348101] hover:text-white border border-black px-4 py-2 rounded-lg font-semibold font-[Raleway] hover:border-transparent text-sm md:text-base"
          onClick={() => alert("View All Clicked!")}
        >
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Othertreatment;
