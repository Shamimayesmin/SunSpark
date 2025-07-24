import React from "react";
import img from "../../../assets/benefit/environment.png";
import Image from "next/image";

const Card2 = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-screen-xl mx-auto lg:py-20 py-10 lg:px-0 px-4 bg-[#FFFDF9]">
        <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-20 gap-7">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-[#343F52] lg:text-4xl text-lg font-bold lg:pb-10 pb-5">
              Environmental Impact: <br /> Powering a Greener Future with
              Solar-PVI
            </h1>
            <button className="btn bg-[#153870] hover:bg-[#016B90] text-white  text-[8px] lg:text-base btn-sm lg:btn-md">
              Learn More
            </button>
          </div>
          <div>
            <Image
              className="rounded-2xl lg:w-[518px]] lg:h-[431px]"
              src={img}
              alt=""
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
