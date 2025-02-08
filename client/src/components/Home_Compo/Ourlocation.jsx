import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

import Covid from '../../assets/Home_Assets/disease images/Covid19.jpg';
import Dengue from '../../assets/Home_Assets/disease images/Dengue.jpg';
import Cancer from '../../assets/Home_Assets/disease images/All type of cancers.jpg';
import Arthritis from '../../assets/Home_Assets/disease images/Arthritis.jpg';
import Catarrh from '../../assets/Home_Assets/disease images/Catarrh.webp';
import Diabetic from '../../assets/Home_Assets/disease images/Diabetic.jpg';
import Infertility from '../../assets/Home_Assets/disease images/Infertility.jpg';
import ITP from '../../assets/Home_Assets/disease images/ITP.webp';
import Kidney from '../../assets/Home_Assets/disease images/Kidney disease.jpg';
import Leptospirosis from '../../assets/Home_Assets/disease images/Leptospirosis.jpg';
import Liver from '../../assets/Home_Assets/disease images/Liver disease.jpg';
import Lung from '../../assets/Home_Assets/disease images/Lung diseases.webp';
import LungInfection from '../../assets/Home_Assets/disease images/Lung Insfection.webp';
import Migraine from '../../assets/Home_Assets/disease images/Migraine.webp';
import Nervous from '../../assets/Home_Assets/disease images/Nervous System Diseases.jpg';
import Sciatica from '../../assets/Home_Assets/disease images/Sciatica.webp';
import STD from '../../assets/Home_Assets/disease images/STD.webp';

const images = [
  Covid, Dengue, Cancer, Arthritis, Catarrh, Diabetic, Infertility, ITP, Kidney,
  Leptospirosis, Liver, Lung, LungInfection, Migraine, Nervous, Sciatica, STD
];

const Ourlocation = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
        <div className='flex justify-center'>
            <div className='text-center'>
                <h2 className="text-center font-[Raleway] mt-5 text-2xl tracking-[.4em]">Explore our Herbal Palace, where nature and wellness meet</h2>
                <span className="text-6xl font-[playfair] font-bold text-black">OUR </span>
                <span className="text-[#348101] text-6xl font-[playfair] font-bold">LOCATION</span>
            </div>
        </div>
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-semibold font-[playfair] text-center mb-6">Gallery</h2>
            <div className=" mt-10 max-w-[1000px] mx-auto overflow-hidden border border-gray-300 rounded-lg shadow-md p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    {images.slice(0, 8).map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition"
                        onClick={() => setSelectedImage(src)}
                    />
                    ))}
                </div>
            </div>
            {selectedImage && (
                <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                <div className="relative max-w-3xl w-full p-4">
                    <button
                    className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                    onClick={() => setSelectedImage(null)}
                    >
                    <X size={24} />
                    </button>
                    <img src={selectedImage} alt="Selected" className="w-full rounded-lg shadow-lg" />
                </div>
                </Dialog>
            )}
        </div>
    </div>
  )
}

export default Ourlocation
