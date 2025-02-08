import React from 'react'
import WPCU from '../../assets/Home_Assets/WPCU.webp'
import Roundanimation from './Roundanimation'
import Whypp2 from './Whypp2'
import Archivement from './Archivement'
import Ourlocation from './Ourlocation'


const Whypeople = () => {
    const back = {
        backgroundImage: `url(${WPCU})`,
        backgroundSize: 'cover',  // This makes sure the image covers the entire div
        backgroundPosition: 'center', // Centers the background image
        height: '3050px', // Adjust the height as per your requirement
        
      }
    
  return (
    <div style={back}>
        <div className='flex justify-center'>
            <h1 className='text-center items-center justify-center'>
                <h1 className=" text-center font-[Raleway] mt-20 text-2xl tracking-[.4em]">Lankapura - Where Nature Meets Pure Wellness</h1>
                <span className="text-6xl font-[playfair] font-bold text-black">OUR </span>
                <span className="text-[#348101] text-6xl font-[playfair] font-bold">PRODUCTS</span>
            </h1>
        </div>
        <div className='flex justify-center items-center'>
            <Roundanimation/>
        </div>
        <div>
            {/* Why people choose us2  */}
            <Whypp2/>
        </div>
        <div>
            {/* Archivement */}
            <Archivement/>
        </div>
        <div>
            {/* Our location */}
            <Ourlocation/>  
        </div>    
    </div>
  )
}

export default Whypeople