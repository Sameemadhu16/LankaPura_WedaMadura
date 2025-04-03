import React, { useEffect, useRef, useState } from "react";
import Image from "../assets/Contact_Assets/CONTACT.jpg";
import RightImage from "../assets/Home_Assets/sam/5.png";
import stupa from "../assets/Contact_Assets/stupa.jpg";

const Contactus = () => {
  const treatmentHoursRef = useRef(null);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contactNumber: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (treatmentHoursRef.current) {
      observer.observe(treatmentHoursRef.current);
    }

    return () => {
      if (treatmentHoursRef.current) {
        observer.unobserve(treatmentHoursRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/contactus/createContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("ContactUs data:", data);
      alert("Create contact successfully!");
      setFormData({
        fullname: "",
        email: "",
        contactNumber: "",
        country: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("There was an error in contact!", error);
      alert("There was an error in contact!");
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Conditional Background */}
      <div className="hero-section ">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Contact Form - Shifted left on laptop */}
        <div className="relative w-full max-w-2xl md:w-3/4 lg:w-[45%] h-auto my-4 md:my-0 bg-white bg-opacity-20 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-xl animate-slide-in-left lg:ml-[10%]">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">Say Hello To Us, Get In Touch</h2>
          <p className="text-white text-sm md:text-base mb-6">Reach out to us and we will respond as soon as we can.</p>

          <form className="space-y-4 md:space-y-6 " onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder"
                  required
                />
                {errors.fullname && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.fullname}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder"
                  required
                />
                {errors.email && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Contact number"
                  className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder"
                  required
                />
                {errors.contactNumber && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.contactNumber}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="4"
                className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder"
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.message}</p>}
            </div>

            <button 
              type='submit' 
              className="w-full bg-yellow-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-yellow-700 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Treatment Hours Section */}
      <div 
        ref={treatmentHoursRef} 
        className="flex flex-col lg:flex-row w-full justify-center items-center bg-white shadow-lg overflow-hidden"
      >
        <div className="w-full lg:w-1/2 max-w-4xl bg-white justify-center items-center p-8 lg:p-12 rounded-lg text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">Treatment Hours</h1>

          <div className="space-y-6">
            <div>
              <p className="text-xl lg:text-2xl font-semibold text-gray-800">Dengue & Corona</p>
              <ul className="mt-2 text-gray-600">
                <li className="text-lg">• Everyday: 9:00 am – 5:00 pm</li>
              </ul>
            </div>

            <div>
              <p className="text-xl lg:text-2xl font-semibold text-gray-800">For All Other Diseases</p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li className="text-lg">• Saturday: 9:00 am – 5:00 pm</li>
                <li className="text-lg">• Sunday: 9:00 am – 5:00 pm</li>
                <li className="text-lg">• Monday: 9:30 am – 4:00 pm</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Right-side Image */}
        <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-auto flex justify-center items-center">
          <img 
            src={RightImage} 
            alt="Contact Us" 
            className="w-full h-full object-cover object-center lg:min-h-[500px]"
          />
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-image: url(${stupa});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background-attachment: fixed;
        }

        @media (min-width: 1024px) {
          .hero-section {
            background-image: url(${Image});
            justify-content: flex-start;
            padding-left: 8%;
          }
        }

        @keyframes slide-in-left {
          0% {
            transform: translateX(-20%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        @keyframes fade-in-up {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .custom-placeholder::placeholder {
          color: #4a4a4a;
          opacity: 0.8;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll;
            background-position: 60% center;
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }

        /* Tablet-specific adjustments */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-section {
            background-position: center 30%;
          }
        }
      `}</style>
    </div>
  );
};

export default Contactus;