import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import hero2 from '../assets/hero2.webp';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', remember);

    // Optional: clear form after login
    // setEmail('');
    // setPassword('');
    // setRemember(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Welcome Back</h2>
          <p className="text-center text-gray-700 text-[17px] mt-2">
            Start your journey with us. Don’t have an account?
            <br />
            <Link to="/signin" className="text-blue-700 font-bold hover:underline">Sign Up</Link>
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-5">
            <div>
              <label className="block mb-1 text-[16px] font-bold text-gray-800">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-[16px] font-bold text-gray-800">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
              />
            </div>

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
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold transition"
            >
              Sign into your account
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
              Sign in with Google
            </button>
          </form>

          {/* Debugging output (optional) */}
          {/* <p className="text-sm text-gray-600 mt-4">Entered Email: {email}</p> */}
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2 bg-gray-100">
          <img
            src={hero2}
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
