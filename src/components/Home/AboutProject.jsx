import React from "react";
import charm_quote from "../../assets/icons/charm_quote.png";
import callRedIco from "../../assets/icons/callRedIco.png";
import Rectangle from "../../assets/icons/Rectangle.png";
import RectangleImage from "../../assets/RectangleImage.png";
import GroupHand from "../../assets/icons/GroupHand.png";
import Discussion from "../../assets/icons/Discussion.png";
import emojion_handshake from "../../assets/icons/emojion_handshake.png";
import maki_arrow from "../../assets/icons/maki_arrow.png";

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
          fontSize: "34px",
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
          fontSize: "34px",
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

      {/* About */}
      <div className="gap-24 h-[550px] mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto ">
        <div className="flex justify-center mt-20 space-x-8 hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary hover:rounded-xl  transition-all duration-300">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl border border-pink-300 w-[400px]">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={RectangleImage}
                alt="img-blur-shadow"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="w-full -mt-[40px] zindex"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-brandPrimary bg-white"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={GroupHand}
                  alt="GroupHand"
                  className="w-[40px] h-[40px] p-1"
                />
              </div>
            </div>

            <div className="p-6 -mt-2">
              <h5
                className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Am I Eligible To Donate Blood?
              </h5>
              <p
                className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text- mt-4"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.“
              </p>
            </div>

            <div
              className="justify-end mt-4"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <div className="flex">
                <button
                  className="select-none py-3 px-6 text-center align-end text-xs text-brandPrimary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Learn more
                </button>

                <div className="mt-[16px] mr-[10px] -ml-[16px]">
                  <img
                    src={maki_arrow}
                    alt="maki_arrow"
                    className="w-[12px] h-[8px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="flex justify-center mt-20 space-x-8 hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary hover:rounded-xl  transition-all duration-300">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl border border-pink-300 w-[400px]">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={RectangleImage}
                alt="img-blur-shadow"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="w-full -mt-[40px] zindex"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-brandPrimary bg-white"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={emojion_handshake}
                  alt="emojion_handshake"
                  className="w-[40px] h-[40px] p-1"
                />
              </div>
            </div>

            <div className="p-6 -mt-2">
              <h5
                className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                How The Donation Helps
              </h5>
              <p
                className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text- mt-4"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.“
              </p>
            </div>

            <div
              className="justify-end mt-4"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <div className="flex">
                <button
                  className="select-none py-3 px-6 text-center align-end text-xs text-brandPrimary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Learn more
                </button>

                <div className="mt-[16px] mr-[10px] -ml-[16px]">
                  <img
                    src={maki_arrow}
                    alt="maki_arrow"
                    className="w-[12px] h-[8px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="flex justify-center mt-20 space-x-8 hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary hover:rounded-xl  transition-all duration-300">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl border border-pink-300 w-[400px]">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={RectangleImage}
                alt="img-blur-shadow"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="w-full -mt-[40px] zindex"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-brandPrimary bg-white"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={Discussion}
                  alt="Discussion"
                  className="w-[40px] h-[40px] p-1"
                />
              </div>
            </div>

            <div className="p-6 -mt-2">
              <h5
                className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                About Blood
              </h5>
              <p
                className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text- mt-4"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.“
              </p>
            </div>

            <div
              className="justify-end mt-4"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <div className="flex">
                <button
                  className="select-none py-3 px-6 text-center align-end text-xs text-brandPrimary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Learn more
                </button>

                <div className="mt-[16px] mr-[10px] -ml-[16px]">
                  <img
                    src={maki_arrow}
                    alt="maki_arrow"
                    className="w-[12px] h-[8px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
      {/* end */}
    </div>
  );
}
