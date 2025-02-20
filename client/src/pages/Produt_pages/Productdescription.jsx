import React, { useEffect, useState } from 'react';
import proback from '../../assets/Produt_Assets/proback.jpeg';
import p from '../../assets/Home_Assets/products/products/1.png'; 
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDescription = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {      
      try{
        const response = await axios.get(`http://localhost:3000/api/products/productdetails/${id}`);
        setProduct(response.data);
        console.log(response.data);     
      }catch(error){
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);


  return (
    <div className='flex flex-col items-center justify-center'>
      {/* Banner Section */}
      <div 
        className='w-full h-[720px] flex flex-col justify-center items-center bg-cover bg-center relative font-[playfair]'
        style={{ backgroundImage: `url(${proback})` }}
      >
        <div className='absolute inset-0 bg-black/50'></div>
        <h1 className='text-8xl font-playfair font-bold text-white absolute left-6 z-10 ml-4'>Ancient Herbs</h1>
        <h1 className='text-8xl font-playfair font-bold text-[#348101] absolute left-6 bottom-[230px] z-10 ml-32'>Modern Care</h1>
      </div>

      {/* Product Section */}
      <div className='flex flex-col md:flex-row w-full max-w-7xl p-5 gap-10 mb-10 mt-10 bg-white shadow-2xl rounded-lg'>
        {/* Product Image */}
        <div className='w-[500px] flex-shrink-0 justify-center'>
          <img src={product?.image||p} alt='Product' className='w-full max-w-sm h-auto rounded-lg ml-10 mt-6' />
        </div>

        {/* Product Details */}
        <div className='flex-1 p-6 bg-gray-50 rounded-lg shadow-md ' style={{ maxWidth: '700px' }}>
          <h2 className='text-3xl font-bold text-gray-800 font-[playfair]'>{product.name}</h2>
          <p className='text-xl text-[#348101] font-semibold mt-2 font-[Raleway]'>Rs {product.price}</p>
          
          {/* Star Ratings */}
          <div className='flex items-center mt-2'>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className='text-yellow-400 text-xl' />
            ))}
          </div>
          
          {/* Description */}
          <p className='mt-4 text-gray-700 text-lg font-[Raleway]' style={{     maxWidth: "600px", whiteSpace: "normal",overflow: "visible", }}>
            {product.description}
          </p>
          
          {/* Buy Now Button */}
          <button className='mt-6 px-6 py-3 bg-black text-white text-lg  font-[Raleway] font-semibold rounded-lg hover:bg-[#348101] transition duration-300 shadow-md'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
