import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import waseem from "../../assets/waseem.webp";
import b2 from "../../assets/b2.webp";
import comments1 from "../../assets/comments-1.jpg";

const leaders = [
  { img: waseem, name: "Muhammad Waseem", title: "CEO" },
  { img: b2, name: "Saim", title: "CTO" },
  { img: comments1, name: "Malaika Noor", title: "Manager" },
];

const animations = ["flip-right", "flip-left", "zoom-in-up"];

const Global = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10 sm:py-12">
      {/* Heading */}
      <div data-aos="zoom-in-down" className="mb-8 sm:mb-10 text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Global <span className="text-[#0f00aa]">Leadership</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            data-aos={animations[index % animations.length]}
            data-aos-delay={`${index * 100}`}
            className="relative group overflow-hidden rounded-lg shadow-md transition duration-500"
          >
            <img
              src={leader.img}
              alt={leader.name}
              className="w-full h-72 sm:h-80 md:h-[320px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/60 opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-10 rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition duration-300 z-20">
              <div className="bg-gray-900 text-center py-3 sm:py-4 rounded-b-lg">
                <p className="text-[16px] sm:text-[18px] text-gray-300">{leader.name}</p>
                <p className="text-[16px] sm:text-[18px] text-gray-300">{leader.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Global;
