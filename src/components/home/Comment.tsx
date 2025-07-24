// import Image from "next/image";
// import React from "react";
// import solar from "../../assets/products/solarPanel.png";
// import female from "../../assets/comment/female.png";
// import male from "../../assets/comment/male.png";

// const Comment = () => {
//   return (
//     <div className="bg-[#F9FDFF] ">
//       <div className="lg:max-w-screen-xl px-4 lg:px-0 mx-auto mt-10 lg:mt-0 lg:py-20 ">
//         <div className="lg:flex justify-between items-center">
//           <h4 className="text-[#252D3A] text-base lg:text-2xl font-bold text-center lg:text-start">
//             3940+ Happy Landingfolio Users
//           </h4>
//           <h1 className="text-xl lg:text-4xl text-[#133366] font-bold text-center lg:text-end">
//             Don't just take <br />{" "}
//             <span className="text-[#0196CB]">our words</span>
//           </h1>
//         </div>
//         <div className="carousel w-full mt-20 mb-10">
//           <div id="slide1" className="carousel-item  w-full">
//             <div className="lg:flex gap-9">
//               <div className="flex gap-4 lg:gap-7">
//                   <Image src={female} className="rounded-lg" alt=""></Image>
//                 <div className="py-2 lg:py-4">
//                   <div className="rating rating-xs lg:rating-sm">
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                   </div>
//                   <p className="text-[#090914] text-[9px] lg:text-lg font-medium py-2 lg:py-5">
//                     "We love Landingfolio! Our designers were using it for their
//                     projects, so we already knew what kind of design they want."
//                   </p>
//                   <h1 className="text-[#090914] text-[8px] lg:text-base font-semibold">
//                     Jenny Wilson{" "}
//                     <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
//                   </h1>
//                 </div>
//               </div>
//               <div className="hidden lg:flex gap-7">
//                 <Image src={male} alt=""></Image>
//                 <div className="py-4">
//                   <div className="rating rating-sm">
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                   </div>
//                   <p className="text-[#090914] text-lg font-medium py-5">
//                     "We love Landingfolio! Our designers were using it for their
//                     projects, so we already knew what kind of design they want."
//                   </p>
//                   <h1 className="text-[#090914] text-base font-semibold">
//                     Jenny Wilson{" "}
//                     <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute flex justify-center  gap-3 transform translate-y-40 lg:translate-y-72 left-5 right-5">
//               <a href="#slide4" className="btn btn-circle">
//                 ❮
//               </a>
//               <a href="#slide2" className="btn btn-circle">
//                 ❯
//               </a>
//             </div>
//           </div>
//           <div id="slide2" className="carousel-item  w-full">
//             <div className="lg:flex gap-9">
//               <div className="flex gap-7">
//                 <Image src={female} alt=""></Image>
//                 <div className="py-2 lg:py-4">
//                   <div className="rating rating-xs lg:rating-sm">
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                   </div>
//                   <p className="text-[#090914] text-[9px] lg:text-lg font-medium py-2 lg:py-5">
//                     "We love Landingfolio! Our designers were using it for their
//                     projects, so we already knew what kind of design they want."
//                   </p>
//                   <h1 className="text-[#090914] text-[8px] lg:text-base font-semibold">
//                     Jenny Wilson{" "}
//                     <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
//                   </h1>
//                 </div>
//               </div>
//               <div className="hidden lg:flex gap-7">
//                 <Image src={male} alt=""></Image>
//                 <div className="py-4">
//                   <div className="rating rating-sm">
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                   </div>
//                   <p className="text-[#090914] text-lg font-medium py-5">
//                     "We love Landingfolio! Our designers were using it for their
//                     projects, so we already knew what kind of design they want."
//                   </p>
//                   <h1 className="text-[#090914] text-base font-semibold">
//                     Jenny Wilson{" "}
//                     <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute flex justify-center  gap-3 transform translate-y-40 lg:translate-y-72 left-5 right-5 ">
//               <a href="#slide1" className="btn btn-circle">
//                 ❮
//               </a>
//               <a href="#slide3" className="btn btn-circle">
//                 ❯
//               </a>
//             </div>
//           </div>
//           <div id="slide3" className="carousel-item w-full">
//             <div className="lg:flex gap-9">
//               <div className="hidden lg:flex gap-7">
//                 <Image src={female} alt=""></Image>
//                 <div className="py-4">
//                   <div className="rating rating-sm">
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                   </div>
//                   <p className="text-[#090914] text-lg font-medium py-5">
//                     "We love Landingfolio! Our designers were using it for their
//                     projects, so we already knew what kind of design they want."
//                   </p>
//                   <h1 className="text-[#090914] text-base font-semibold">
//                     Jenny Wilson{" "}
//                     <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
//                   </h1>
//                 </div>
//               </div>
//               <div className="flex gap-7">
//                 <Image src={male} alt=""></Image>
//                 <div className="py-2 lg:py-4">
//                   <div className="rating rating-xs lg:rating-sm">
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                   </div>
//                   <p className="text-[#090914] text-[9px] lg:text-lg font-medium py-2 lg:py-5">
//                     "We love Landingfolio! Our designers were using it for their
//                     projects, so we already knew what kind of design they want."
//                   </p>
//                   <h1 className="text-[#090914] text-[8px] lg:text-base font-semibold">
//                     Jenny Wilson{" "}
//                     <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute flex justify-center gap-3 transform translate-y-40 lg:translate-y-72 left-5 right-5">
//               <a href="#slide2" className="btn btn-circle">
//                 ❮
//               </a>
//               <a href="#slide4" className="btn btn-circle">
//                 ❯
//               </a>
//             </div>
//           </div>
//           <div id="slide4" className="carousel-item w-full">
//             <div className="lg:flex gap-9">
//               <div className="hidden lg:flex gap-7">
//                 <Image src={female} alt=""></Image>
//                 <div className="py-4">
//                   <div className="rating rating-sm">
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                   </div>
//                   <p className="text-[#090914] text-lg font-medium py-5">
//                     "We love Landingfolio! Our designers were using it for their
//                     projects, so we already knew what kind of design they want."
//                   </p>
//                   <h1 className="text-[#090914] text-base font-semibold">
//                     Jenny Wilson{" "}
//                     <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
//                   </h1>
//                 </div>
//               </div>
//               <div className="flex gap-7">
//                 <Image src={male} alt=""></Image>
//                 <div className="py-2 lg:py-4">
//                   <div className="rating rating-xs lg:rating-sm">
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                     <input
//                       type="radio"
//                       name="rating-2"
//                       className="mask mask-star-2 bg-[#FEBD35]"
//                       defaultChecked
//                     />
//                   </div>
//                   <p className="text-[#090914] text-[9px] lg:text-lg font-medium py-2 lg:py-5">
//                     "We love Landingfolio! Our designers were using it for their
//                     projects, so we already knew what kind of design they want."
//                   </p>
//                   <h1 className="text-[#090914] text-[8px] lg:text-base font-semibold">
//                     Jenny Wilson{" "}
//                     <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute flex justify-center gap-3 transform translate-y-40 lg:translate-y-72 left-5 right-5 ">
//               <a href="#slide3" className="btn btn-circle bg-white text-[#343F52] border-white hover:bg-white">
//                 ❮
//               </a>
//               <a href="#slide1" className="btn btn-circle bg-white text-[#343F52] border-white hover:bg-white">
//                 ❯
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Comment;

"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import solar from "../../assets/products/solarPanel.png";
import female from "../../assets/comment/female.png";
import male from "../../assets/comment/male.png";

const Comment = () => {
  return (
    <div className="bg-[#F9FDFF] ">
      <div className="lg:max-w-screen-xl px-4 lg:px-0 mx-auto mt-10 lg:mt-0 lg:py-20 ">
        <div >
          {" "}
          <h4 className="text-[#252D3A] text-base lg:text-2xl font-bold text-center">
            3940+ Happy Landingfolio Users
          </h4>
          <h1 className="text-xl lg:text-4xl text-[#133366] font-bold text-center mt-4">
            Don't just take our words
          </h1>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="carousel w-full mt-10 lg:mt-20 mb-10">
              <div id="slide1" className="carousel-item  w-full">
                <div className="lg:flex gap-9">
                  {" "}
                  <div className="flex gap-4 lg:gap-7">
                    <Image src={female} className="rounded-lg" alt=""></Image>
                    <div className="py-2 lg:py-4">
                      <div className="rating rating-xs lg:rating-sm">
                        {" "}
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                      </div>
                      <p className="text-[#090914] text-[9px] lg:text-lg font-medium py-2 lg:py-5">
                        "We love Landingfolio! Our designers were using it for
                        their projects, so we already knew what kind of design
                        they want."
                      </p>
                      <h1 className="text-[#090914] text-[8px] lg:text-base font-semibold">
                        Jenny Wilson{" "}
                        <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
                      </h1>
                    </div>
                  </div>
                  <div className="hidden lg:flex gap-7">
                    <Image src={male} alt=""></Image>
                    <div className="py-4">
                      <div className="rating rating-sm">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                      </div>
                      <p className="text-[#090914] text-lg font-medium py-5">
                        "We love Landingfolio! Our designers were using it for
                        their projects, so we already knew what kind of design
                        they want."
                      </p>
                      <h1 className="text-[#090914] text-base font-semibold">
                        Jenny Wilson{" "}
                        <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              id="slide3"
              className="carousel-item w-full mt-10 lg:mt-20 mb-10"
            >
              <div className="lg:flex gap-9">
                <div className="hidden lg:flex gap-7">
                  <Image src={female} alt=""></Image>
                  <div className="py-4">
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                    </div>
                    <p className="text-[#090914] text-lg font-medium py-5">
                      "We love Landingfolio! Our designers were using it for
                      their projects, so we already knew what kind of design
                      they want."
                    </p>
                    <h1 className="text-[#090914] text-base font-semibold">
                      Jenny Wilson{" "}
                      <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex gap-7">
                  <Image src={male} alt=""></Image>
                  <div className="py-2 lg:py-4">
                    <div className="rating rating-xs lg:rating-sm">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                    </div>
                    <p className="text-[#090914] text-[9px] lg:text-lg font-medium py-2 lg:py-5">
                      "We love Landingfolio! Our designers were using it for
                      their projects, so we already knew what kind of design
                      they want."
                    </p>
                    <h1 className="text-[#090914] text-[8px] lg:text-base font-semibold">
                      Jenny Wilson{" "}
                      <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel w-full mt-10 lg:mt-20 mb-10">
              <div id="slide1" className="carousel-item  w-full">
                <div className="lg:flex gap-9">
                  {" "}
                  <div className="flex gap-4 lg:gap-7">
                    <Image src={female} className="rounded-lg" alt=""></Image>
                    <div className="py-2 lg:py-4">
                      <div className="rating rating-xs lg:rating-sm">
                        {" "}
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                      </div>
                      <p className="text-[#090914] text-[9px] lg:text-lg font-medium py-2 lg:py-5">
                        "We love Landingfolio! Our designers were using it for
                        their projects, so we already knew what kind of design
                        they want."
                      </p>
                      <h1 className="text-[#090914] text-[8px] lg:text-base font-semibold">
                        Jenny Wilson{" "}
                        <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
                      </h1>
                    </div>
                  </div>
                  <div className="hidden lg:flex gap-7">
                    <Image src={male} alt=""></Image>
                    <div className="py-4">
                      <div className="rating rating-sm">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-[#FEBD35]"
                          defaultChecked
                        />
                      </div>
                      <p className="text-[#090914] text-lg font-medium py-5">
                        "We love Landingfolio! Our designers were using it for
                        their projects, so we already knew what kind of design
                        they want."
                      </p>
                      <h1 className="text-[#090914] text-base font-semibold">
                        Jenny Wilson{" "}
                        <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              id="slide3"
              className="carousel-item w-full mt-10 lg:mt-20 mb-10"
            >
              <div className="lg:flex gap-9">
                <div className="hidden lg:flex gap-7">
                  <Image src={female} alt=""></Image>
                  <div className="py-4">
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                    </div>
                    <p className="text-[#090914] text-lg font-medium py-5">
                      "We love Landingfolio! Our designers were using it for
                      their projects, so we already knew what kind of design
                      they want."
                    </p>
                    <h1 className="text-[#090914] text-base font-semibold">
                      Jenny Wilson{" "}
                      <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex gap-7">
                  <Image src={male} alt=""></Image>
                  <div className="py-2 lg:py-4">
                    <div className="rating rating-xs lg:rating-sm">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEBD35]"
                        defaultChecked
                      />
                    </div>
                    <p className="text-[#090914] text-[9px] lg:text-lg font-medium py-2 lg:py-5">
                      "We love Landingfolio! Our designers were using it for
                      their projects, so we already knew what kind of design
                      they want."
                    </p>
                    <h1 className="text-[#090914] text-[8px] lg:text-base font-semibold">
                      Jenny Wilson{" "}
                      <span className="text-[#64748B] ml-3">Grower.io</span>{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Comment;
