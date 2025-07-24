import React from "react";
import energy from "../../../assets/benefit/energy.png";
import air from "../../../assets/benefit/air.png"
import low from "../../../assets/benefit/low.png"
import long from "../../../assets/benefit/long.png"
import outage from "../../../assets/benefit/outage.png"
import carbon from "../../../assets/benefit/carbon.png"
import bill from "../../../assets/benefit/bill.png"
import water from "../../../assets/benefit/water.png"

import Image from "next/image";

const SolarPVI = () => {
  const items = [
    { img:  energy , name: "Sustainable Energy Source" },
    { img:  air , name: "Clean Air Quality" },
    { img: low , name: "Low Operating Costs" },
    { img: long , name: "Long Term Investment" },
    { img: outage , name: "Resilience to Power Outages" },
    { img: carbon , name: "Reduced Carbon Footprint" },
    { img: bill , name: "Lower Energy Bills" },
    { img: water , name: "Water Conservation" },
  ];
  return (
    <div className="max-w-screen-xl mx-auto lg:py-20 py-9 lg:px-0 px-4">
      <h1 className="text-[#343F52] font-bold lg:text-4xl text-lg lg:text-start text-center">Why Solar-PVI</h1>
      <p className="text-[#3B3C4A] lg:text-2xl text-sm py-4">
        Solar energy solutions offer a sustainable, clean, and cost-effective
        alternative to traditional energy sources, benefiting both individuals
        and the planet as a whole.
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-3 lg:mt-10 mt-5">
        {items.map((item, index) => (
          <div key={index} className="bg-[#E6F5FA]  rounded-xl flex flex-col justify-center items-center lg:px-8 px-4 lg:py-14 py-5 lg:gap-4 gap-3">
            <Image className="lg:h-[85px] h-[42px] lg:w-[85px] w-[42px]" src={item.img} alt=""></Image>
            <h1 className="text-[#343F52] lg:text-base text-[10px] font-bold">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarPVI;
