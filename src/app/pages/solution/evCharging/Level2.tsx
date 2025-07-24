import React from "react";
import img from "../../../../assets/solution/Level2Car.png";
import Image from "next/image";

const Level2 = () => {
  return (
    <div>
      <div className="my-10">
        <div className="lg:flex justify-between items-center gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-xl lg:text-3xl text-[#343F52] font-bold">
            Level 2 EV Charging
            </h1>
            <p className="text-[#3B3C4A] text-sm lg:text-xl py-8">
            Level 2 can charge your EV at home or a commercial charging station, providing 2-30 miles of range per hour of charge. A specialized 240V splitter can save you hundreds of dollars on installing a Level 2 home charging solution. Level 2 is available for residential use and at most commercial (public) charging stations
            </p>
            <button className="btn bg-[#153870] hover:bg-[#016B90] text-white text-[8px] lg:text-base btn-sm lg:btn-md">
              Learn More
            </button>
          </div>
          <div className="mt-5 lg:mt-0">
            <Image src={img} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level2;
