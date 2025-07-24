import React from "react";
import heroImage from "../../assets/HeroImage.png";
import Navbar from "../common/Navbar";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative lg:h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-40 ">
        <Navbar
          textColor="#FFFFFF"
          buttonBorderColor="#FEAC03"
          buttonColor="transparent"
          buttonTextColor="#FEAC03"
          buttonHoverColor="#E79D03"
          buttonHoverTextColor="#FFFFFF"
          dropdownBgColor="#64748b"
        />
      </div>
      <div className="relative  flex flex-col items-center px-4 lg:px-0 ">
        <h1 className="text-2xl lg:text-7xl font-bold text-[#FEAC03] text-center lg:mt-10">
          Revolutionizing <br />{" "}
          <span className="text-white">Solar Energy Solutions</span>
        </h1>
        <p className="text-base lg:text-2xl text-white text-center mt-5 lg:mt-10 lg:w-[600px]">
          Harness the power of the sun with Solar-PVI's innovative solar{" "}
          panel solutions
        </p>
        <div className="flex justify-center mt-8 mb-16 lg:mb-0 lg:mt-16 gap-5">
          <Link href="/pages/E-Commerce" className="btn bg-[#FEAC03] border-none hover:bg-[#E79D03] text-white font-medium text-[8px] lg:text-base btn-sm lg:btn-md ">
            View Product
          </Link>
          <Link href="/pages/solution/evCharging" className="btn bg-transparent border border-[#FEAC03] text-[#FEAC03] hover:bg-[#E79D03] hover:text-white hover:border-none text-[8px] lg:text-base btn-sm lg:btn-md  font-medium">
            Our Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
