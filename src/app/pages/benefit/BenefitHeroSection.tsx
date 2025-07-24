import React from "react";
import img from "../../../assets/solution/solutionCar.jpg";

const BenefitHeroSection = () => {
  return (
    <div className="relative lg:h-[350px] h-[200px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl lg:py-28 py-10 lg:px-0 px-8 mx-auto">
        <h1 className="lg:text-5xl text-base font-bold text-white ">
        Switch to Solar with Solar-PVI and Unlock a <br /> Brighter, Sustainable & Economically Rewarding <br /> Future 
        </h1>
      </div>
    </div>
  );
};

export default BenefitHeroSection;
