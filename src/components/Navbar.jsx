import React, { useState } from "react";
import logo from '../assets/companylogo.webp';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when link is clicked
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full">
      <nav className="bg-[#0a0153] sticky top-0 z-[999] px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo Section */}
        <div className="relative w-[50px] sm:w-[15%] group overflow-hidden">
          <div className="absolute inset-0 w-0 flex items-center justify-center transition-all ease-in duration-500 group-hover:w-full group-hover:h-full">
            <Link to="/">
              <img
                alt="Codes Thinker Logo"
                className="h-14 w-full object-contain"
                src={logo}
              />
            </Link>
          </div>

          <div className="flex flex-col group-hover:translate-x-[120%] transition-all ease-in justify-center duration-400">
            <h1 className="text-white text-4xl md:text-[4rem] leading-none">C</h1>
            <div className="relative ml-[0.5rem] md:ml-[0.9rem] font-semibold -mt-7 sm:-mt-9">
              <FontAwesomeIcon
                icon={faCrown}
                className="absolute ml-[0.1rem] mt-[2px] md:ml-[0.1rem] md:-top-3 text-[#FFC41D] text-[10px] sm:text-[1.1rem]"
              />
              <h2 className="text-[#F69B23] mt-[7px] sm:mt-0 text-xl sm:text-4xl">T</h2>
            </div>
          </div>
        </div>

        {/* Center Navigation Links - Desktop Only */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-6 text-white font-medium text-base xl:text-[15px]">
            <li className="hover:text-blue-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/team">Team</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>

        {/* Desktop Login Button - Right Side */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="text-white border border-white px-6 xl:px-6 py-2 rounded-full hover:bg-white hover:text-[#0a0155] transition text-base xl:text-[15px] font-medium"
          >
            Login
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#0a0153] px-6 py-4 z-50">
            <ul className="flex flex-col gap-4 text-white font-medium text-base">
              <li className="hover:text-blue-500">
                <Link to="/" onClick={handleMenuClose}>Home</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to="/about" onClick={handleMenuClose}>About</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to="/services" onClick={handleMenuClose}>Services</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to="/projects" onClick={handleMenuClose}>Projects</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to="/team" onClick={handleMenuClose}>Team</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to="/contact" onClick={handleMenuClose}>Contact</Link>
              </li>
              
              {/* Mobile Login Button */}
              <li className="mt-4">
                <Link
                  to="/login"
                  onClick={handleMenuClose}
                  className="block text-center border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#0a0155] transition text-base font-medium"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;