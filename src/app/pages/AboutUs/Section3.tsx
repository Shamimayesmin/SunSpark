import React from "react";
import img from "../../../assets/aboutUs/section3.png";
import Image from "next/image";
import Link from "next/link";

const Section3 = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 lg:py-20 px-4 lg:px-0">
      <div className="lg:flex justify-between items-center gap-20">
        <div className="lg:w-1/2">
          <h1 className="text-[#343F52] text-xl lg:text-4xl font-bold  lg:pb-10 pb-5 ">
          Comprehensive Solutions
          </h1>
          <p className="text-sm lg:text-base text-[#627A9F] pb-10">
          Whether you are a homeowner, business owner, or part of a large-scale industrial project, we offer a comprehensive range of solar energy solutions to cater to diverse requirements. From solar panels and energy storage solutions to solar-powered water pumps and solar streetlights, we have the right solution for you.
          </p>
          <Link href="/pages/E-Commerce">
            <button className="btn bg-[#FEAC03] hover:bg-[#E79D03] border-none text-white text-[8px] lg:text-base btn-sm lg:btn-md">
              View our products
            </button>
          </Link>
        </div>
        <div className="mt-10 lg:mt-0">
          <Image className="rounded-2xl" src={img} alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default Section3;
