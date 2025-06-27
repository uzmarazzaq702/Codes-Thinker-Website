import React from "react";
import { Building2, ArrowRight } from "lucide-react";
import img2 from "../../assets/img2.webp";

const features = [
  "Industry Expert Staff",
  "Client-Centric Focus",
  "Partner rather than Vendor",
  "Solutions Geared to Improve Productivity",
];

const Vision = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
      {/* Left Image Section */}
      <div data-aos="flip-left" className="relative w-full lg:w-1/2 h-72 sm:h-96">
        <img
          src={img2}
          alt="Team"
          className="rounded-xl shadow-lg w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md">
          <Building2 className="text-blue-900 w-6 h-6" />
        </div>
      </div>

      {/* Right Text Section */}
      <div data-aos="flip-up" className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <p className="text-sm font-medium text-gray-600 text-[18px]">
          WHO <span className="text-blue-900 font-bold text-[20px]">WE</span> ARE
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          YOUR <span className="text-blue-900">VISION</span> OUR{" "}
          <span className="text-black">CODE</span>
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At Codes Thinker, we are a passionate team of developers, designers,
          and strategists dedicated to building smart, scalable, and
          user-focused digital solutions. We thrive on creativity and
          cutting-edge technology to transform ideas into impactful products.
          With a commitment to quality, transparency, and client satisfaction,
          we don’t just deliver code — we deliver value.
        </p>

        {/* Feature List */}
        <div className="space-y-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition justify-center lg:justify-start"
            >
              <ArrowRight className="text-black mr-3 w-4 h-4" />
              <span className="text-black text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
