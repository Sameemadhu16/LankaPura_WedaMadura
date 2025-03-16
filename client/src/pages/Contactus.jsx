import React, { useEffect, useRef, useState } from "react";
import Image from "../assets/Home_Assets/sam/1.png";
import RightImage from "../assets/Home_Assets/sam/5.png";

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
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center px-10"
        style={{ backgroundImage: `url(${Image})` }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Contact Form - Aligned to the Left */}
        <div className="relative w-full md:w-1/2 h-2/3 mt-20 bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-xl animate-slide-in-left">
          <h2 className="text-white text-2xl font-bold mb-2">Say Hello To Us, Get In Touch</h2>
          <p className="text-white text-sm mb-4">Reach out to us and we will respond as soon as we can.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="Full name"
                className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder"
                required
              />
              {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder="Contact number"
                className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder"
                required
              />
              {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Country"
                className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="4"
              className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder"
              required
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button type='submit' className="w-full bg-yellow-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-yellow-700 transition duration-300">
              Send
            </button>
          </form>
        </div>

        <style jsx>{`
          @keyframes slide-in-left {
            0% {
              transform: translateX(-100%);
              opacity: 0;
              filter: blur(10px);
            }
            100% {
              transform: translateX(0);
              opacity: 1;
              filter: blur(0);
            }
          }
          .animate-slide-in-left {
            animation: slide-in-left 0.75s ease-out;
          }
          .custom-placeholder::placeholder {
            color: #4a4a4a; /* Suitable dark gray color */
          }
        `}</style>
      </div>

      {/* Treatment Hours Section */}
      <div ref={treatmentHoursRef} className="flex flex-col md:flex-row w-full justify-center items-center bg-white shadow-lg ">
        <div className="w-full md:w-1/2 max-w-4xl bg-white justify-center items-center p-8 rounded-lg  text-center">
          <h1 className="text-4xl font-bold mb-6">Treatment Hours</h1>

          <p className="text-xl font-semibold">Dengue & Corona</p>
          <ul className="mb-4">
            <li>• Everyday: 9:00 am – 5:00 pm</li>
          </ul>

          <p className="text-xl font-semibold">For All Other Diseases</p>
          <ul>
            <li>• Saturday: 9:00 am – 5:00 pm</li>
            <li>• Sunday: 9:00 am – 5:00 pm</li>
            <li>• Monday: 9:30 am – 4:00 pm</li>
          </ul>
        </div>
        {/* Right-side Image */}
        <div className="w-full md:w-1/2 h-2/3 mt-10 md:mt-0 flex justify-center items-center">
          <img src={RightImage} alt="Contact Us" className="w-full h-full object-cover rounded-lg shadow-xl" />
        </div>
      </div>

      <style jsx>{`
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
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Contactus;