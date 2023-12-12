import React from "react";
import TitleTopComponent from "../../Blood/TitleTopComponent";

const SearchDonorPageComponent = () => {
  return (
    <div className="mx-28">
      <div>
        <TitleTopComponent secondTitle={"Blood"} thirdTitle={"Request Blood"} />
      </div>

      <div>
        <h2 className="font-bold text-brandPrimary text-3xl">
          Personalized Donor
        </h2>
      </div>

      <div className="my-4">
        <hr className="border-t-[2px] border-[#44444480]" />
      </div>

      <div className="grid grid-cols-12 gap-4 h-96">
        <div className="col-span-3 border-r border-[#44444480]">
          <div className="border border-blue-800 h-80 mr-[25px]  rounded-xl shadow-top-right-left-bottom-lg">
            <div className="h-full border border-pink-600 mx-4">
              <div className="ml-6 mt-[20px]">
                <p className="font-semibold text-[#444]">Area</p>
              </div>

              <div className="my-4">
                <hr className="border-t-[1px] border-[#44444480]" />
              </div>

              <div className="h-44 mt-0 border border-cyan-400">

                
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9 border border-yellow-700"></div>
      </div>
    </div>
  );
};

export default SearchDonorPageComponent;
