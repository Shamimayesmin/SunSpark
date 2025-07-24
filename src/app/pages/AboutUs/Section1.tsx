import React from "react";
import img from "../../../assets/aboutUs/section1.png";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:py-20 py-10 px-4 lg:px-0">
      <div className="lg:flex justify-between items-center gap-20">
        <div className="lg:w-1/2">
          <h1 className="text-[#343F52] text-xl lg:text-4xl font-bold lg:pb-10 pb-5 ">
            Want to know about us?
          </h1>
          <p className="text-sm lg:text-base text-[#343F52]">
            With a strong foothold in both Europe and Asia, Solar-PVI brings
            unparalleled expertise and experience to the renewable energy
            landscape. As a leading solar power panel company, we are committed
            to providing sustainable energy solutions that transform the way we
            power our world. With our cutting-edge technology and expertise, we
            strive to revolutionize the renewable energy industry and create a
            cleaner, greener future for generations to come.
          </p>
        </div>
        <div className="mt-10 lg:mt-0">
          <Image className="rounded-2xl" src={img} alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default Section1;
