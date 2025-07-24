"use client";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import solar from "@/assets/products/solarPanel.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useGetBestDealQuery } from "@/redux/product/productSlice";
import Product from "@/components/common/Product";
import Loader from "@/components/common/Loader/Loader";
import { useEffect, useState } from "react";
// image
import batteryImg from "@/assets/products/battery.png";

import img1 from "@/assets/products/battery.png";
import img2 from "@/assets/products/inverter.png";
import img3 from "@/assets/products/panel.png";
import img4 from "@/assets/products/power.png";

const BestDealProducts = () => {
	//@ts-ignore
	// const { data: product, isLoading } = useGetBestDealQuery();
	// const products = product?.data || [];
	const [products, setProducts] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	// ✅ Inline Mock Data
	const mockData = {
		data: [
			{
				_id: "1",
				name: "Solar Panel 300W",
				image_url: img1, // Make sure this image is in public/mock/
				price: 120,
				previous_price: 150,
				averageRating: 4,
			},
			{
				_id: "2",
				name: "Solar Panel 500W",
				image_url: img2,
				price: 180,
				previous_price: 210,
				averageRating: 5,
			},
			{
				_id: "3",
				name: "Solar Battery 12V",
				image_url: img3,
				price: 90,
				previous_price: 110,
				averageRating: 3,
			},
			{
				_id: "4",
				name: "Inverter Pro 1.5kW",
				image_url: img4,
				price: 200,
				previous_price: 240,
				averageRating: 4,
			},
		],
	};

	useEffect(() => {
		// Simulate async fetch
		setTimeout(() => {
			setProducts(mockData.data);
			setIsLoading(false);
		}, 1000); // Simulate loading
	}, []);

	return (
		<div className="mt-20">
			<div className="flex justify-between items-center border-b-2">
				<div>
					<h1 className="text-[10px] lg:text-2xl text-[#666666] font-normal border-b-2 border-b-[#008ECC] pb-2">
						Grab the best deal on{" "}
						<span className="text-[#252D3A] font-bold">Solar-PVI</span>
					</h1>
				</div>
				<Link href="/pages/AllProducts/Products">
					<p className="text-[#222222] text-[10px] font-extrabold lg:text-[16px] inline-flex items-center gap-1">
						View All{" "}
						<span className="">
							<IoIosArrowForward />
						</span>
					</p>
				</Link>
			</div>

			{isLoading ? (
				<div className="flex justify-center items-center mt-16">
					<Loader />
				</div>
			) : (
				<div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
					{products?.map((pro: any, index: any) => {
						// console.log("data", products);
						return (
							<div key={index}>
								<Product product={pro} />
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default BestDealProducts;
