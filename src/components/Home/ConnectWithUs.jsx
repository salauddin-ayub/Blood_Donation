/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import charm_quote from "../../assets/charm_quote.png";
import callRedIco from "../../assets/callRedIco.png";
import Rectangle from "../../assets/Rectangle.png";

const ConnectWithUs = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      Image: "/src/assets/icons/company1.png",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      Image: "/src/assets/icons/company2.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      Image: "/src/assets/icons/company3.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 mx-auto mt-4">
      {/* Services Card */}
      <div>
        <div>
          <div
            className="md:w-1/2 mx-auto text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={charm_quote} alt="charm_quote" className="w-10 h-10" />
            <h2
              className="text-4xl text-neutralDGrey font-semibold mb-3 mt-3"
              style={{
                fontFamily: "Poppins",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textTransform: "capitalize",
              }}
            >
              The gift of blood is a gift <br /> to someone's life”
            </h2>
            <p
              className="text-brandPrimary"
              style={{
                fontFamily: "Poppins",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textTransform: "capitalize",
              }}
            >
              Jhon Doe
            </p>
          </div>
        </div>

        <div>
          <div className="flex">
            <div>
              <img src={Rectangle} alt="" />
              <p className="-mt-11 ml-4 font-bold text-brandPrimary text-[14px]">
                Connect With Us
              </p>
            </div>
            <div className="mt-1">
              <img src={callRedIco} alt="" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      {/* <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 mx-auto items-center justify-center h-full"
          >
            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
              <img
                src={service.Image}
                alt="Service-Image"
                className="-ml-1 w-8 h-8"
              />
            </div>
            <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
              {service.title}
            </h4>
            <p className="text-sm text-neutralGrey">{service.description}</p>
          </div>
        ))}
      </div> */}

      <div className="h-40"></div>
    </div>
  );
};

export default ConnectWithUs;
