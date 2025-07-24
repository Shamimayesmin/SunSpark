"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Add this line to import autoplay styles

// import required modules
import {
	Navigation,
	Pagination,
	Mousewheel,
	Keyboard,
	Autoplay,
} from "swiper/modules"; // Add Autoplay module
import Image from "next/image";
import { useGetAllBannerQuery } from "@/redux/banner/bannerSlice";

import img1 from "@/assets/E-commerce/bannerImage.png";
import roundeShape from "@/assets/E-commerce/banner/bigRound.png";
import roundeLine from "@/assets/E-commerce/banner/circleLine.png";
import smallRound from "@/assets/E-commerce/banner/Smallcircle.png";
import smallLine from "@/assets/E-commerce/banner/smallLine.png";

const Banner = () => {
	//@ts-ignore
	const { data: banners } = useGetAllBannerQuery();
	const bannerlist = banners?.data || [];
	return (
		<div className="banner-section">
			<style jsx global>{`
				.banner-section .swiper-pagination-bullet {
					background-color: white;
					opacity: 0.7;
				}
				.banner-section .swiper-pagination-bullet-active {
					background-color: white;
					opacity: 1;
				}
				.banner-section .swiper-button-next,
				.banner-section .swiper-button-prev {
					color: white;
				}
			`}</style>
			<Swiper
				cssMode={true}
				navigation={true}
				direction={"horizontal"}
				pagination={true}
				mousewheel={true}
				keyboard={true}
				autoplay={{ delay: 3000, disableOnInteraction: false }} // Add this line for autoplay
				modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} // Add Autoplay module
				className="mySwiper h-[200px] lg:h-[390px] rounded-2xl"
			>
				{bannerlist.map((banner: any, index: any) => (
					<SwiperSlide key={index}>
						<div className="hero relative bg-[#212844] px-4 lg:px-24">
							<div className="flex flex-row-reverse justify-between items-center gap-5 lg:gap- py-6 lg:py-12 lg:px-7 z-40">
								<div className="rounded-md ">
									<Image
										alt="Image"
										src={banner.image}
										className="rounded-lg lg:ml-20 h-[150px] lg:h-[290px] w-[300px]"
										height={300}
										width={200}
									/>
								</div>
								<div>
									<h1 className="text-[10px] lg:text-3xl text-white">
										{banner.heading}
									</h1>
									<p className="text-lg lg:text-[50px] font-semibold text-white leading-tight">
										{banner.title}
									</p>
								</div>
							</div>
							<div className="absolute top-0 right-0">
								<Image src={roundeShape} alt="" />
							</div>
							<div className="absolute top-0 right-0">
								<Image src={roundeLine} alt="" />
							</div>
							<div className="absolute bottom-0 right-[300px] z-20">
								<Image src={smallRound} alt="" />
							</div>
							<div className="absolute bottom-0 right-72 z-20">
								<Image src={smallLine} alt="" />
							</div>
						</div>
					</SwiperSlide>
				))}
				<SwiperSlide>
					<div className="hero relative bg-[#0386FE] px-4 lg:px-24 ">
						<div className="flex flex-row-reverse justify-between items-center lg:gap-20 py-6 lg:py-12 z-40">
							<Image
								alt="Image"
								src={img1}
								className="h-[150px] lg:h-[290px]  w-[300px] rounded-lg lg:ml-20"
							/>
							<div>
								<h1 className="text-[10px] lg:text-4xl text-white">
									Best Deal Online on Solar Inverter
								</h1>
								<p className="text-lg lg:text-[63px] font-semibold text-white leading-tight">
									High Frequency
								</p>
							</div>
						</div>
						<div className="absolute top-0 right-0 z-20">
							<Image src={roundeShape} alt="" />
						</div>
						<div className="absolute top-0 right-0">
							<Image src={roundeLine} alt="" />
						</div>
						<div className="absolute bottom-0 right-[300px] z-20">
							<Image src={smallRound} alt="" />
						</div>
						<div className="absolute bottom-0 right-72 z-20">
							<Image src={smallLine} alt="" />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
