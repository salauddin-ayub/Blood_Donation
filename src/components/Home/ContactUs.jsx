import React from "react";
import about from "../../assets/ab.jpeg";

export default function ContactUs() {
  return (
    <div>
      <div className=" grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mr-24 ml-24 rounded-md shadow-md bg-brandPrimary">
        {/* First Card */}
        <div className="bg-white ml-6  mt-10 mb-7 rounded col-span-1">
          <button className="bg-brandPrimary text-white px-4 py-2 rounded-md ml-2 mt-2">
            Contact Us
          </button>
          <p className="text-gray-600 mb-2 mt-2 text-2xl font-bold ml-2">
            You can <span className="text-brandPrimary">Connect</span> with us
          </p> 
          <p className="text-gray-600 mb-4 mt-2 text-2xl font-bold ml-2">
            When Need <span className="text-brandPrimary">Help</span>!
          </p>
          <img src={about} alt="Contact Us" className="w-full h-80 " />
        </div>

        {/* Second Card */}
        <div className="bg-white p-6 mb-12 mt-1 mr-1  rounded-md shadow-md col-span-1">
          <form>
            <div className="mb-4 ml-2 mr-2">
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-600"
              >
                Enter Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-brandPrimary"
              />
            </div>
            <div className="mb-4 ml-2 mr-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-brandPrimary"
              />
            </div>
            <div className="mb-4 ml-2 mr-2">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-600"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-brandPrimary"
              />
            </div>
            <div className="mb-4 ml-2 mr-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-brandPrimary"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-brandPrimary border-brandPrimary  text-white px-4 py-2 rounded-md "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
