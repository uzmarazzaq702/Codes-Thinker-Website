import { CheckCircle } from "lucide-react";
import about2 from "../../assets/about2.webp";

const features = [
  "Industry Expert Staff",
  "Client-Centric Focus",
  "Partner rather than Vendor",
  "Solutions Geared to Improve Productivity",
  "Collaborative Approach Throughout the Process",
];

const Services = () => {
  return (
    <div className="bg-blue-100 py-12 px-4 sm:px-6 md:px-12 lg:px-16 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Section */}
        <div>
          <h2
            data-aos="zoom-in-right"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            About <span className="text-blue-700">Code's</span> Thinker
          </h2>

          <p
            data-aos="zoom-in-right"
            className="text-gray-600 text-sm sm:text-base mb-6"
          >
            We redefine excellence in business solution at Code's Thinker. Our goal is to empower your business with cutting-edge tools and collaborative strategies that produce real results.
          </p>

          <ul className="space-y-4">
            {features.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 bg-blue-200 rounded-full shadow-md px-4 py-2 w-fit"
              >
                <span
                  data-aos="zoom-in-right"
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md transition-transform transform hover:scale-110"
                ></span>
                <span
                  data-aos="zoom-in-right"
                  className="text-sm sm:text-base text-gray-800 font-semibold"
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src={about2}
            alt="Team"
            className="rounded-2xl w-full max-h-[450px] object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
