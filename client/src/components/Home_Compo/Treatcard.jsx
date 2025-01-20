import React from "react";
import PropTypes from "prop-types";

const Treatcard = ({ imageUrl, title, onButtonClick }) => {
  return (
    <div className="max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src={imageUrl} // Use the image URL passed as a prop
          alt={title}
          className="w-full h-60 object-cover" // Increased height for the image
        />
      </div>

      {/* Text and Button Section */}
      <div className="p-6 text-center"> {/* Increased padding */}
        <h3 className="text-xl font-[Raleway] font-semibold text-black">{title}</h3> {/* Increased font size */}
        <button
          className="mt-4 px-8 py-3 bg-black text-white text-sm font-[Raleway] font-medium rounded-lg focus:ring-2 hover:bg-[#348101] transition duration-300" // Increased padding and font size
          onClick={onButtonClick} // Trigger the button action
        >
          Read more
        </button>
      </div>
    </div>
  );
};

// Define PropTypes to enforce proper usage
Treatcard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

// Default props for optional props
Treatcard.defaultProps = {
  onButtonClick: () => {}, // No-op if no action is passed
};

export default Treatcard;
