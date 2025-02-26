
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, image, link }) => {
  return (
    <div className="bg-[rgba(219,185,98,0.8)]



        relative w-auto sm:w-[20rem] h-auto rounded-lg p-4 border  dark:border-white/[0.2] border-black/[0.1] shadow-lg transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl ml-4"> {/* Added ml-4 for shifting the card */}
      <h2 className="text-lg font-bold  text-neutral-600 dark:text-black font-[Raleway]">
        {title}
      </h2>
      <p className=" text-sm max-w-sm mt-2 font-[Raleway]">
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
          className="px-3 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold font-[Raleway] transition-colors duration-300 hover:bg-gray-700 dark:hover:bg-gray-500"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Card;