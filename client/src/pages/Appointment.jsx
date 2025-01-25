import React, { useState } from "react";
import Image from '../assets/image-2.jpg';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    village: "",
    date: "",
    timeSlot: "",
    disease: "",
  });

  const allTimeSlots = [
    "9:00 AM- 9.15 AM",
    "9:15 AM- 9.30 AM",
    "9:30 AM- 9.45 AM",
    "9:45 AM- 10.00 AM",
    "10:00 AM- 10.15 AM",
    "10:15 AM- 10.30 AM",
    "10:30 AM- 10.45 AM",
    "10:45 AM- 11.00 AM",
    "11:00 AM- 11.15 AM",
    "11:15 AM- 11.30 AM",
    "11:30 AM- 11.45 AM",
    "11:45 AM- 12.00 PM",
    "1:30 PM- 1.45 PM",
    "1:45 PM- 2.00 PM",
    "2:00 PM- 2.15 PM",
    "2:15 PM- 2.30 PM",
    "3:30 PM- 3.45 PM",
    "3:45 PM- 4.00 PM",
    "4:00 PM- 4.15 PM",
    "4:15 PM- 4.30 PM",
    "4:30 PM- 4.45 PM",
    "4:45 PM- 5.00 PM",
  ];

  const getAvailableTimeSlots = () => {
    if (!formData.date || !formData.disease) return [];

    const selectedDate = new Date(formData.date);
    const dayOfWeek = selectedDate.getDay();
    const disease = formData.disease;

    if (disease === "dengue" || disease === "corona") {
      return allTimeSlots;
    } else {
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        return allTimeSlots.slice(0, 16);
      } else if (dayOfWeek === 1) {
        return allTimeSlots.slice(0, -4);
      } else {
        return [];
      }
    }
  };

  const availableTimeSlots = getAvailableTimeSlots();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSlotSelect = (slot) => {
    setFormData({ ...formData, timeSlot: slot });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData); // Debug log
    if (!formData.timeSlot) {
      alert("Please select a time slot!");
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/appointments/createAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // console.log("Response Data:", data); // Debug log
      if (response.ok) {
        console.log("Appointment Data:", data);
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          age: "",
          village: "",
          date: "",
          timeSlot: "",
          disease: "",
        });
      } else {
        // console.error("Error Response:", data); // Debug log
        alert("There was an error booking the appointment!");
      }
    } catch (error) {
      console.error("There was an error booking the appointment!", error);
      alert("There was an error booking the appointment!");
    }
  };

  return (
    <div className="flex flex-row h-screen gap-5 w-5/6 mx-auto bg-yellow-50 shadow-xl rounded-[24px] mt-10">
      <div className="w-1/2 bg-brown-900 h-full hidden rounded-l-[24px] overflow-hidden md:flex">
        <div className="sticky w-full top-0">
          <img src={Image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-screen overflow-y-auto p-6 scroll-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>
          {`
            .scroll-hidden::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        <h2 className="text-[32px] font-bold text-black text-center mb-6">Book Your Appointment</h2>
        <div className="mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <h3 className="font-bold text-lg mb-2">Appointment Booking Guidelines</h3>
          <p className="mb-2">
            <strong>For Dengue and Corona Patients:</strong><br />
            Time slots are available <strong>every day</strong> from <strong>9:00 AM to 5:00 PM</strong>.
          </p>
          <p className="mb-2">
            <strong>For Other Diseases:</strong><br />
            Time slots are available only on:<br />
            - <strong>Saturday and Sunday:</strong> From <strong>9:00 AM to 5:00 PM</strong>.<br />
            - <strong>Monday:</strong> From <strong>9:30 AM to 4:00 PM</strong>.
          </p>
          <p>No slots are available on other weekdays.</p>
          <p className="mt-2"><em>Please select the appropriate date and disease to view the available time slots.</em></p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label className="block mb-2 text-brown-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border-[1px] border-brown-300 rounded-md mb-4 focus:outline-none focus:ring-[1px] focus:ring-yellow-500"
                placeholder="Enter your name"
                required
              />

              <label className="block mb-2 text-brown-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full p-3 border border-brown-300 rounded-md mb-4 focus:outline-none focus:ring-[1px] focus:ring-yellow-500"
                placeholder="Enter your age"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-2">
              <label className="block mb-2 text-brown-700">Village</label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleInputChange}
                className="w-full p-3 border border-brown-300 rounded-md mb-4 focus:outline-none focus:ring-[1px] focus:ring-yellow-500"
                placeholder="Enter your village"
                required
              />

              <label className="block mb-2 text-brown-700">Select Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full p-3 border border-brown-300 rounded-md mb-4 focus:outline-none focus:ring-[1px] focus:ring-yellow-500"
                required
              />
            </div>
          </div>

          <label className="block mb-2 text-brown-700">Disease Type</label>
          <select
            name="disease"
            value={formData.disease}
            onChange={handleInputChange}
            className="w-1/2 p-3 border border-brown-300 rounded-md mb-4 focus:outline-none focus:ring-[1px] focus:ring-yellow-500"
            required
          >
            <option value="" disabled>
              Select your disease type
            </option>
            <option value="dengue">Dengue</option>
            <option value="corona">Corona</option>
            <option value="other">Other Diseases</option>
          </select>

          <label className="block mb-2 text-brown-700">Available Time Slots</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {availableTimeSlots.map((slot, index) => (
              <button
                key={index}
                type="button"
                className={`p-3 rounded-md border ${formData.timeSlot === slot
                  ? "bg-yellow-400 border-yellow-500"
                  : "bg-yellow-200 hover:bg-yellow-300"
                  }`}
                onClick={() => handleSlotSelect(slot)}
              >
                {slot}
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full font-semibold bg-yellow-500 text-white p-3 rounded-md  hover:bg-yellow-600"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
