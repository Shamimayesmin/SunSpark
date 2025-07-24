import React from "react";
import energy from "@/assets/aboutUs/energy.png";
import solar from "@/assets/aboutUs/solar.png";
import promote from "@/assets/aboutUs/promote.png";
import sun from "@/assets/aboutUs/sun.png";
import carbon from "@/assets/aboutUs/carbon.png";
import independent from "@/assets/aboutUs/independent.png";
import Image from "next/image";

const Mission = () => {
  const items = [
    {
      id: 1,
      title: "Renewable Energy Revolution",
      description:
        "As a frontrunner in the solar industry, we strive to stay at the forefront of technological advancements, providing cutting-edge solutions to our customers.",
      image: energy,
    },
    {
      id: 2,
      title: "Harnessing the Sun's Potential",
      description:
        "Our mission is to harness the boundless potential of solar energy and convert it into a clean and sustainable power source for a brighter future.",
      image: sun,
    },
    {
      id: 3,
      title: "Promoting Sustainability",
      description:
        "We are committed to promoting a sustainable future by encouraging the adoption of solar energy and contributing to a cleaner, greener environment.",
      image: promote,
    },
    {
      id: 4,
      title: "Energy Independence",
      description:
        "We strive to empower individuals and organizations with energy independence, allowing them to generate their own power and rely less on conventional energy sources.",
      image: independent,
    },
    {
      id: 5,
      title: "Inspiring a Solar Revolution",
      description:
        "Our ultimate mission is to inspire a solar revolution, where solar energy becomes the primary choice for powering our world, leading to a more sustainable and prosperous planet.",
      image: solar,
    },
    {
      id: 6,
      title: "Reducing Carbon Footprint",
      description:
        "By promoting solar adoption, we aim to reduce carbon emissions, combat climate change, and protect the environment for future generations.",
      image: carbon,
    },
  ];

  return (
    <div className="bg-[#F9FDFF]  ">
      <div className="lg:max-w-screen-xl mx-auto px-4 lg:px-0 mt-5 lg:mt-0 ">
        <h1 className="text-[#252D3A] text-base lg:text-2xl font-bold text-center">
          OUR MISSION
        </h1>
        <h1 className="text-[#133366] text-xl lg:text-4xl font-bold text-center mt-3 lg:w-[700px] mx-auto">
          We believe in the right collaboration to save the earth for its
          people
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-20 gap-y-5 lg:gap-y-20 gap-x-5 lg:gap-x-10 text-center">
          {items.map((item: any) => {
            console.log(item);
            return (
              <div className=" flex flex-col items-center bg-[#FFF] p-2 lg:p-10 rounded-xl " key={item.id}>
                <Image src={item.image} alt=""></Image>
                <h1 className="text-[#153870] text-sm lg:text-base font-bold py-3">
                  {item.title}
                </h1>
                <p className="text-xs lg:text-sm text-[#343F52]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mission;
