import React from "react";
import img from "../../../../assets/solution/solutionCar.jpg";

const EvChargingHeroSection = () => {
  return (
    <div className="relative h-[200px] lg:h-[350px]">
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
      <div className="relative z-10 lg:max-w-screen-xl lg:py-28 mx-auto px-10 lg:px-0  py-16">
        <h1 className="text-base lg:text-5xl font-bold text-white ">
          Charging Forward: Transforming Tomorrow's <br /> Mobility Today.
        </h1>
      </div>
    </div>
  );
};

export default EvChargingHeroSection;
