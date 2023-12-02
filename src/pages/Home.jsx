import React from "react";
import Navbar from "../components/Home/Navbar";
import CarouselBanner from "../components/Home/CarouselBanner";
import AboutProject from "../components/Home/AboutProject";
import Footer from "../components/Home/Footer";
import HelpOther from "../components/Home/HelpOther";
import TotalSection from "../components/Home/TotalSection";
import ContactUs from "../components/Home/ContactUs";

const Home = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="">
        {" "}
        <CarouselBanner />
      </div>
      <div className="">
        {" "}
        <AboutProject />
      </div>
      <div className="">
        {" "}
        <TotalSection />
      </div>

      <div className="">
        <HelpOther />
      </div>
      <div className="">
        <ContactUs />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
