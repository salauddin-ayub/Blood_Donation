import React from "react";
import Navbar from "../components/Home/Navbar";
import CarouselBanner from "../components/Home/CarouselBanner";


import TotalReviews from "../components/Home/TotalReviews";

import AboutProject from "../components/Home/AboutProject";

import HelpOther from "../components/Home/HelpOther";
import TotalSection from "../components/Home/TotalSection";
import Footer from "../components/Home/Footer";


const Home = () => {
  return (
    <div className="">
      <div><Navbar/></div>
     <div className=""> <CarouselBanner/></div>
     <div className=""> <AboutProject/></div>
     {/* <div className=""> <CardTotal/></div> */}
     <div className=""> <TotalSection/></div>

   
     <div className=""> <TotalReviews/></div>
     {/* <div className=""> <Footer/></div> */}
     
    

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
