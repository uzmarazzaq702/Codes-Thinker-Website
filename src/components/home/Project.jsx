import React from "react";
import uzma from "../../assets/uzma.webp";

const Project = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white text-black w-full">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          <span className="text-blue-900">Services</span>{" "}
          <span className="text-black">We Offer</span>
        </h2>

        <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          TOJO GLOBAL offers crypto solutions, targeted marketing, impactful
          design, custom development, and professional video editing to elevate
          your brand.
        </p>

        {/* Main Content */}
        <div className="mt-12 flex flex-col md:flex-row gap-10">
          {/* Left Column - Buttons */}
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex flex-col gap-4 w-full md:w-1/3"
          >
            {[
              "Development",
              "Management",
              "Marketing",
              "Graphics & Visuals",
              "Video Editing",
              "Content Writing",
            ].map((item, index) => (
              <button
                key={item}
                className={`py-3 px-6 rounded-full text-sm sm:text-base font-semibold transition-all duration-200
                  ${
                    index === 0
                      ? "bg-gradient-to-r from-indigo-700 to-blue-900 text-white shadow-lg"
                      : "bg-white border border-gray-300 text-black"
                  }
                  hover:bg-blue-900 hover:text-white hover:shadow-lg`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Column - Image + Services */}
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-full md:w-2/3"
          >
            <img
              src={uzma}
              alt="Team working"
              className="rounded-2xl w-full max-w-[75%] mx-auto h-[300px] sm:h-[380px] object-cover"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 text-center font-semibold text-sm sm:text-base md:text-lg">
              {[
                "Custom Development",
                "Web App Development",
                "Mobile App Development",
                "Blockchain Dev",
                "Crypto Token Dev",
                "WordPress Dev",
              ].map((service, i) => (
                <p
                  key={service}
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
