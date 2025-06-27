import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about2 from "../../assets/about2.webp";

const Buildind = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div data-aos="zoom-in-right" className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Building <span className="text-[#0f00AA]">Future-Ready Software</span>
          </h2>
          <p className="text-black text-[17px] leading-relaxed max-w-md md:max-w-full mx-auto md:mx-0">
            We are a team of passionate developers, designers, and thinkers building scalable solutions for tomorrow.
            At <strong>[Codes Thinker]</strong>, we don’t just build software — we craft scalable, intelligent solutions that drive real-world impact...
          </p>
        </div>

        {/* Image Section */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src={about2}
            alt="Team"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Buildind;
