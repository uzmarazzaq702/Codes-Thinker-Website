import React from "react";
import website1 from "../../assets/website1.webp";
import website2 from "../../assets/website2.webp";
import website3 from "../../assets/website3.webp";
import website4 from "../../assets/website4.webp";
import website5 from "../../assets/website5.webp";
import website6 from "../../assets/website6.webp";

const services = [
  {
    image: website1,
    title: "Website Development",
    description:
      "Custom, responsive websites designed to meet your business needs and provide an excellent user experience.",
  },
  {
    image: website2,
    title: "App Development",
    description:
      "High-quality mobile apps for iOS and Android that deliver seamless performance and great user experience.",
  },
  {
    image: website3,
    title: "DevOps & Cloud",
    description:
      "Automate deployments, improve scalability, and reduce downtime with our DevOps and cloud solutions.",
  },
  {
    image: website4,
    title: "UI/UX Design",
    description:
      "Craft engaging, user-centered designs that enhance usability and create delightful experiences.",
  },
  {
    image: website5,
    title: "E-Commerce Solutions",
    description:
      "Build scalable online stores that deliver smooth user journeys and boost your sales effectively.",
  },
  {
    image: website6,
    title: "SEO & Marketing",
    description:
      "Optimize your website's visibility and reach the right audience with tailored marketing strategies.",
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div data-aos="flip-left" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-blue-700 flex flex-col items-center text-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-t-xl"
            />
            <div className="p-4 sm:p-6 flex flex-col flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-black-800 mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-auto">
                <button className="bg-blue-900 text-white text-sm sm:text-base px-5 py-2 rounded-full shadow-md hover:bg-blue-800 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
