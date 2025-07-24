import Link from "next/link";
import React from "react";

const SaveMoney = () => {
  return (
    <div className="lg:pt-0">
      <div className="relative lg:max-w-screen-xl mx-auto bg-[#2563EA] rounded-2xl my-5 flex flex-col justify-center items-center p-16">
        <h1 className="text-[11px] lg:text-4xl font-bold text-white text-center">
          Save Money, Save the Planet <br /> with Solar!
        </h1>
        <p className="text-[#E9EBF8] text-[8px] lg:text-base  text-center max-w-screen-md py-3 lg:p-7">
          Contact us today for a consultation and discover how Solar-PVI can
          help you embrace the power of the sun and embark on a journey toward a
          brighter, more sustainable future. Let's shine a light on renewable
          energy together!
        </p>

        <Link href="\#contact">
          <button className="btn bg-[#FEAC03] border-none hover:bg-[#E79D03] text-white text-[8px] lg:text-base font-medium btn-xs lg:btn-md">
            Contact Us
          </button>
        </Link>
        <span
          className="absolute  -top-28 -left-32 lg:-left-20  h-60 w-60 bg-white rounded-full"
          style={{
            maskImage:
              "radial-gradient(circle at center, transparent 68%, white 70%)",
          }}
        ></span>
        <span
          className="hidden lg:flex absolute -bottom-32 -right-20 h-56 w-56 bg-white rounded-full"
          style={{
            maskImage:
              "radial-gradient(circle at center, transparent 68%, white 70%)",
          }}
        ></span>
      </div>
    </div>
  );
};

export default SaveMoney;
