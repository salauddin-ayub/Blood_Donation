import React from "react";

function AboutBloodDonation() {
  return (
    <div className="max-w-[2036px]">
      <div className="grid grid-cols-4 max-w-[1536px] mx-auto mt-4">
        <div className="col-span-1 bg-brandPrimary md:ml-10 rounded-md">
          <p className="font-bold mb-8 mt-4 text-white ml-6">
            About Blood Donation
          </p>
        </div>

        
      </div>


      <div className="grid grid-cols-4">
        <div>

        </div>

        <div className="col-span-3 -mt-10  rounded-md mr-20 " style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <p className=" p-2 text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>

      </div>




      <div className="mt-10">
        <div className="text-white bg-brandPrimary rounded-md w-2/6 md:ml-10 p-4">
            <p>How we thought of establishing this website</p>
        </div>
        <div className="md:ml-10 md:mr-20 rounded-md -mt-6 z-30" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <br></br>
            <p className="p-2 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
        </div>

      </div>


    </div>
  );
}

export default AboutBloodDonation;
