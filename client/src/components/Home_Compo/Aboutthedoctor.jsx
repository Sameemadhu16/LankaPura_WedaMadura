import React from 'react'
import Checkmark from './Checkmark';
import DoctorImage from './Doctor';

const Aboutthedoctor = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full ">
        {/* Doctor's Image */}
        <DoctorImage />


        {/* About Content */}
        <div className="w-full items-center max-w-[600px] md:w-1/2 -ml-[50px]" >
            <h1 className="font-[playfair] blod text-6xl mb-14 text-center ">
                <span className="text-black ">ABOUT THE </span>
                <span className="text-[#348101]">DOCTOR</span>
            </h1>
            <h2 className="text-2xl font-medium text-center font-[Raleway]">
                Dr. Tharanga Kumari Wickramasooriya
            </h2>
            <h2 className="text-2xl font-medium mb-9 text-center  font-[Raleway] text-[#348101]">
            - A Legacy in Herbal Healing -
            </h2>
            <p className="text-gray-600 mb-6 text-center font-[Raleway] mb-8">
                Dr. Tharanga Kumari Wickramasooriya is the proud torchbearer of a 700-year-old legacy
                of healing, blending traditional wisdom with modern medical expertise. Inspired by her
                father, a respected doctor, and her grandfather, a renowned hereditary healer, she grew up
                surrounded by dedication and care. Their passion ignited her sense of responsibility to
                continue this extraordinary family tradition, combining precision, compassion, and timeless
                knowledge in her practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-12 mb-14">
                <div className="flex items-center gap-2 p-4">
                <span><Checkmark/></span>
                <p>Professional Therapist</p>
                </div>
                <div className="flex items-center gap-2 p-4">
                <span><Checkmark/></span>
                <p>Organic Herbal</p>
                </div>
                <div className="flex items-center gap-2 p-4">
                <span><Checkmark/></span>
                <p>24/7 Support</p>
                </div>
            </div> 
            {/* Read More Button */}
            <div className="w-full flex justify-center mt-6">
                <button className="px-4 py-2 text-black rounded-lg shadow-md border border-black hover:bg-[#348101] hover:text-white hover:border-transparent ">
                Read More {'>>>'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Aboutthedoctor