import React from "react";
import img from "../../../../assets/solution/home.png";
import Image from "next/image";

const Charger = () => {
  return (
    <div className="lg:max-w-screen-xl mx-auto py-10 lg:py-20 px-4 lg:px-0">
      <div className="lg:flex justify-between  gap-10">
        <div className="lg:w-1/2">
          <h1 className="text-xl lg:text-3xl text-[#343F52] font-bold">
            What Is an EV Charger?
          </h1>
          <p className="text-[#3B3C4A] text-xs lg:text-xl py-5">
            Recharging an electric vehicle (EV) is known as EV charging. EVs are
            powered by electric motors and energy that is stored in rechargeable
            batteries. Electricity powers the electric motors of electric
            vehicles, just way conventional vehicles run on petrol or diesel
            fuel. Both electric vehicles and plug-in hybrid electric vehicles
            require an EV charger to keep the battery full, just like any
            chargeable device or electronic.{" "}
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
  );
};

export default Charger;
