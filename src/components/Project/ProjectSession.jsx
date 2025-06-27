import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import web1 from "../../assets/web1.webp";
import web2 from "../../assets/web2.webp";
import web3 from "../../assets/web3.webp";
import web4 from "../../assets/web4.webp";

const projects = [
  {
    title: "Figma Design AI Dashboard",
    description:
      "Sleek, data-driven interface for monitoring AI performance with interactive charts and real-time analytics.",
    mainImage: web1,
    gallery: [web1, web2, web3, web4],
  },
  {
    title: "E-commerce Web UI",
    description:
      "A full-featured e-commerce front-end with responsive layout and product filters.",
    mainImage: web2,
    gallery: [web2, web1, web3, web4],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase design and development skills with animation effects.",
    mainImage: web3,
    gallery: [web3, web1, web2, web4],
  },
  {
    title: "Admin Dashboard",
    description:
      "Clean and modern admin panel UI with chart integrations and role-based layout.",
    mainImage: web4,
    gallery: [web4, web1, web2, web3],
  },
  {
    title: "Mobile UI/UX Concept",
    description:
      "Prototype for a mobile app with intuitive UI and advanced gesture interactions.",
    mainImage: web1,
    gallery: [web1, web3, web4, web2],
  },
];

const ProjectCard = ({ project }) => {
  const [activeImage, setActiveImage] = useState(project.mainImage);

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-white shadow-md rounded-2xl overflow-hidden">
      {/* Left Image */}
      <div data-aos="zoom-out-right" className="w-full lg:w-1/2">
        <img
          src={activeImage}
          alt={project.title}
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div
        data-aos="zoom-out-left"
        className="w-full lg:w-1/2 p-6 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-700 text-[17px] mb-4">{project.description}</p>

          {/* Gallery */}
          <div className="flex gap-2 overflow-x-auto flex-wrap sm:flex-nowrap">
            {project.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                className={`w-20 h-28 rounded-md border object-cover cursor-pointer transition hover:scale-105 ${
                  img === activeImage ? "ring-2 ring-indigo-600" : ""
                }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-start">
          <button
            className="font-bold w-full sm:w-auto p-3 rounded-md transition px-6 duration-200 
            bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] 
            bg-[length:200%_100%] bg-left text-white hover:bg-right"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <div data-aos="zoom-out-left" className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold">Project Section</h2>
        <p className="mt-2 text-black font-semibold text-[18px]">
          Explore a range of projects we’ve worked on across web, mobile, and design.
        </p>
      </div>

      {/* Filter Buttons */}
      <div
        data-aos="zoom-out-left"
        className="flex justify-center gap-4 mb-8 flex-wrap text-center"
      >
        <button className="px-5 py-2 rounded-full text-black font-bold text-[20px] transition">
          All
        </button>
        <button className="px-5 rounded-full font-bold text-black text-[20px] transition">
          Website development
        </button>
        <button
          className="font-semibold p-3 rounded-md m-2 transition duration-200 
          bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] 
          bg-[length:200%_100%] bg-left text-white hover:bg-right"
        >
          UI/UX
        </button>
      </div>

      {/* Project Cards */}
      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
