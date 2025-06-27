import { FaWhatsappSquare } from "react-icons/fa";
import { useEffect } from "react";

const Whatsap = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes custom-bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }
      .animate-custom-bounce {
        animation: custom-bounce 2.5s infinite;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-custom-bounce group">
      {/* Tooltip */}
      <div className="absolute -top-16 right-1/2 translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-md shadow-lg">
          Chat with us
        </div>
        <div className="w-2 h-2 bg-black rotate-45 mt-[-4px]"></div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923001234567?text=Hi%20I%20am%20interested%20in%20your%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-green-500/40 flex items-center justify-center"
      >
        <FaWhatsappSquare size={22} />

        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-md">
          1
        </span>
      </a>
    </div>
  );
};

export default Whatsap;
