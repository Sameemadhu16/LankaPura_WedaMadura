import React from "react";
import WPCU from "../../assets/Home_Assets/WPCU.webp";
import Roundanimation from "./Roundanimation";
import Whypp2 from "./Whypp2";
import Archivement from "./Archivement";
import Ourlocation from "./Ourlocation";

const Whypeople = () => {
  const back = {
    backgroundImage: `url(${WPCU})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto", // Adjusted to auto for better responsiveness
    minHeight: "3050px", // Ensures minimum height
  };

  return (
    <div style={back} className="flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mt-20 px-4">
        <h1 className="font-[Raleway] text-lg md:text-2xl tracking-[.4em]">
          Lankapura - Where Nature Meets Pure Wellness
        </h1>
        <div className="flex justify-center flex-wrap">
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-black">
            OUR{" "}
          </span>
          <span className="text-4xl md:text-6xl font-[playfair] font-bold text-[#348101] ml-2 md:ml-4">
            PRODUCTS
          </span>
        </div>
      </div>

      {/* Round Animation */}
      <div className="flex justify-center w-full px-2 mt-5">
        <Roundanimation />
      </div>

      {/* Sections */}
      <div className="w-full">
        <Whypp2 />
      </div>
      <div className="w-full ">
        <Archivement />
      </div>
      <div className="w-full">
        <Ourlocation />
      </div>
    </div>
  );
};

export default Whypeople;
