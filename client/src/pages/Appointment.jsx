import React, { useState } from "react";

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
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const disease = formData.disease;

    if (disease === "dengue" || disease === "corona") {
      return allTimeSlots; // Dengue and Corona: All slots every day
    } else {
      // Other diseases: Only Saturday, Sunday, Monday
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        // Saturday or Sunday
        return allTimeSlots.slice(0, 16); // 9:00 AM to 5:00 PM
      } else if (dayOfWeek === 1) {
        // Monday
        return allTimeSlots.slice(0, 14); // 9:30 AM to 4:00 PM
      } else {
        return []; // No slots available on other days
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.timeSlot) {
      alert("Please select a time slot!");
      return;
    }
    console.log("Appointment Data:", formData);
    alert("Appointment booked successfully!");
    setFormData({
      name: "",
      age: "",
      village: "",
      date: "",
      timeSlot: "",
      disease: "",
    });
  };

  return (
    <div className="w-2/3 mx-auto p-6 bg-white shadow-lg rounded-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Book Your Appointment</h2>
      <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
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
            <label className="block mb-2 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
              required
            />

            <label className="block mb-2 text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your age"
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label className="block mb-2 text-gray-700">Village</label>
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your village"
              required
            />

            <label className="block mb-2 text-gray-700">Select Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        <label className="block mb-2 text-gray-700">Disease Type</label>
        <select
          name="disease"
          value={formData.disease}
          onChange={handleInputChange}
          className="w-1/2 p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="" disabled>
            Select your disease type
          </option>
          <option value="dengue">Dengue</option>
          <option value="corona">Corona</option>
          <option value="other">Other Diseases</option>
        </select>

        <label className="block mb-2 text-gray-700">Available Time Slots</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {availableTimeSlots.map((slot, index) => (
            <button
              key={index}
              type="button"
              className={`p-3 rounded-md border ${formData.timeSlot === slot
                  ? "bg-green-200 border-green-500 text-green-700"
                  : "bg-gray-100 hover:bg-green-100"
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
          className="w-1/2  bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
        >
          Book Your Appointment
        </button>

        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
