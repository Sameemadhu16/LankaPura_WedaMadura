import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Home_Assets/Logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [headerVisible, setHeaderVisible] = useState(true); // Track header visibility
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setHeaderVisible(false);
      } else {
        // Scrolling up
        setHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = (isActive) =>
    `relative group font-[Raleway] text-sm ${
      isActive ? "text-[#EEE183]" : "text-white"
    } hover:text-[#EEE183]`;

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/ourtreat", name: "Our Treatments" },
    { path: "/products", name: "Products" },
    { path: "/blog", name: "Blog" },
    { path: "/aboutus", name: "About Us" },
    { path: "/appointment", name: "Appointment" },
    { path: "/contactus", name: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full p-3 z-50 ${
        isScrolled ? "bg-[#331806e4] shadow-lg" : "bg-transparent"
      } transition-all duration-300 ${headerVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-[50px] md:h-[60px] lg:h-[70px] w-auto mb-3"
            />
          </a>
          <div className="flex flex-col text-white ml-2">
            <span className="text-lg md:text-xl lg:text-xl font-normal leading-tight font-[Raleway]">
              LANKAPURA
            </span>
            <span className="text-lg md:text-xl lg:text-xl font-normal leading-tight font-[Raleway]">
              WEDAMADURA
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center justify-center space-x-8 text-white">
          {navLinks.map(({ path, name }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) => linkClass(isActive)}
            >
              {name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#EEE183] transition-all duration-300 ${
                  location.pathname === path ? "w-full" : "w-0"
                } group-hover:w-full`}
              ></span>
            </NavLink>
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-600 shadow-lg z-50 md:hidden">
          <ul className="flex flex-col items-center space-y-4 text-white py-4">
            {navLinks.map(({ path, name }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
