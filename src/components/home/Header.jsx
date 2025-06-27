import pexlexPhoto from '../../assets/header.webp';

const Header = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${pexlexPhoto})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Welcome to <span className="text-blue-600">Codes Thinker</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium">
          We craft smart, user-friendly digital solutions that help businesses innovate and grow.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold transition">
            View Our Work
          </button>
          <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-full font-semibold transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
