// import React, { useState, useEffect } from 'react';
// import logo from '../assets/Logo.png';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full p-4 z-50 ${
//         isScrolled ? 'bg-blue-600 shadow-lg' : 'bg-transparent'
//       } transition-all duration-300`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo with Text */}
//         <div className="flex items-center space-x-4">
//           <a href="/">
//             <img
//               src={logo}
//               alt="Logo"
//               className="h-[60px] md:h-[70px] lg:h-[80px] w-auto"
//             />
//           </a>

//           <div className="hidden md:flex flex-col text-white">
//             <span className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
//               LANKAPURA
//             </span>
//             <span className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
//               WEDAMADURA
//             </span>
//           </div>
//         </div>

//         {/* Menu Button for Larger Screens */}
//         <div className="hidden md:block relative">
//           <button
//             onClick={toggleMenu}
//             className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
//           >
//             Menu
//           </button>
//           {isMenuOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
//               <ul className="text-gray-700">
//                 <li><a href="/" className="block px-4 py-2 hover:bg-blue-100">Home</a></li>
//                 <li><a href="/ourtreat" className="block px-4 py-2 hover:bg-blue-100">Our Treatment</a></li>
//                 <li><a href="/products" className="block px-4 py-2 hover:bg-blue-100">Product</a></li>
//                 <li><a href="/appointment" className="block px-4 py-2 hover:bg-blue-100">Appointment</a></li>
//                 <li><a href="/blog" className="block px-4 py-2 hover:bg-blue-100">Blog</a></li>
//                 <li><a href="/aboutus" className="block px-4 py-2 hover:bg-blue-100">About Us</a></li>
//                 <li><a href="/contactus" className="block px-4 py-2 hover:bg-blue-100">Contact Us</a></li>
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
//             ☰
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <nav
//           className={`absolute md:relative top-16 left-0 md:top-0 md:flex md:items-center md:space-x-6 bg-blue-600 md:bg-transparent w-full md:w-auto ${
//             isMenuOpen ? 'block' : 'hidden'
//           }`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-6 text-white md:text-inherit text-center md:text-left">
//             <li><a href="/" className="hover:text-blue-300 block py-2 md:py-0">Home</a></li>
//             <li><a href="/ourtreat" className="hover:text-blue-300 block py-2 md:py-0">Our Treatment</a></li>
//             <li><a href="/products" className="hover:text-blue-300 block py-2 md:py-0">Product</a></li>
//             <li><a href="/appointment" className="hover:text-blue-300 block py-2 md:py-0">Appointment</a></li>
//             <li><a href="/blog" className="hover:text-blue-300 block py-2 md:py-0">Blog</a></li>
//             <li><a href="/aboutus" className="hover:text-blue-300 block py-2 md:py-0">About Us</a></li>
//             <li><a href="/contactus" className="hover:text-blue-300 block py-2 md:py-0">Contact Us</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;





import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full p-4 z-50 ${
          isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
        } transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo with Text */}
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="h-[60px] md:h-[70px] lg:h-[80px] w-auto"
              />
            </a>

            <div className="hidden md:flex flex-col text-white">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                LANKAPURA
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                WEDAMADURA
              </span>
            </div>
          </div>

          {/* Menu Button for Larger Screens */}
          <div className="hidden md:block relative">
            <button
              onClick={toggleMenu}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg"
            >
              Menu
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                <ul className="text-gray-700">
                  <li><a href="/" className="block px-4 py-2 hover:bg-blue-100">Home</a></li>
                  <li><a href="/ourtreat" className="block px-4 py-2 hover:bg-blue-100">Our Treatment</a></li>
                  <li><a href="/products" className="block px-4 py-2 hover:bg-blue-100">Product</a></li>
                  <li><a href="/appointment" className="block px-4 py-2 hover:bg-blue-100">Appointment</a></li>
                  <li><a href="/blog" className="block px-4 py-2 hover:bg-blue-100">Blog</a></li>
                  <li><a href="/aboutus" className="block px-4 py-2 hover:bg-blue-100">About Us</a></li>
                  <li><a href="/contactus" className="block px-4 py-2 hover:bg-blue-100">Contact Us</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
              ☰
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className={`absolute md:relative top-16 left-0 md:top-0 md:flex md:items-center md:space-x-6 bg-black md:bg-transparent w-full md:w-auto ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <ul
              className={`flex flex-col md:flex-row md:space-x-6 text-center md:text-left ${
                isScrolled ? 'text-white' : 'text-black'
              }`}
            >
              <li><a href="/" className="hover:text-blue-300 block py-2 md:py-0">Home</a></li>
              <li><a href="/ourtreat" className="hover:text-blue-300 block py-2 md:py-0">Our Treatment</a></li>
              <li><a href="/products" className="hover:text-blue-300 block py-2 md:py-0">Product</a></li>
              <li><a href="/appointment" className="hover:text-blue-300 block py-2 md:py-0">Appointment</a></li>
              <li><a href="/blog" className="hover:text-blue-300 block py-2 md:py-0">Blog</a></li>
              <li><a href="/aboutus" className="hover:text-blue-300 block py-2 md:py-0">About Us</a></li>
              <li><a href="/contactus" className="hover:text-blue-300 block py-2 md:py-0">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
