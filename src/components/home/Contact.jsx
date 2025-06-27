import React from "react";
import uzma2 from '../../assets/uzma2.svg';
import uzma3 from "../../assets/uzma3.svg";
import uzma4 from "../../assets/uzma4.svg";
import uzma5 from "../../assets/uzma5.webp";

const values = [
  {
    title: "Integrity",
    description: "We hold ourselves to a strong ethical and moral code.",
    icon: uzma2,
  },
  {
    title: "Trust",
    description: "We are dependable, loyal, and hardworking to achieve the same goal.",
    icon: uzma3,
  },
  {
    title: "Excellence",
    description: "We consistently strive to deliver high-quality work without room for error.",
    icon: uzma4,
  },
];

const Contact = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="flex-1 w-full">
          <h2 data-aos="fade-right" className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-black sm:text-5xl text-2xl font-bold">OUR </span>
            <span className="text-blue-900 sm:text-5xl text-2xl font-bold">VALUE</span>
          </h2>
          <div className="w-20 h-1 bg-blue-900 mb-4"></div>
          <p data-aos="fade-right" className="text-xl sm:text-2xl mb-8 text-black font-semibold">
            A melting pot for the best ideas
          </p>

          <div className="space-y-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <div data-aos="fade-right" className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-[#0b082b] rounded-md">
                  <img src={value.icon} alt={value.title} className="w-10 h-10 sm:w-11 sm:h-11" />
                </div>
                <div data-aos="fade-right">
                  <h3 className="text-xl sm:text-2xl font-bold">{value.title}</h3>
                  <p className="text-base sm:text-lg text-black">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div 
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" 
          className="flex-1 w-full"
        >
          <img 
            src={uzma5} 
            alt="Value Illustration" 
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;
