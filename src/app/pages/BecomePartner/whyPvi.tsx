import img1 from "@/assets/becomePartner/Frame (1).png";
import img2 from "@/assets/becomePartner/Frame (2).png";
import img3 from "@/assets/becomePartner/Frame (3).png";
import img4 from "@/assets/becomePartner/Frame (4).png";
import img5 from "@/assets/becomePartner/Frame (5).png";

import Image from "next/image";

const WhyPvi = () => {
  const pviData = [
    {
      id: 1,
      title: "Reputable Brand",
      message:
        "Align your business with a trusted and established brand in the solar industry.",
      image: img1,
      backgroundColor: "#11CB011F",
    },
    {
      id: 2,
      title: "Expanded Reach",
      message:
        "Access a broader customer base and leverage our extensive network.",
      image: img2,
      backgroundColor: "#FEF5E0",
    },
    {
      id: 3,
      title: "Ongoing Support",
      message: "Benefit from our expertise, training, and continuous support.",
      image: img3,
      backgroundColor: "#FEE6E0",
    },
    {
      id: 4,
      title: "Quality Products",
      message: "Offer your customers high-quality solar panels and equipment.",
      image: img4,
      backgroundColor: "#ECE0FE",
    },
    {
      id: 5,
      title: "Sustainable Future",
      message:
        "Together, let's drive the transition to renewable energy and create a cleaner, greener world.",
      image: img5,
      backgroundColor: "#FEF1E0",
    },
  ];

  return (
    <div className="lg:mt-[100px] mt-10 lg:px-28 px-4 pb-10 lg:pb-[100px]">
      <h1 className="lg:text-[36px] text-xl font-bold lg:mb-14 mb-7 text-[#343F52]">
        Why Partner with Solar-PVI?
      </h1>
      <div className="grid grid-cols-1 lg:gap-10 gap-5 lg:grid-cols-2">
        {pviData.map((item, index) => {
          return (
            <div
              key={item.id}
              className="flex items-center shadow-md rounded-md"
            >
              <div
                className="px-5 py-8 lg:py-10 rounded-l-lg"
                style={{ backgroundColor: item.backgroundColor }}
              >
                <Image className="" src={item?.image} alt=""></Image>
              </div>
              {/* <Image
                className="lg:h-[130px] h-[80px] lg:w-[100px] w-16 lg:p-9 p-5"
                style={{ backgroundColor: item.backgroundColor }}
                src={item?.image}
                alt="Icon"
              /> */}

              <div className="px-5 py-3 bg-[#FFFFFF]">
                <h3 className="lg:text-[16px] text-sm font-bold text-[#343F52]">
                  {item?.title}
                </h3>
                <p className="lg:text-[16px] text-xs mt-2 text-[#343F52] ">
                  {item?.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyPvi;
