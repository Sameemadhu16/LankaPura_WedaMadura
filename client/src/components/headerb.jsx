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
    <header
      className={`fixed top-0 left-0 w-full p-4 z-50 ${
        isScrolled ? 'bg-blue-600 shadow-lg' : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo with Text */}
        <div className="flex items-center space-x-4">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-[60px] md:h-[70px] lg:h-[80px] w-auto"
            />
          </a>

          <div className="flex-col hidden text-white md:flex">
            <span className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              LANKAPURA
            </span>
            <span className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              WEDAMADURA
            </span>
          </div>
        </div>

        {/* Menu Button for Larger Screens */}
        <div className="relative hidden md:block">
          <button
            onClick={toggleMenu}
            className="px-6 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            Menu
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 z-50 w-48 mt-2 bg-white rounded-lg shadow-lg">
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
          <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none">
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative top-16 left-0 md:top-0 md:flex md:items-center md:space-x-6 bg-blue-600 md:bg-transparent w-full md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col text-center text-white md:flex-row md:space-x-6 md:text-inherit md:text-left">
            <li><a href="/" className="block py-2 hover:text-blue-300 md:py-0">Home</a></li>
            <li><a href="/ourtreat" className="block py-2 hover:text-blue-300 md:py-0">Our Treatment</a></li>
            <li><a href="/products" className="block py-2 hover:text-blue-300 md:py-0">Product</a></li>
            <li><a href="/appointment" className="block py-2 hover:text-blue-300 md:py-0">Appointment</a></li>
            <li><a href="/blog" className="block py-2 hover:text-blue-300 md:py-0">Blog</a></li>
            <li><a href="/aboutus" className="block py-2 hover:text-blue-300 md:py-0">About Us</a></li>
            <li><a href="/contactus" className="block py-2 hover:text-blue-300 md:py-0">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;