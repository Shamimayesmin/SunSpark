import React from "react";
import img1 from "@/assets/blog/Rectangle 2.jpg";
import img2 from "@/assets/blog/Rectangle 4.png";
import img3 from "@/assets/blog/Rectangle 6.png";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  const blogData = [
    {
      id: 1,
      name: "SOLAR PANEL",
      title: "What Happens to Solar Panels When It's Cloudy or Raining?",
      image: img1,

      date: "Nov 13, 2023",
    },
    {
      id: 2,
      name: "SUSTAINABLITY",
      title: "10 Compelling Reasons to Install Solar Panels for Your Home",
      image: img2,
      date: "Nov 13, 2023",
    },
    {
      id: 3,
      name: "SOLUTIONS",
      title:
        "Exploring the Main Types of Solar Cells: A Diverse Array of Sustainable ",
      image: img3,
      date: "Nov 13, 2023",
    },
  ];

  return (
    <div className="lg:max-w-screen-xl mx-auto lg:py-20 bg-[#FFFFFF]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#133366] text-sm font-medium mb-2">
            Recent Articles
          </p>
          <h1 className="text-xl lg:text-3xl text-[#000000] font-bold">Read All News</h1>
        </div>
        <Link href="/posts/blog">
          <button className="btn bg-[#FEAC03] hover:bg-[#E79D03] border-none text-[8px] lg:text-base btn-xs lg:btn-md  text-white">
            View All
          </button>
        </Link>
      </div>
      <div
        id="blog-card-content"
        className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-3"
      >
        {blogData?.map((item, index) => {
          return (
            <div className="relative">
              <article
                key={index}
                className="flex flex-col mt-10 bg-[#FFFFFF] rounded-lg h-[450px] shadow-md"
              >
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <Image
                    alt=""
                    className="object-cover w-full h-52  rounded-t-lg"
                    src={item?.image}
                  />
                </a>
                <div className="px-6">
                  <h3 className="flex-1 py-4 text-2xl font-semibold leading-snug text-[#121212]">
                    {item?.title}
                  </h3>
                  <p className="text-sm text-[#133366] font-medium">
                    {item?.date}
                  </p>
                  <div className="absolute top-48 left-5 text-[#133366] bg-white px-4 py-1 rounded-md text-[14px]">
                    <h4>SOLAR PANEL</h4>
                  </div>
                  <Link href={`/posts/${item?.id}`}>
                    <button className="btn bg-[#153870] hover:bg-[#016B90] text-white mt-5">
                      Read More
                    </button>
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
