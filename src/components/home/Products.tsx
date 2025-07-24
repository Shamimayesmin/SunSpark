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

import {
	useGetAllCategoryQuery,
	useGetAllProductsQuery,
} from "@/redux/product/productSlice";
import ProductSlide from "./ProductSlide";

// types.ts
export interface Product {
	id: string;
	name: string;
	type: "SolarPanel" | "SolarBattery" | "SolarInverter" | "PortablePower";
	categoryId: string;
	
}

export default function App() {
	//@ts-ignore
	const { data: category } = useGetAllCategoryQuery();
	const categories = category?.data || [];
	
	//@ts-ignore
	const { data: product, isLoading, isError } = useGetAllProductsQuery();
	const products = product?.data?.products || [];


	const productsByCategory = products.reduce((acc: any, product: any) => {
		if (!acc[product?.category?._id]) {
			acc[product?.category?._id] = [];
		}
		acc[product?.category?._id].push(product);
		return acc;
	}, {});



	return (
		<div className="max-w-screen-xl mx-auto">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				// navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{categories?.map((category: any) => (
					<SwiperSlide key={category._id}>
						<ProductSlide
							category={category}
							products={productsByCategory[category._id]}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
