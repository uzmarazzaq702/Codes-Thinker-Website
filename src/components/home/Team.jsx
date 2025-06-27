import React from "react";
import {
  ShieldCheck,
  Rocket,
  Lock,
  Handshake,
  Lightbulb,
  Network,
} from "lucide-react";

const features = [
  { icon: Network, text: "Blockchain Expertise", positon: "md:ml-[-90px]" },
  { icon: Handshake, text: "Small Business Support", positon: "md:ml-[4px]" },
  { icon: Lock, text: "Crypto Solutions", positon: "md:ml-[60px]" },
  { icon: Rocket, text: "Startup Business", positon: "md:ml-[60px]" },
  { icon: ShieldCheck, text: "B2B Integration", positon: "md:ml-[10px]" },
  { icon: Lightbulb, text: "Fintech Innovation", positon: "md:ml-[-90px]" },
];

const Team = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div   className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">


        <div   data-aos="zoom-in-right"className="group w-70 h-70 rounded-full bg-gray-100 shadow-2xl hover:bg-blue-900 flex items-center justify-center text-center border border-black transition-all duration-500">
          <h2 className="text-2xl font-bold text-black group-hover:text-white transition-all duration-500 ">
            KEY<br />FEATURES
          </h2>
        </div>

        <div data-aos="zoom-in-left" className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group flex items-center gap-4 border-black-300 border-b-3 shadow-md rounded-full crouser-point w-[350px] bg-white transition-all duration-500 hover:bg-blue-900 hover:border-blue-900 border ${feature.positon}`}
            >
              <div className="flex p-3 items-center justify-center rounded-full border shadow shadow-[#0a0a0aad] border-r-3 transition-all duration-500 group-hover:border-white group-hover:bg-black">
                <feature.icon size={25} className="text-black group-hover:text-white" />
              </div>

              <span className="text-black font-semibold transition-all duration-500 group-hover:text-white">
                {feature.text}
              </span>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
