import React from "react";
import TitleTopComponent from "../../components/Blood/TitleTopComponent";

export default function AboutBloodPage() {
  return (
    <div className="mx-28">
      <div>
        <TitleTopComponent
          secondTitle={"Blood"}
          thirdTitle={"Learn About Blood"}
        />
      </div>

      <div className="border border-black">
        <p>Blood is a specialized body fluid. It has four main components: plasma, red blood cells, white blood cells, and platelets. Blood has many different functions, including:</p>
      </div>

      <div className="pb-96"></div>
    </div>
  );
}
