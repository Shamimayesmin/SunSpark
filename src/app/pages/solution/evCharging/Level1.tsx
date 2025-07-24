import React from "react";
import img from "../../../../assets/solution/Level1car.png";
import Image from "next/image";

const Level1 = () => {
  return (
    <div className="my-10">
      <div className="lg:flex justify-between items-center gap-10">
        <div className="lg:w-1/2">
          <h1 className="text-xl lg:text-3xl text-[#343F52] font-bold">
          Level 1 EV Charging
          </h1>
          <p className="text-[#3B3C4A] text-sm lg:text-xl py-8">
          Level 1 charging provides 4 miles per hour and can prepare your EV battery for basic daily use. Level 1 on the EV charging spectrum is a regular household outlet (120 volts) coupled with an Electric Vehicle Supply Equipment (EVSE)
          </p>
          <button className="btn bg-[#153870] hover:bg-[#016B90] text-white  text-[8px] lg:text-base btn-sm lg:btn-md">
            Learn More
          </button>
        </div>
        <div className="mt-5 lg:mt-0">
          <Image src={img} alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default Level1;
