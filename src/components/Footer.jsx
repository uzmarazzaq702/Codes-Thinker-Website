import React from "react";
import companylogo from "../assets/companylogo.webp";
import { FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#06032c] text-white py-12 px-6 mt-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Logo and About */}
        <div>
          <img src={companylogo} alt="Logo" className="h-15 mb-4" />
          <p className="text-sm leading-relaxed text-gray-300 text-[15px]">
            We offer a range of cutting-edge web development and software
            solutions tailored to meet client needs. Our experienced team
            delivers collaboratively and efficiently.
          </p>
          <div className="flex gap-4 mt-4 text-white text-xl">
            <div className="bg-blue-900 p-2 rounded-full transition duration-300 hover:bg-blue-800">
              <FaFacebook size={18} />
            </div>
            <div className="bg-blue-900 p-2 rounded-full transition duration-300 hover:bg-blue-800">
              <FaTwitter size={18} />
            </div>
            <div className="bg-blue-900 p-2 rounded-full transition duration-300 hover:bg-blue-800">
              <FaInstagramSquare size={18} />
            </div>
            <div className="bg-blue-900 p-2 rounded-full transition duration-300 hover:bg-blue-800">
              <FaLinkedin size={18} />
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm text-[15px]">
            <li>Business Intelligence</li>
            <li>Virtual Workstation</li>
            <li>Network Services</li>
            <li>Data Science</li>
            <li>IT Strategy</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-[15px]">
            <li>About Us</li>
            <li>Latest Projects</li>
            <li>IT Solutions</li>
            <li>Team Member</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="sm:text-lg text-md font-bold mb-4">Contact Info</h3>
          <ul className="space-y-4 text-gray-300 text-[15px]">
            <li className="flex items-start gap-3">
              <div className="bg-blue-900 p-2 rounded-full transition duration-300 hover:bg-blue-800">
                <Phone size={20} className="text-white" />
              </div>
              +44 7470 103120
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-900 p-2 rounded-full transition duration-300 hover:bg-blue-800">
                <Mail size={20} className="text-white" />
              </div>
              info@codesthinker.com
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-900 p-2 rounded-full transition duration-300 hover:bg-blue-800">
                <MapPin size={20} className="text-white" />
              </div>
              <span className="text-sm">Bartle House 9 Oxford Court, Manchester M23WQ United Kingdom (Regional Office)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-900 p-2 rounded-full transition duration-300 hover:bg-blue-800">
                <MapPin size={20} className="text-white" />
              </div>
              <span className="text-sm">Hassan Manzil Basement Goheer Town Bahawalpur (Global Delivery Center)</span>
            </li>
          </ul>

          {/* Email Input + Submit Button (Horizontal) */}
          <div className="mt-6 flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 text-black bg-white rounded-l-md text-sm focus:outline-none"
            />
            <button
              className="bg-blue-900 hover:bg-blue-800 transition duration-300 text-white px-4 py-2 rounded-r-md text-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-900 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2024 – All Rights Reserved – Code's Thinker
      </div>
    </footer>
  );
};

export default Footer;
