import React from "react";
import Navbar from "../components/Home/Navbar";
import CarouselBanner from "../components/Home/CarouselBanner";
import AboutProject from "../components/Home/AboutProject";
import Footer from "../components/Home/Footer";
// import Footer from "./Footer/Footer";
import CardTotal from "../components/Home/CardTotal";
import HelpOther from "../components/Home/HelpOther";

const Home = () => {
  return (
    <div className="">
      <div><Navbar/></div>
     <div className=""> <CarouselBanner/></div>
     <div className=""> <AboutProject/></div>
     <div className=""> <CardTotal/></div>
     
    

      <div className="">
        {" "}
        <HelpOther />
      </div>

      <div className="">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
