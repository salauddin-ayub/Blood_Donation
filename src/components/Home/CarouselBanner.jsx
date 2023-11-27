import React from "react";
import banner from "../../assets/banner.png";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import { Carousel } from "flowbite-react";

const CarouselBanner = () => {
  return (
    <div className=" bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="banner1" />
            </div>
            {/* Here Text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-[#0F046C] md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-[#91B3FA] leading-snug">from 8 yars</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow bussiness as a photographer: site or social media!
              </p>
              <button className="bg-[#0F046C] hover:bg-[#0F046C] hover:text-white btn-primary font-semibold text-white">
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselBanner;
