import React from 'react'
import banner from '../../assets/Home_Assets/OTHERBANNER.jpg'
import SlidingCard from './Cardanimate'

const Othertreatment = () => {
      const tap = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',  // This makes sure the image covers the entire div
        backgroundPosition: 'center', // Centers the background image
        height: '570px', // Adjust the height as per your requirement
        
      }
  return (
    <div style={tap} className='mt-10  justify-center '>
        <h1 className='flex justify-center pt-8'>
            <span className='text-6xl font-[playfair] blod text-center text-black font-semibold'>OTHER</span>
            <span className='text-6xl font-[playfair] blod text-center text-[#348101] font-semibold ml-4'> TREATMENTS</span>
        </h1>
        <div className='flex justify-center'>
            <SlidingCard />
        </div>
        <div className='flex justify-center items-center ml-[1.2%] '>
            <button
                className='hover:bg-[#348101] hover:text-white border mt-5 border-black px-4 py-2  rounded-lg font-semibold font-[Raleway] hover:border-transparent'
                onClick={() => alert('View All Clicked!')}
            >
                VIEW ALL
            </button>
        </div>
    </div>
  )
}

export default Othertreatment