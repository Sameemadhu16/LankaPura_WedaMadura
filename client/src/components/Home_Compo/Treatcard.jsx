import React from "react";
import PropTypes from "prop-types";

const Treatcard = ({ imageUrl, title, onButtonClick }) => {
  return (
    <div className="max-w-md bg-white rounded-3xl shadow-lg overflow-hidden w-80 h-96">
      <div className="relative w-full h-2/3 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-center h-1/3 flex flex-col justify-center items-center ">
        <h3 className="text-xl font-[Raleway] font-semibold text-black">{title}</h3>
        <button
          style={{width:'160px'}}
          className="mt-4 px-8 py-3 bg-black text-white text-sm font-[Raleway] font-medium rounded-lg focus:ring-2 hover:bg-[#348101] transition duration-300"
          onClick={onButtonClick}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

Treatcard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

Treatcard.defaultProps = {
  onButtonClick: () => {},
};

export default Treatcard;
