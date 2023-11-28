import React from "react";
import Navbar from "../components/Home/Navbar";
import CarouselBanner from "../components/Home/CarouselBanner";
import ConnectWithUs from "../components/Home/ConnectWithUs";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="">
      <div><Navbar/></div>
     <div className=""> <CarouselBanner/></div>
     <div><ConnectWithUs/></div>

   
     <div className=""> <Footer/></div>
    </div>
  );
};

export default Home;
