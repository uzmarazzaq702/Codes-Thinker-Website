import React, { useState } from "react";
import uzma7 from "../../assets/uzma7.webp";
import { ChevronDown } from "lucide-react";

const faqs = [
  "What services do you offer?",
  "How long does a project usually take?",
  "Do you offer post-launch support?",
  "Can I get a custom design for my brand?",
  "How do I get started with a project?",
];

const Text1 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left: FAQs */}
        <div data-aos="zoom-out" className="flex-1 w-full">
          <div className="space-y-5">
            {faqs.map((question, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-4 sm:p-5 cursor-pointer transition-all"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-base sm:text-lg md:text-xl text-gray-800">
                    {question}
                  </p>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg">
                    This is a placeholder answer for "{question}". You can update it with real content.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="flex-1 w-full flex justify-center"
        >
          <img
            src={uzma7}
            alt="FAQ Illustration"
            className="w-full max-w-[450px] h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Text1;
