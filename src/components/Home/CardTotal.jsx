import React from "react";
import cart from "../../assets/card.png";
// import bell from "../../assets/icons/bell.png";
import handshake from "../../assets/icons/handShake.png";
// import layer from "../../assets/icons/layer.png";
import users from "../../assets/icons/users.png";

export default function CardTotal() {
  const cardTotalStyle = {
    backgroundImage: `url(${cart})`,
  };

  const iconStyle = "border-2 border-red-500 rounded-full p-8 ml-4 md:ml-20";
  const textBelowStyle =
    "text-center ml-4 md:ml-20 mt-1 text-brandPrimary font-semibold ";
  const textBelow =
    "text-center ml-4 md:ml-20 mt-2 text-black text-l font-semibold ";

  return (
    <div
      className="bg-cover bg-center text-white h-56 relative mt-20 mb-4 overflow-hidden" // Adjust the height (h-48) as needed
      style={cardTotalStyle}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:mx-8 items-center mt-8">
        {/* <div className="flex flex-col items-center">
          <img
            src={layer}
            alt="Layer"
            className={`${iconStyle} w-8 h-16 md:w-24 md:h-24 object-cover`}
          />
          <p className={textBelowStyle}>123 K</p>
          <p className={textBelow}>Total Donors</p>
        </div> */}
        {/* <div className="flex flex-col items-center">
          <img
            src={bell}
            alt="Bell"
            className={`${iconStyle} w-16 h-16 md:w-24 md:h-24 object-cover`}
          />
          <p className={textBelowStyle}>123 K</p>
          <p className={textBelow}>Blood Requests</p>
        </div> */}
        <div className="flex flex-col items-center">
          <img
            src={handshake}
            alt="Handshake"
            className={`${iconStyle} w-16 h-16 md:w-24 md:h-24 object-cover`}
          />
          <p className={textBelowStyle}>123 K</p>
          <p className={textBelow}>Happy Recipients</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={users}
            alt="Users"
            className={`${iconStyle} w-16 h-16 md:w-24 md:h-24 object-cover`}
          />
          <p className={textBelowStyle}>123 K</p>
          <p className={textBelow}>Volunteers</p>
        </div>
      </div>
    </div>
  );
}
