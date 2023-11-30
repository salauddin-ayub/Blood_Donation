import React from "react";
import BloodHandFirst from "../../assets/BloodHandFirst.png";
import BloodHandSecond from "../../assets/BloodHandSecond.png";
import BloodHandThree from "../../assets/BloodHandThree.png";
import BloodHandFour from "../../assets/BloodHandFour.png";
import BloodHandFive from "../../assets/BloodHandFive.png";

const HelpOther = () => {
  return (
    <div className="h-[450px] mt-28 mb-40">
      <div>
        <h2
          className=" text-center"
          style={{
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            textTransform: "capitalize",
          }}
        >
          Making your ways to help others
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto pl-12 pr-12 mt-8">
        {/* start */}
        <div className="flex justify-center border-2 border-black h-[455px] overflow-hidden">
          <div className="relative flex flex-col bg-[#F3A4A7] shadow-md rounded-xl w-full">
            <div className="m-4 border border-black">
              <div className="flex">
                <div className="w-[240px] h-[240px] overflow-hidden rounded-xl bg-white">
                  <img
                    src={BloodHandFirst}
                    alt="img-blur-shadow"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="m-[22px] mr-[0px] w-[350px] h-[155px] overflow-hidden rounded-xl bg-white -mt-[0px]">
                  <img
                    src={BloodHandSecond}
                    alt="img-blur-shadow"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="mt-[22px] w-[350px] h-40 overflow-hidden rounded-xl bg-white">
                  <img
                    src={BloodHandFour}
                    alt="img-blur-shadow"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-[22px] w-[240px] h-[247px] overflow-hidden rounded-xl bg-white -mt-[65px]">
                  <img
                    src={BloodHandFive}
                    alt="BloodHandFirst"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
             
            </div>
          </div>
        </div>
        {/* end */}

        <div className="flex justify-center border-1 border-brandPrimary">
          <div className="relative flex flex-col bg-white shadow-md rounded-xl w-full"></div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default HelpOther;
