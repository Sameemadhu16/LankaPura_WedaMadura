import React from 'react'
import WPCU from '../../assets/Home_Assets/WWPC.png'
import Longcard from './Longcard'

const Whypp2 = () => {
  return (
    <div className=" relative">
        <div className='flex justify-center'>
            <h1 className='text-center items-center justify-center'>
                <h1 className=" text-center font-[Raleway] mt-10 text-2xl tracking-[.4em]">Trusted by people for authentic Ayurvedic care</h1>
                <span className="text-6xl font-[playfair] font-bold text-black">Why People Choose </span>
                <span className="text-[#348101] text-6xl font-[playfair] font-bold">Us? </span>
            </h1>
        </div>
        <div className='flex justify-center'>
            <div className='flex mt-10 mr-20 w-[700px]'>
                <img src={WPCU} alt="WHY PEOPLE CHOSE US !!! " className='drop-shadow-2xl' />
            </div>
            <div className='flex flex-col justify-center'>
                <div className='p-5'><Longcard title="Personalized Care" description="Experience quality service in a welcoming environment, offering treatments tailored to your unique needs through the power of Hela Osu."/></div>
                <div className='p-5'><Longcard title="Proven Expertise" description="Since 2012, we have consistently delivered exceptional results, demonstrating the effectiveness of Sri Lanka's indigenous medicine."/></div>
                <div className='p-5'><Longcard title="Holistic Healing" description="We believe no disease is incurable when traditional remedies are used with skill and care, ensuring the best outcomes for every treatment."/></div>
            </div>
        </div>
    </div>
  )
}

export default Whypp2