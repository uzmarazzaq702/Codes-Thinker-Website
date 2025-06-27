// src/pages/Signup.jsx
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import hero2 from '../assets/hero2.webp';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 px-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex w-full max-w-5xl">

        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2 bg-gray-100">
          <img
            src={hero2}
            alt="Signup Visual"
            className="h-[350px] w-[350px] object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Create Account</h2>

          <form className="mt-6 space-y-5">
            <div>
              <label className="block mb-1 text-[16px] font-bold text-gray-800">Full Name</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-[16px] font-bold text-gray-800">Email</label>
              <input
                type="email"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-[16px] font-bold text-gray-800">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-sm text-blue-600"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="accent-blue-600"
                />
                Remember me
              </label>
              <a href="#" className="text-blue-600 font-bold text-[15px] hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white text-[18px]  py-2 rounded-lg font-bold transition"
            >
              Create Account
            </button>

            <div className="flex items-center gap-2 text-gray-500">
              <hr className="flex-1 border-gray-300" />
              OR
              <hr className="flex-1 border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center font-bold gap-3 border py-2 rounded-lg hover:bg-gray-50 transition"
            >
              <FaGoogle className="text-white text-[30px] bg-red-600 p-2 rounded-full" />
              Sign up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
