import React, { useEffect, useState } from 'react';
import landing from '../assets/Home_Assets/landing_banneri.jpg'; 
import { useNavigate } from 'react-router-dom'; // Correct import for useNavigate

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/products/allproducts')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleLearnMore = (id) => {  
    navigate(`/productdes/${id}`);
  }

  return (
    <div>
      {/* Banner Image */}
      <div className="relative w-full h-96">
        <img 
          src={landing} 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className='flex justify-center'>
        <h1 className='text-center items-center justify-center'>
          <h1 className="text-center font-[Raleway] mt-10 text-2xl tracking-[.4em]">Lankapura - Where Nature Meets Pure Wellness</h1>
          <span className="text-6xl font-[playfair] font-bold text-black">OUR </span>
          <span className="text-[#348101] text-6xl font-[playfair] font-bold">PRODUCTS</span>
        </h1>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-7">
        {products.map(product => (
          <div key={product._id} className="p-4 shadow-2xl rounded-lg border border-gray-200 relative"> 
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-[400px] h-[400px] object-cover rounded-lg items-center justify-center" 
            />
            <div className="p-4">
              <h2 className="text-xl font-bold font-[Raleway]">{product.name}</h2>
              <p className="text-lg font-semibold font-[Raleway] mt-2">Rs {product.price}</p>
              <button onClick={() => handleLearnMore(product._id)} className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-[#348101] font-[Raleway]">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
