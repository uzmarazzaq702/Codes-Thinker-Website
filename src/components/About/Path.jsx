import submit from "../../assets/submit.webp";
import submit1 from "../../assets/submit1.webp";
import submit2 from "../../assets/submit2.webp";
import submit3 from "../../assets/submit3.webp";

const steps = [
  { img: submit, title: "1- Submit Application" },
  { img: submit1, title: "2- Expert Evaluation" },
  { img: submit2, title: "3- Personal Interview" },
  { img: submit3, title: "4- Seamless Onboarding" },
];

const Path = () => {
  return (
    <div
      data-aos="zoom-out-down"
      className="py-10 px-4 sm:px-6 lg:px-8 text-center bg-white"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f00AA] mb-10">
        Your Path to Joining Code's Thinker
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-black shadow-md hover:border-dotted"
            />
            <p className="mt-4 text-base sm:text-lg md:text-xl font-bold text-black">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Path;
