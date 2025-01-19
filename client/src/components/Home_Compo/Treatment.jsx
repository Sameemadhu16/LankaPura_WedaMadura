import React from 'react'
import background from '../../assets/Home_Assets/Treatmentbackground.png'
import virus from '../../assets/Home_Assets/virus.png'
import den from '../../assets/Home_Assets/Mosquito.png'

const Treatment = () => {
  const tap = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',  // This makes sure the image covers the entire div
    backgroundPosition: 'center', // Centers the background image
    height: '100vh', // Adjust the height as per your requirement
  }

  return (
    <div style={tap} className='relative '>
      <div className='relative flex justify-center'> 
        <h1 className="flex justify-center  h-screen font-[Raleway] absolute top-9 text-2xl tracking-[.39em]">
          We cure diseases with Hela medicine in Sri Lanka
        </h1>
        <h1 className='absolute top-20'>
          <span className="text-6xl font-[playfair] blod text-center text-black font-semibold">
            OUR AYURVEDHA </span>
          <span className='text-[#348101] text-6xl font-[playfair] blod text-center font-semibold'>
            TREATMENT
          </span>
        </h1>
      </div>

      <div className= ' flex justify-center relative mt-10 ' style={{ top: '23%' }}>
        <h1 className=' text-center'>
          <span className='font-[Raleway] text-black text-4xl font-semibold'>Medication against </span>
          <span className='font-[Raleway] text-red-600 text-4xl font-semibold'>COVID 19</span>    
          <h1 className='font-[Raleway] text-black text-2xl text-center mt-4'>We’ve launched a medicine which can successfully fight</h1>
          <h1 className='font-[Raleway] text-black text-2xl text-center'>against COVID 19 </h1>
          <h1 className='font-[Raleway] text-black text-2xl text-center'>by boosting your immunity system.</h1>
          <button className='boder border-black bg-black text-white px-4 py-1 rounded-lg mt-6 font-[Raleway] hover:bg-[#348101]'>
            Read more 
          </button>
        </h1>          
      </div>
      <div className= ' flex justify-center relative mt-24 ' style={{ top: '23%' }}>
        <h1 className=' text-center'>
          <span className='font-[Raleway] text-black text-4xl font-semibold'>A successful medicine for </span>
          <span className='font-[Raleway] text-red-600 text-3xl font-semibold'>Dengue</span>    
          <h1 className='font-[Raleway] text-black text-2xl text-center mt-4'>Our medicine for Dengue has successfully</h1>
          <h1 className='font-[Raleway] text-black text-2xl text-center'>cured thousands of</h1>
          <h1 className='font-[Raleway] text-black text-2xl text-center'>patients throughout the country.</h1>
          <button className='boder border-black bg-black text-white px-4 py-1 rounded-lg mt-6 font-[Raleway] hover:bg-[#348101]'>
            Read more 
          </button>
        </h1>          
      </div>

      <div className='absolute top-30 flex justify-center hover:scale-110'style={{ top: '16%' ,left:'3%'}} >
        <img src={virus} alt="COVID 19 VIRUS" style={{ width: '430px', height: 'auto' }} />
      </div>
      <div className='absolute top-30 flex justify-center hover:scale-110'style={{ top: '58%' ,right:'7%'}} >
        <img src={den} alt="COVID 19 VIRUS" style={{ width: '320px', height: 'auto' }} />
      </div>

    </div>
  )
}

export default Treatment
