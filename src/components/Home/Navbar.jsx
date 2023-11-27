import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import navEarthLogo from "../../assets/icons/navEarthLogo.png";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  //navItems array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About Us", path: "aboutUs" },
    { link: "Blood", path: "blood" },
    { link: "Donor", path: "donor" },
    { link: "Campaign", path: "campaign" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <header className="w-full h-20 bg-white md:bg-transparent fixed top-0 left-0 right-0 border-b border-brandPrimary">
      <nav
        className={`py-4 lg:px-14 px-14 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <div className=" border-[1px] border-black p-1">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <div className="">
                <img
                  src={logo}
                  alt="logo"
                  className="w-10 inline-block items-center"
                />
              </div>
              <span className="text-[#263238]">Demo</span>
            </a>
          </div>

          {/* nav itmes for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-gray90 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
            <div className="space-x-0 hidden -mt-2 lg:flex items-center">
              <a
                href="/"
                className="hidden lg:flex items-center hover:text-gray-900"
              >
                <button className="bg-brandPrimary rounded-full text-white py-2 px-4 transition-all duration-300">
                  Search Donor
                </button>
              </a>
            </div>
          </ul>

          {/* button's for large devices */}

          <div className="space-x-6 hidden lg:flex items-center -mt-4">
            <div className="rounded-full">
              <img
                src={navEarthLogo}
                alt="logo"
                className="w-6 inline-block items-center"
              />
            </div>
            <div>
              <div className="w-full bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group">
                {/* Home Icons */}
                <div className="flex flex-col gap-1.5 overflow-hidden">
                  <span className="w-8 h-[2px] bg-textGrey inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-brandPrimary"></span>
                  <span className="w-8 h-[2px] bg-textGrey inline-block group-hover group-hover:bg-brandPrimary duration-300"></span>
                  <span className="w-8 h-[2px] bg-textGrey inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-brandPrimary"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu button for only mobile device */}
          <div className="md:hidden">
            <button
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16  py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-gray90 hover:text-brandPrimary first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
