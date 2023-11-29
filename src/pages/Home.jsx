import React from "react";
import Navbar from "../components/Home/Navbar";
import CarouselBanner from "../components/Home/CarouselBanner";
import AboutProject from "../components/Home/AboutProject";

const Home = () => {
  return (
    <div className="">
      <div><Navbar/></div>
     <div className=""> <CarouselBanner/></div>
     <div className=""> <AboutProject/></div>
    </div>
  );
};

export default Home;
