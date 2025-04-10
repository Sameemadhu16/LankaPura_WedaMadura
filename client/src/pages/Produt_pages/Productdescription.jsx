import React, { useEffect, useState } from 'react';
import proback from '../../assets/Produt_Assets/proback.jpg';
import p from '../../assets/Home_Assets/products/products/1.png'; 
import { FaStar,  FaExpand, 
  FaShoppingCart, 
  FaHeart, 
  FaCheck  } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {      
      try {
        const response = await axios.get(`http://localhost:3000/api/products/productdetails/${id}`);
        setProduct(response.data);
        console.log(response.data);     
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className='flex flex-col items-center justify-center'>

      {/* Banner Section */}
      <div 
        className='w-full h-72 md:h-96 flex flex-col justify-center items-center bg-cover bg-center relative font-[playfair]'
        style={{ backgroundImage: `url(${proback})` }}
      >
        <div className='absolute inset-0 bg-black/50'></div>
        <h1 className='text-4xl md:text-7xl font-playfair font-bold text-white absolute bottom-20 md:bottom-[115px] left-6 z-10'>
          Ancient Herbs
        </h1>
        <h1 className='text-4xl md:text-7xl font-playfair font-bold text-[#348101] absolute left-6 bottom-10 md:bottom-[58px] z-10'>
          Modern Care
        </h1>
      </div>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl p-6 gap-8 my-12 bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-xl border border-gray-100">
  {/* Product Image with Gallery Feel */}
  <div className="w-full md:w-2/5 flex-shrink-0">
    <div className="relative group overflow-hidden rounded-xl bg-white p-4 shadow-md">
      <img 
        src={product?.image || p} 
        alt={product?.name || 'Product'} 
        className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
      />
      <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full">
        <FaExpand className="text-gray-700 text-lg cursor-pointer hover:text-black transition" />
      </div>
    </div>
  </div>

  {/* Product Details with Enhanced Layout */}
  <div className="flex-1 flex flex-col justify-between p-6 bg-white rounded-xl shadow-md">
    <div>
      {/* Brand & Product Name */}
      <div className="mb-4">
        <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-1 font-[Raleway]">
          {product?.brand || 'Premium Brand'}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-[Playfair] leading-tight">
          {product?.name}
        </h2>
      </div>

      {/* Price & Rating Section */}
      <div className="flex flex-wrap items-center justify-between mt-4 mb-6">
        <div className="mb-2 md:mb-0">
          <p className="text-2xl font-bold text-[#348101] font-[Raleway]">
            Rs {product?.price}
          </p>
          {product?.originalPrice && (
            <p className="text-sm text-gray-500 line-through">
              Rs {product?.originalPrice}
            </p>
          )}
        </div>
        
        <div className="flex flex-col items-end">
          {/* Star Ratings with count */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={`${i < (product?.rating || 5) ? 'text-yellow-400' : 'text-gray-300'} text-lg`} 
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {product?.reviewCount || '120'} reviews
          </p>
        </div>
      </div>

      {/* Description with better typography */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 font-[Playfair]">Description</h3>
        <p className="text-gray-700 leading-relaxed font-[Raleway]">
          {product?.description}
        </p>
      </div>

      {/* Features List */}
      {product?.features && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 font-[Playfair]">Key Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700 font-[Raleway]">
                <FaCheck className="text-[#348101] mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    {/* Action Section */}
    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <button className="flex-1 px-6 py-3 bg-black text-white text-lg font-[Raleway] font-semibold rounded-lg hover:bg-[#348101] transition duration-300 shadow-md flex items-center justify-center">
        <FaShoppingCart className="mr-2" /> Add to Cart
      </button>
      <button className="px-6 py-3 bg-white text-black border-2 border-black text-lg font-[Raleway] font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-sm flex items-center justify-center">
        <FaHeart className="mr-2" /> Wishlist
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductDescription;
