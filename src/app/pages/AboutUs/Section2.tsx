import React from "react";
import img from "../../../assets/aboutUs/section2.png";
import Image from "next/image";
import Link from "next/link";

const Section2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 lg:py-20 px-4 lg:px-0">
      <div className="lg:flex flex-row-reverse justify-between items-center gap-20">
        <div className="lg:w-1/2">
          <h1 className="text-[#343F52] text-xl lg:text-4xl font-bold lg:pb-10 pb-5 ">
            Sustainability and Environmental Responsibility
          </h1>
          <p className="text-sm lg:text-base text-[#627A9F] pb-10">
            As a responsible renewable energy company, we are deeply committed
            to sustainability and environmental stewardship. By transitioning to
            solar energy, our clients can significantly reduce greenhouse gas
            emissions, conserve natural resources, and contribute positively to
            combatting climate change.
          </p>
          <Link href="/pages/BecomePartner">
            <button className="btn bg-[#FEAC03] hover:bg-[#E79D03] border-none text-white text-[8px] lg:text-base btn-sm lg:btn-md">
              Become a partner
            </button>
          </Link>
        </div>
        <div className="mt-10 lg:mt-0">
          <Image className="rounded-2xl" src={img} alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default Section2;
