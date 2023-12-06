import React, { useState } from "react";
import RegLayer from "../assets/regLayer.png";
import bloodIcon from "../assets/Group 44.svg";
import group from "../assets/Group.svg";

const Registration = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="bg-white">
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${RegLayer})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-95">
          <div className="absolute top-10 left-60 flex items-center">
            <img src={bloodIcon} alt="Icon" className="w-6 h-6 mr-2" />
            <p className="text-brandPrimary text-xl font-bold">
              Blood Donation
            </p>
            <div className="relative w-24  h-24 mt-20 left-80 rounded-full overflow-hidden">
              <label htmlFor="imageInput">
                <div className="w-full h-full object-cover cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected Image"
                      className="w-full h-full object-cover rounded-full "
                    />
                  ) : (
                    <img
                      src={group}
                      alt="Rounded Icon"
                      className="w-full h-full object-cover rounded-full "
                    />
                  )}
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-white"></div>
              </label>

              {/* Hidden input for image selection */}
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            {/* <div className="absolute top-10 left-60 flex items-center">
              Upload Image
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
