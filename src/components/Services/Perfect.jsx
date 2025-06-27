import React from "react";
import hero from "../../assets/hero.webp"; // ✅ Correct path

const Perfect = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div data-aos="zoom-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Perfect It <span className="text-[#0f00AA]">Solutions</span> <br />
            Business
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-6 leading-relaxed max-w-full md:max-w-xl">
            Perfect IT Solutions provides expert services in software development,
            IT consulting, cloud solutions, network security, data management,
            technical support, web design, and system integration to empower
            business growth and efficiency.
          </p>
          <button className="mt-8 sm:mt-10 bg-blue-900 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-xl hover:bg-blue-950 transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="flex justify-center"
        >
          <img
            src={hero}
            alt="IT Solutions Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Perfect;
