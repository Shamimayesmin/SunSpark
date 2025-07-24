import React from "react";
import energy from "@/assets/aboutUs/energy.png";
import solar from "@/assets/aboutUs/solar.png";
import promote from "@/assets/aboutUs/promote.png";
import sun from "@/assets/aboutUs/sun.png";
import carbon from "@/assets/aboutUs/carbon.png";
import independent from "@/assets/aboutUs/independent.png";
import Image from "next/image";

const Vision = () => {
  const items = [
    {
      id: 1,
      title: "Accelerating Renewable Energy",
      description:
        "Our primary goal is to accelerate the adoption of renewable energy on a global scale. By offering cutting-edge solar technologies and customized solutions, we strive to make solar energy accessible and affordable for individuals, businesses, and communities worldwide.",
    },
    {
      id: 2,
      title: "Creating Energy Independence",
      description:
        "We believe in energy independence for all. Our vision is to liberate our customers from the constraints of traditional energy sources and enable them to generate clean, sustainable power. Our solutions aim to empower individuals and organizations to take control of their energy future.",
    },
    {
      id: 3,
      title: "Driving Environmental Stewardship",
      description:
        "We are deeply committed to environmental stewardship. Our vision is to significantly reduce carbon emissions and combat climate change by promoting the widespread adoption of solar energy. By harnessing the sun's power, we actively contribute to preserving the planet for future generations.",
    },
    {
      id: 4,
      title: "Fostering Social and Economic Impact",
      description:
        "Solar-PVI is driven by the belief that renewable energy can bring positive social and economic impact. Through local job creation and community engagement, we aim to drive economic growth while enhancing the quality of life for people worldwide.",
    },
    {
      id: 5,
      title: "Pioneering Innovation and Excellence",
      description:
        "Our primary goal is to accelerate the adoption of renewable energy on a global scale. By offering cutting-edge solar technologies and customized solutions, we strive to make solar energy accessible and affordable for individuals, businesses, and communities worldwide.",
    },
    {
      id: 6,
      title: "Together, Towards a Brighter Future",
      description:
        "As we work towards realizing our vision, we invite individuals, businesses, and governments to partner with us in building a brighter, more sustainable world. With Solar-PVI as your trusted renewable energy partner, together, we can shape a cleaner, more prosperous future for the planet and its inhabitants.",
    },
  ];

  return (
    <div className="bg-[#FFFDF9] lg:py-20 py-10">
      <div className="lg:max-w-screen-xl mx-auto px-4 lg:px-0 ">
        <h1 className="text-[#252D3A] text-base lg:text-2xl font-bold text-center">
          OUR VISION
        </h1>
        <h1 className="text-[#133366] text-xl lg:text-4xl font-bold text-center mt-3 lg:px-36">
          We are a visionary team, fueled by innovation and committed to
          pioneering continuous power solutions for a more sustainable and
          radiant tomorrow.
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-y-7 lg:gap-x-10 lg:px-20">
          {items.map((item: any) => {
            console.log(item);
            return (
              <div className=" " key={item.id}>
                <h1 className="text-[#153870] text-base font-bold py-3">
                  {item.title}
                </h1>
                <p className="text-sm text-[#343F52]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vision;
