import React from "react";
import banner from "../../assets/banner.png";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import carouselBanner from "../../assets/carouselBanner.png";
import { Carousel } from "flowbite-react";

const CarouselBanner = () => {
  return (
    <div className="h-96  lg:mt-40 w-full">
      <div
        className="pt-0"
        style={{
          backgroundImage: `url(${carouselBanner})`,
          backgroundSize: "auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
          <Carousel className="w-full mx-auto">
            <div
              className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12"
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                lineHeight: "normal",
                textTransform: "capitalize"
              }}
            >
              <div>{/* <img src={banner} alt="banner1" /> */}</div>
              <div className="md:w-1/2">
                <h1
                  className="text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug"
                  style={{
                    fontSize: "40px",
                    fontWeight: 700,
                  }}
                >
                  The gift of blood is a gift to someone's life
                </h1>
                <p
                  className="text-white text-base mb-8"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.“
                </p>
              </div>
            </div>
            {/* end */}
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div>{/* <img src={banner2} alt="banner1" /> */}</div>
              <div
                className="md:w-1/2"
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  lineHeight: "normal",
                }}
              >
                <h1
                  className="text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug"
                  style={{
                    fontSize: "40px",
                    fontWeight: 700,
                  }}
                >
                  The gift of blood is a gift to someone's life
                </h1>
                <p
                  className="text-white text-base mb-8"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                </p>
              </div>
            </div>
          </Carousel>
          {/* start */}
          <div className="h-40"></div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;
