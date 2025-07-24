"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import solar from "@/assets/products/solarPanel.png";
import { useGetTopRankQuery } from "@/redux/product/productSlice";
import Link from "next/link";
import Loader from "@/components/common/Loader/Loader";

const TopRanked = () => {
	//@ts-ignore
	const { data: product, isLoading } = useGetTopRankQuery();
	const products = product?.data || [];

	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="max-w-screen-xl mx-auto lg:mt-28 mt-16 lg:mb-10">
			<div className="flex justify-between items-center">
				<h1 className="text-[10px] lg:text-2xl text-[666666] border-b-2 border-b-[#153870] pb-2">
					Product from{" "}
					<span className="text-[#153870] font-semibold">Top Ranked</span>{" "}
				</h1>
				{/* <div>
					<p className="text-[#222222] text-[10px] lg:text-base  font-extrabold flex items-center gap-2">
						View All{" "}
						<span>
							{" "}
							<IoIosArrowForward />{" "}
						</span>{" "}
					</p>
				</div> */}
			</div>
			<hr />

			{isLoading ? (
				<div>
					<Loader />
				</div>
			) : (
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={!isMobile}
					// navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					cssMode={true}
					
					className="mySwiper mt-7 lg:mt-20"
				>
					{products.map((pro: any, index: any) => {
						return (
							<SwiperSlide className="" key={index}>
								<div className="grid grid-cols-3 items-center lg:mx-20 border rounded-lg p-2 lg:h-96 h-64">
									<div className="rounded-md mr-4 lg:mr-10">
										<span className="flex justify-end">
											<p className="bg-[#FE3003] rounded-full lg:px-4 mt-2 mb-2 text-[8px] lg:text-xs text-white font-semibold flex items-center justify-center px-2 lg:h-6 lg:w-12 mr-2 shadow-md">
												Hot
											</p>
										</span>
										<div className="rounded-md flex justify-center">
											<Image
												className="lg:pb-7 pb-2 w-full h-52 lg:h-72 rounded-md"
												src={pro?.product?.image_url[0]}
												width={150}
												height={200}
												alt="Image"
											/>
										</div>
									</div>
									<div className="col-span-2 flex justify-between mr-8">
										<div>
											<h1 className="text-[#252D3A] text-[8px] lg:text-2xl font-semibold pb-2 lg:pb-5">
												{pro?.product?.name}
											</h1>
											<p className="text-[#252D3A] text-[8px] lg:text-2xl font-semibold">
												${pro?.product?.price}
												<span className="ml-4 text-[#C0C3C9] line-through">
													${pro?.product?.previous_price}
												</span>
											</p>
											
											<Link href={`/pages/AllProducts/${product?._id}`}>
												<button className="mt-5 lg:mt-16 text-[8px] lg:text-base btn bg-[#153870] hover:bg-[#016B90] text-white btn-xs lg:btn-md flex justify-center items-center">
													View Details
												</button>
											</Link>
										</div>
										
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			)}
		</div>
	);
};

export default TopRanked;
