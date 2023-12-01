import React from "react";
import Navbar from "../components/Home/Navbar";
import CarouselBanner from "../components/Home/CarouselBanner";
import Footer from "./Footer/Footer";
import TotalReviews from "../components/Home/TotalReviews";

const Home = () => {
  return (
    <div className="">
      <div><Navbar/></div>
     <div className=""> <CarouselBanner/></div>

   
     <div className=""> <TotalReviews/></div>
     <div className=""> <Footer/></div>
    </div>
  );
};

export default Home;
