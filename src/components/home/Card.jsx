import React from "react";
import { Lightbulb, Users, Sun, Timer } from "lucide-react";

const features = [
  {
    title: "Custom Web Experiences",
    icon: <Lightbulb size={40} className="text-white" />,
    bg: "bg-gradient-to-br from-blue-900 to-blue-500",
  },
  {
    title: "Innovative UI/UX Design",
    icon: <Users size={40} className="text-white" />,
    bg: "bg-gradient-to-br from-blue-900 to-blue-500",
  },
  {
    title: "Scalable Tech Solutions",
    icon: <Sun size={40} className="text-white" />,
    bg: "bg-gradient-to-br from-blue-900 to-blue-700",
  },
  {
    title: "24/7 Support & Maintenance",
    icon: <Timer size={40} className="text-white" />,
    bg: "bg-gradient-to-br from-blue-900 to-blue-700",
  },
];

const Card = () => {
  return (
    <section className="bg-[#f5f9ff] py-12 text-center overflow-hidden">
      <h2 data-aos="zoom-in" className="text-3xl md:text-4xl font-bold text-[#1a1a9e] mb-10">
        What Makes Us Stand Out?
      </h2>
      <div  className="flex flex-wrap justify-center gap-6 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="flip-up"
            data-aos-delay={index * 100} // Adds staggered delay: 0ms, 100ms, 200ms, ...
            data-aos-duration="800"
            className={`w-64 p-6 rounded-4xl bg-white hover:bg-blue-900 text-black shadow-md transition-all duration-300 hover:text-white hover:shadow-xl`}
          >
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${feature.bg}`}
            >
              {feature.icon}
            </div>
            <p className="font-semibold">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
