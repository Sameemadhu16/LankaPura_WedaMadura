// import React from "react";

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         width: "1519px", // Set width
//         height: "474px", // Set height
//         backgroundColor: "#331806", // Set background color
//       }}
//       className="text-white flex flex-col justify-end items-center"
//     >
//       <div className="w-full px-6 py-4">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//           {/* Footer Text */}
//           <div className="flex space-x-4 mt-4 md:text-left">
//             © Copyright Lankapura Wedamadura. All Rights Reserved.
//           </div>

//           {/* Social Links */}
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a href="#" className="hover:text-gray-400">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-gray-400">
//               |
//             </a>
//             <a href="#" className="hover:text-gray-400">
//               Terms of Services
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%", // Set full width
        backgroundColor: "#331806", // Background color as shown in the image
        color: "white",
        height: "474px", // Set the height to 474px
      }}
      className="text-sm md:text-base flex flex-col justify-between"
    >
      <div className="container mx-auto py-4 px-6 grid grid-cols-1 md:grid-cols-4 gap-8 overflow-y-auto">
        {/* Logo and Description */}
        <div>
          <h1 className="text-xl font-bold mb-4">LANKAPURA WEDAMADURA</h1>
          <p>
            Discover The Essence Of Wellness At Our Ayurvedic Medical Center.
            Experience Holistic Healing Through Ancient Traditions, Tailored
            Treatments, And Natural Remedies. Rejuvenate Your Body, Mind, And
            Spirit With Our Expert Care And Personalized Therapies.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Our Treatments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        {/* <div>
          <h2 className="text-lg font-bold mb-4">Address</h2>
          <p>Perumanagoda, Aluthwala, Ambalangoda</p>
        </div> */}

        {/* Contact Details */}
        <div className="mt-10"> {/* Add margin-top here */}
          <h2 className="text-lg font-bold mb-4">Address</h2>
          <p>Perumanagoda, Aluthwala, Ambalangoda</p>
          <h2 className="text-lg font-bold mb-4">Contact No.</h2>
          <p>+94 91 79 14 202</p>
          <p>+94 77 85 40 474</p>
          <h2 className="text-lg font-bold mt-4 mb-2">Email</h2>
          <p>wickramasooriyatharanga@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 text-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
          <p>
            © Copyright Lankapura Wedamadura. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400">
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
