import React from "react";
import img from "../../../assets/aboutUs/section4.png";
import Image from "next/image";
import Link from "next/link";

const Section4 = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 lg:py-32 px-4 lg:px-0">
      <div className="lg:flex flex-row-reverse justify-between items-center gap-20">
        <div className="lg:w-1/2">
          <h1 className="text-[#343F52] text-xl lg:text-4xl font-bold  lg:pb-10 pb-5">
            A Cleaner, Greener Tomorrow
          </h1>
          <p className="text-sm lg:text-base text-[#627A9F] pb-10">
            As responsible corporate citizens, we believe in giving back to
            society and fostering a sustainable future for generations to come.
            By choosing Solar-PVI, you are contributing to the global efforts to
            combat climate change and protect our planet. Together, let's create
            a world where renewable energy powers our lives and preserves the
            planet for generations to come.
          </p>
          <Link href="/#contact">
            <button className="btn bg-[#FEAC03] hover:bg-[#E79D03] border-none text-white text-[8px] lg:text-base btn-sm lg:btn-md">
              Send Message
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

export default Section4;
