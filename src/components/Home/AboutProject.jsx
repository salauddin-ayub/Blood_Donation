import React from "react";
import { IoCallOutline } from "react-icons/io5";
import charm_quote from "../../assets/charm_quote.png";
import callRedIco from "../../assets/callRedIco.png";
import Rectangle from "../../assets/Rectangle.png";

export default function AboutProject() {
  return (
    <div className="">
      <div className="flex justify-end mt-4 text-xl font-semibold">
        <img src={Rectangle} alt="" />
        <p className="-ml-[140px] mt-[10px] font-bold text-brandPrimary text-[14px]">
          Connect With Us
        </p>
        <div className="mt-1 ml-6 mr-4">
          <div className="rounded-full text-white">
            <div className="">
              <img src={callRedIco} alt="" className="w-[40px] h-[40px]" />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={charm_quote} alt="charm_quote" className="w-10 h-10" />
      </div>
      <div
        className="flex justify-center mt-4 text-xl font-semibold"
        style={{
          fontFamily: "Poppins",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          textTransform: "capitalize",
        }}
      >
        The gift of blood is a gift
      </div>

      <div
        className="flex justify-center text-xl font-semibold"
        style={{
          fontFamily: "Poppins",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          textTransform: "capitalize",
        }}
      >
        to someone's life”
      </div>
      <div
        className="flex justify-center text-brandPrimary mt-2"
        style={{
          fontFamily: "Poppins",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          textTransform: "capitalize",
        }}
      >
        John Doe
      </div>
      <div className="flex justify-center mt-12  space-x-8">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl border border-pink-300"
          >
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                alt="img-blur-shadow"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                UI/UX Review Check
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to "Naviglio" where you can enjoy the main
                night life in Barcelona.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="select-none rounded-lg bg-brandPrimary hover:bg-transparent hover:border-brandPrimary hover:text-brandPrimary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
