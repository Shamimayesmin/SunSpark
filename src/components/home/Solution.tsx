import React from "react";
import charging from "../../assets/solution/charging.png";
import residential from "../../assets/solution/residential.png";
import commercial from "../../assets/solution/commercial.png";
import car from "../../assets/solution/car.png";
import frame2 from "../../assets/solution/frame2.png";
import frame3 from "../../assets/solution/frame3.png";
import Image from "next/image";
import Link from "next/link";
const Solution = () => {
  return (
    <div className="bg-[#FFFDF9]">
      <div className="lg:max-w-screen-xl mx-auto pt-8 px-4 lg:px-0 lg:py-20 ">
        <div>
          <h4 className="text-[#252D3A] text-base lg:text-2xl font-bold text-center ">SOLUTIONS</h4>
          <h1 className="text-xl lg:text-4xl text-[#133366] font-bold text-center mt-4">
            Transforming Energy with Solar Panels
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-10">
          <div className="relative">
            <div className="group">
              <Image
                src={commercial}
                alt=""
                className="w-full h-auto group-hover:scale-102 transition-transform duration-300"
              />
              <h1 className="text-[#343F52] text-2xl font-bold text-center -mt-6">
                EV CHARGING
              </h1>
              <div className="absolute bottom-0 left-0 right-0 bg-transparent opacity-0 transition-all duration-1000 transform translate-y-40 -translate-x-0 group-hover:bg-white group-hover:opacity-100 group-hover:translate-y-0 rounded-xl overflow-hidden shadow-md">
                <div className=" flex justify-center items-center mt-10">
                  <span
                    className="rounded-lg w-20 h-20 flex justify-center items-center"
                    style={{ backgroundColor: "rgba(17, 203, 1, 0.12)" }}
                  >
                    <Image className="py-4 px-2  w-14" src={car} alt=""></Image>
                  </span>
                </div>
                <h1 className="text-[#343F52] text-2xl font-bold text-center mt-7">
                  EV CHARGING
                </h1>
                <p className="text-[#343F52] text-center text-sm p-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <span className="flex justify-center items-center  mt-3 mb-10">
                  <Link href="/pages/solution/evCharging" className="btn bg-[#153870] hover:bg-[#016B90] text-white">
                    Learn More
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="group">
              <Image
                src={residential}
                alt=""
                className="w-full h-auto group-hover:scale-102 transition-transform duration-300"
              />
              <h1 className="text-[#343F52] text-2xl font-bold text-center -mt-6">
                RESIDENTIAL
              </h1>
              <div
                className="absolute  bottom-0 left-0 right-0 bg-transparent opacity-0 transition-all duration-1000 transform translate-y-40 -translate-x-0 group-hover:bg-white group-hover:opacity-100 group-hover:translate-y-0 rounded-xl overflow-hidden shadow-md"
              >
                <div className=" flex justify-center items-center mt-10">
                  <span
                    className="rounded-lg w-20 h-20 flex justify-center items-center"
                    style={{ backgroundColor: "rgba(98, 3, 254, 0.12)" }}
                  >
                    <Image
                      className="py-4 px-2  w-14"
                      src={frame2}
                      alt=""
                    ></Image>
                  </span>
                </div>
                <h1 className="text-[#343F52] text-2xl font-bold text-center mt-7">
                  RESIDENTIAL
                </h1>
                <p className="text-[#343F52] text-center text-sm p-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <span className="flex justify-center items-center  mt-3 mb-10">
                  <Link href="/pages/solution/residential" className="btn bg-[#153870] hover:bg-[#016B90] text-white">
                    Learn More
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="group">
              <Image
                src={charging}
                alt=""
                className="w-full h-auto group-hover:scale-102 transition-transform duration-300"
              />
              <h1 className="text-[#343F52] text-2xl font-bold text-center -mt-6">
                COMMERCIAL
              </h1>
              <div className="absolute bottom-0 left-0 right-0 bg-transparent opacity-0 transition-all duration-1000 transform translate-y-40 -translate-x-0 group-hover:bg-white group-hover:opacity-100 group-hover:translate-y-0 rounded-xl overflow-hidden shadow-md">
                <div className="flex justify-center items-center mt-10">
                  <span
                    className="rounded-lg w-20 h-20 flex justify-center items-center"
                    style={{ backgroundColor: "rgba(254, 48, 3, 0.12)" }}
                  >
                    <Image className="py-4 px-2 w-14" src={frame3} alt="" />
                  </span>
                </div>
                <h1 className="text-[#343F52] text-2xl font-bold text-center mt-7">
                  COMMERCIAL
                </h1>
                <p className="text-[#343F52] text-center text-sm p-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <span className="flex justify-center items-center">
                  <Link href="/pages/solution/commercial" className="btn bg-[#153870] hover:bg-[#016B90] text-white mt-3 mb-10">
                    Learn More
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
