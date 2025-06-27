import React from "react";
import { Star } from "lucide-react";

const Cards2 = () => {
  return (
    <section className="bg-[#0a0384] text-white py-12 px-4 sm:px-6 md:px-10 rounded-xl max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Heading Section */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-center md:text-left w-full md:w-1/2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Our <span className="text-yellow-400">Clients,</span>
            <br className="hidden md:block" /> In Their Own Words
          </h2>
        </div>

        {/* Review Box */}
        <div
          className="bg-transparent text-white w-full md:w-1/2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">5.0</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          {/* Client Info */}
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/lego/1.jpg"
              alt="Client"
              className="w-14 h-14 rounded-full bg-white p-1 object-cover"
            />
            <div className="ml-4">
              <h4 className="font-semibold text-lg sm:text-xl">Muhammad Waseem</h4>
              <p className="text-sm text-gray-300">Customer</p>
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed">
            Excellent service! Codes Thinker delivered a stunning, responsive website on time. Highly
            professional team with great communication. Highly recommend for web solutions.
          </p>

          {/* Pagination Dots */}
          <div className="flex space-x-2 mt-4">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
          </div>

          {/* Button */}
          <button className="mt-6 bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow transition duration-300 hover:bg-black hover:text-yellow-400 hover:shadow-lg">
            Add your reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards2;
