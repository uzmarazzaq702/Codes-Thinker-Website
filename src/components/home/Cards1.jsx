import React from "react";

const stats = [
  { number: "4+", label: "Years of Experience" },
  { number: "50+", label: "Satisfied Clients" },
  { number: "17+", label: "Countries We Operate" },
  { number: "$200K+", label: "Managed Marketing Fund" },
  { number: "$2.9M+", label: "Clients Gain" },
];

const Cards1 = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-12 text-center w-full">
      <div data-aos="flip-right" className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black">
          Our <span className="text-blue-900">Progress</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-black max-w-2xl mx-auto mb-12 leading-relaxed">
          TOJO GLOBAL connects your business directly to your target audience,
          eliminating the need to search for clients. With us, they’ll find their way to you.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="bg-blue-900 text-white py-8 px-4 sm:px-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500"
            >
              <div className="text-3xl sm:text-4xl font-bold mb-2">{item.number}</div>
              <div className="text-sm sm:text-base">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards1;
