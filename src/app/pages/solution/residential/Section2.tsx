import React from "react";
import img from "../../../../assets/solution/solartree.png";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className="bg-[#FFFDF9]">
      <div className="lg:max-w-screen-xl mx-auto lg:py-20 py-10 px-4 lg:px-0">
        <div className="lg:flex flex-row-reverse justify-between items-center gap-20">
          <div className="lg:w-1/2">
            <h1 className="text-[#343F52] text-xl lg:text-4xl font-bold py-10 pr-10">
              Elevate Your Lifestyle: Transforming Lives with Our 3.5KW Off-Grid
              Solar Solution
            </h1>
            <button className="btn bg-[#153870] hover:bg-[#016B90] text-white text-[8px] lg:text-base btn-sm lg:btn-md">
              Learn More
            </button>
          </div>
          <div className="mt-10 lg:mt-0">
            <Image src={img} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
