import React from 'react';
import TB from '../../assets/Home_Assets/Treatmenttimebanner.jpg';

const Treatmenthours = () => {
  return (
    <div className="flex justify-center">
      {/* Banner Image */}
      <div>
        <img src={TB} alt="TREATMENT HOURS" className="w-[1000px]" />
      </div>

      {/* Treatment Hours Section */}
      <div className="p-6 text-black text-center rounded-lg">
        <h1 className="text-6xl font-bold font-[playfair]">
          <span className="text-black">TREATMENT </span>
          <span className="text-[#348101]">HOURS</span>
        </h1>

        {/* Dengue & Corona Section */}
        <div className="mt-6 text-lg font-[Raleway]">
          <h2 className="font-bold text-xl">Dengue & Corona</h2>
          <div className="flex items-center gap-2 justify-center mt-2">
            <span className="text-xl">✔</span>
            <p>Everyday : 9:00 am – 5:00 pm</p>
          </div>
        </div>

        {/* Other Diseases Section */}
        <div className="mt-6 text-lg font-[Raleway]">
          <h2 className="font-bold text-xl">For All Other Diseases</h2>

          {/* Saturday */}
          <div className="flex items-center gap-2 justify-center mt-2">
            <span className="text-xl">✔</span>
            <p>Saturday : 9:00 am – 5:00 pm</p>
          </div>

          {/* Sunday */}
          <div className="flex items-center gap-2 justify-center mt-2">
            <span className="text-xl">✔</span>
            <p>Sunday &nbsp;&nbsp;: 9:00 am – 5:00 pm</p>
          </div>

          {/* Monday */}
          <div className="flex items-center gap-2 justify-center mt-2">
            <span className="text-xl">✔</span>
            <p>Monday &nbsp;&nbsp;: 9:30 am – 4:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatmenthours;
