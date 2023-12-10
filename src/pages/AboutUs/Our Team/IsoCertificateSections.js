import React from "react";
import images1 from "../../../assets/bloodLogo.jpg";
import images2 from "../../../assets/bloodlogo2.png";

function IsoCertificateSections() {
  return (
    <div className="w-11/12 ml-auto mr-auto mt-6">
      <p className="p-2 md:w-1/6 w-full bg-red-700 rounded-md font-bold text-white  mt-6">
        ISO 2008 Certified
      </p>

      <div>
        <img className="rounded-md p-2 mt-2 w-8/10 ml-auto mr-auto" src={images1} alt=""></img>
      </div>
      <div className="mb-4 mt-2">
        <img className="rounded-md p-2 mt-2 md:w-2/4 ml-auto mr-auto" src={images2} alt=""></img>
      </div>
    </div>
  );
}

export default IsoCertificateSections;
