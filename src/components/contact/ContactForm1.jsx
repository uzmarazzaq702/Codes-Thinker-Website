import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div data-aos="zoom-out-left" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="md:pr-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Ready To Turn Your Vision <br /> Into Reality?
          </h2>
          <p className="text-black font-bold mb-10 text-base sm:text-lg">
            Want to blast your business off like a rocket? Tojo Global's got a
            secret weapon for you: an amazing custom Marketing, Management,
            Design, Development & Crypto listing plan which will turn heads and
            grow your business faster than ever.
          </p>

          <div className="space-y-6 text-black font-medium">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-indigo-900 text-white p-3 rounded-md font-bold">
                <Phone size={24} />
              </div>
              <span>+44 7470 103120</span>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-indigo-900 text-white p-3 rounded-md">
                <Mail size={24} />
              </div>
              <span className="break-words font-bold">info@codesthinker.com</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-indigo-900 text-white p-3 rounded-md font-bold">
                <MapPin size={24} />
              </div>
              <span>
                Bartle House 9 Oxford Court, Manchester M23WQ United Kingdom
                <br />
                <strong>(Regional Office)</strong>
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-indigo-900 text-white border-2 border-blue-500 p-3 rounded-full hover:bg-white hover:text-black hover:scale-110 transform transition duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <form className="space-y-6 w-full">
          <div>
            <label className="block font-medium mb-1 text-black">Full Name *</label>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-black font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-black">Work Email *</label>
            <input
              type="email"
              placeholder="Working Email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-black font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-black">Subject</label>
            <input
              type="text"
              placeholder="Enter your Subject"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-black font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-black">Message</label>
            <textarea
              rows={5}
              placeholder="Describe your message here"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-black font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-900 hover:bg-indigo-800 transition duration-300 text-white px-6 py-2 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
