import Link from "next/link";
import React from "react";

const SaveMoney = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto bg-[#2563EA] rounded-2xl lg:my-20 my-10 flex flex-col justify-center items-center lg:p-16 p-8">
      <p className="lg:text-base text-sm text-white font-bold pb-4">GET IN TOUCH</p>
      <h1 className="text-[11px] lg:text-4xl font-bold text-white text-center">
        Save Money, Save the Planet with Solar!
      </h1>
      <p className="text-[#E9EBF8] lg:text-base text-xs text-center lg:max-w-screen-md py-3 lg:p-7">
        Request a personalized quote tailored to your specific energy needs and
        requirements. Our team will assess your location, energy consumption,
        and goals to provide you with a detailed quote that outlines the cost,
        savings, and benefits of going solar.
      </p>
      <Link href="\#contact">
        {" "}
        <button className="btn bg-[#FEAC03] border-none hover:bg-[#E79D03] text-white text-[8px] lg:text-base font-medium btn-xs lg:btn-md">
          Send a Message
        </button>
      </Link>

      <span
        className="absolute lg:-top-28 -top-16 lg:-left-20 -left-14 lg:h-60 h-32 lg:w-60 w-32 bg-white rounded-full"
        style={{
          maskImage:
            "radial-gradient(circle at center, transparent 68%, white 70%)",
        }}
      ></span>
      <span
        className="absolute lg:-bottom-32 -bottom-14 lg:-right-20 -right-10 lg:h-56 h-28 lg:w-56 w-28 bg-white rounded-full hidden lg:block"
        style={{
          maskImage:
            "radial-gradient(circle at center, transparent 68%, white 70%)",
        }}
      ></span>
    </div>
  );
};

export default SaveMoney;
