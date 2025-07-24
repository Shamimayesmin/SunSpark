import React from "react";
import img from "../../assets/companyReview/companyReview.png";
import Image from "next/image";
import solar from "../../assets/companyReview/solar.png";
import sun from "../../assets/companyReview/sun.png";
import building from "../../assets/companyReview/building.png";
import leaf from "../../assets/companyReview/leaf.png";
import handshake from "../../assets/companyReview/handshake.png";

const CompanyOverview = () => {
  return (
    <div className="bg-[#F9FDFF]">
      <div className="lg:max-w-screen-xl mx-auto py-10 px-4 lg:px-0 lg:py-20 ">
        <div>
          <h4 className="text-[#252D3A] text-base lg:text-2xl font-bold text-center">
            COMPANY OVERVIEW
          </h4>
          <h1 className="text-xl lg:text-4xl text-[#133366] font-bold text-center mt-4 ">
            Innovating Renewable Energy Solutions for a Greener Future
          </h1>
        </div>
        <div className="hero lg:mt-16 mt-10">
          <div className=" lg:flex lg:gap-20 ">
            <div
              className="overflow-y-auto  h-[500px] scrollbar"
              style={{ scrollbarColor: "#133366 #f1f1f1" }}
            >
              <div className="flex items-center mb-5 bg-white lg:mr-4 rounded-r-lg shadow-md">
                <div
                  className="px-5 py-4 lg:py-10 rounded-l-lg"
                  style={{ backgroundColor: "rgba(17, 203, 1, 0.12)" }}
                >
                  <Image className="lg:h-16  lg:w-28" src={solar} alt=""></Image>
                </div>
                <p className="text-[#343F52] text-[8px] lg:text-base px-4 lg:px-10">
                  We are leading in innovative solar panel solutions, driving
                  the transition to renewable energy.
                </p>
              </div>
              <div className="flex items-center mb-5 bg-white lg:mr-4 rounded-r-lg shadow-md">
                <div
                  className="px-5 py-4 lg:py-10 rounded-l-lg"
                  style={{ backgroundColor: "rgba(254, 172, 3, 0.12)" }}
                >
                  <Image className="lg:h-18 lg:w-32" src={sun} alt=""></Image>
                </div>
                <p className="text-[#343F52] text-[8px] lg:text-base px-4 lg:px-10">
                  We prioritise quality, customer satisfaction, and empower
                  adoption of clean, sustainable energy sources.
                </p>
              </div>
              <div className="flex items-center mb-5 bg-white lg:mr-4 rounded-r-lg shadow-md">
                <div
                  className="px-5 py-4 lg:py-10 rounded-l-lg"
                  style={{ backgroundColor: "rgba(254, 48, 3, 0.12)" }}
                >
                  <Image className="lg:h-16 lg:w-28" src={building} alt=""></Image>
                </div>
                <p className="text-[#343F52] text-[8px] lg:text-base px-4 lg:px-10">
                  Our experts deliver efficient and reliable solar panels for
                  residential, commercial, and utility-scale installations.
                </p>
              </div>
              <div className="flex items-center mb-5 bg-white lg:mr-4 rounded-r-lg shadow-md">
                <div
                  className="px-5 py-4 lg:py-10 rounded-l-lg"
                  style={{ backgroundColor: "rgba(98, 3, 254, 0.12)" }}
                >
                  <Image className="w-12 h-8 lg:h-16 lg:w-28" src={leaf} alt=""></Image>
                </div>
                <p className="text-[#343F52] text-[8px] lg:text-base px-4 lg:px-10">
                  We optimise energy production while reducing emissions to
                  create a brighter and cleaner future.
                </p>
              </div>
              <div className="flex items-center mb-5 bg-white lg:mr-4 rounded-r-lg shadow-md">
                <div
                  className="px-5 py-4 lg:py-10 rounded-l-lg"
                  style={{ backgroundColor: "rgba(254, 139, 3, 0.12)" }}
                >
                  <Image className="lg:h-20 lg:w-28" src={handshake} alt=""></Image>
                </div>
                <p className="text-[#343F52] text-[8px] lg:text-base px-4 lg:px-10">
                  Join us in embracing renewable energy and building a world,
                  where we can make a sustainable impact.
                </p>
              </div>
            </div>
            <Image src={img} alt="" className="rounded-lg w-full lg:w-1/2 mt-5 lg:mt-0"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
