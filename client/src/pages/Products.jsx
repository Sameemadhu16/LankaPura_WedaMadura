import React from 'react';
import landingx from '../assets/Home_Assets/landing_banner.jpg';

const Products = () => {
  const tap = {
    backgroundImage: `url(${landingx})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '800px',
    width: '100%',
  };

  return (
    <div>
      <div style={tap} className="relative flex items-center justify-center">
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-[playfair] font-semibold px-4 py-2">
          OUR PRODUCTS
        </div>
      </div>
    </div>
  );
};

export default Products;
