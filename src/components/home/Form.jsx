import React from "react";
import { User, Phone, Mail } from "lucide-react";

const Form = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side Content */}
        <div className="space-y-10">
          {/* Item 1 */}
          <div data-aos="fade-down-left" className="flex items-start gap-4">
            <div className="bg-blue-900 p-4 rounded-full shadow-lg">
              <User size={28} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Discuss Your Project</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Invite clients to share their ideas and requirements, fostering
                an open dialogue about potential collaborations.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div data-aos="fade-down-left" className="flex items-start gap-4">
            <div className="bg-blue-900 p-4 rounded-full shadow-lg">
              <span className="text-white text-2xl">📅</span>
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Get a Free Consultation</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Offer a no-obligation consultation to understand the client's
                needs and propose tailored solutions.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div data-aos="fade-down-left" className="flex items-start gap-4">
            <div className="bg-blue-900 p-4 rounded-full shadow-lg">
              <Phone size={28} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Reach Us Anytime</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Provide multiple contact channels, ensuring clients can connect
                with you at their convenience.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl p-6 sm:p-8 rounded-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-black">
            CONTACT US
          </h2>
          <form data-aos="flip-left" className="space-y-4">
            {/* Name & Phone */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-black rounded px-3 py-2 w-full">
                <User size={22} className="text-black mr-2" />
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full outline-none bg-transparent text-black placeholder:text-black text-base"
                />
              </div>
              <div className="flex items-center border border-black rounded px-3 py-2 w-full">
                <Phone size={22} className="text-black mr-2" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  required
                  className="w-full outline-none bg-transparent text-black placeholder:text-black text-base"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center border border-black rounded px-3 py-2">
              <Mail size={22} className="text-black mr-2" />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full outline-none bg-transparent text-black placeholder:text-black text-base"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              className="w-full border border-black rounded px-3 py-2 h-28 text-black placeholder:text-black outline-none resize-none text-base"
            ></textarea>

            {/* Submit */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-900 text-white px-6 sm:px-8 py-2 rounded-full font-semibold transition duration-300 hover:bg-yellow-500 hover:text-black active:scale-95"
              >
                Send
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Form;
