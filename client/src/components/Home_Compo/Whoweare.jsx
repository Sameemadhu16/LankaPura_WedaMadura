import React from 'react'
import WWA from '../../assets/Home_Assets/WWA.png';
import INTRO from '../../assets/Home_Assets/INTRO.png';

const Whoweare = () => {
  return (
    <div
    className="flex justify-center items-center w-full relative"
    style={{
      marginTop: '30px',
      backgroundImage: `url(${WWA})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '1000px', 
    }}
  >
        <div className="absolute" style={{ top: '60%', left: '60%', transform: 'translate(-135%, -65%)' }}>
            <img src={INTRO} alt="intro" className="w-full h-auto rounded" />
            <button
            className="absolute px-4 py-2 border border-black text-black rounded-lg transition-all duration-200 hover:text-white hover:bg-[#8CC85F] hover:border-transparent"
            style={{
                top: '91%',
                left: '50%', 
                transform: 'translateX(-50%)', 
                }}
            >
                Read More {'>>>'}
            </button>
        </div>
    </div>
  )
}

export default Whoweare