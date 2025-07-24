"use client";

import { useEffect, useState } from "react";
import TabContent from "./TabContent";
import { IoIosArrowForward } from "react-icons/io";
import {
	useGetAllCategoryQuery,
	useGetAllProductsQuery,
} from "@/redux/product/productSlice";
import Link from "next/link";
import Loader from "@/components/common/Loader/Loader";

const TopCategories = () => {
	//@ts-ignore
	const { data: category, isLoading: isCategoryLoading }=useGetAllCategoryQuery();
	// console.log(category?.data);
	const categories = category?.data || [];

	//@ts-ignore
	const { data: product, isLoading: isProductLoading }=useGetAllProductsQuery();
	// console.log("product", product?.data?.product);
	const products = product?.data?.products || [];

	const [activeTab, setActiveTab] = useState(null);

	useEffect(() => {
		// Check if categories data is available and set the default active tab
		if (categories.length > 0) {
			setActiveTab(categories[0]._id);
		}
	}, [categories]); // Run the effect whenever categories data changes

	const openCity = (cityName: any) => {
		setActiveTab(cityName);
	};

	const filterProductsByCategory = () => {
		if (!activeTab) {
			return products;
		} else {
			return products.filter(
				(product: any) => product?.category?._id === activeTab
			);
		}
	};

	

	return (
		<div className="max-w-screen-xl mx-auto lg:mt-28 mt-16 lg:mb-10">
			<div className="flex justify-between items-center">
				<h1 className="text-[10px] lg:text-2xl text-[#666666] border-b-2 border-b-[#153870] pb-2">
					Shop from{" "}
					<span className="text-[#153870] font-semibold">Top Categories</span>{" "}
				</h1>
				<div>
					<Link href="/pages/AllProducts/Products">
						<p className="text-[#222222] text-[10px] lg:text-base font-extrabold flex items-center gap-2">
							View All{" "}
							<span>
								{" "}
								<IoIosArrowForward />{" "}
							</span>{" "}
						</p>
					</Link>
				</div>
			</div>
			<hr />
			<div className="lg:flex mt-10 ">
				<div className="w-full grid grid-cols-4 lg:grid-cols-1 lg:w-1/4">
					{categories?.map((category: any, index: any) => (
						<button
							key={category?._id}
							className={`flex items-center justify-center cursor-pointer rounded-md w-[10
				0px] lg:w-64 py-3 lg:py-6 text-[8px] lg:text-xl font-semibold lg:font-bold mb-7 text-[#153870] ${
					activeTab === category?._id
						? "border-2 border-dashed border-[#153870] bg-[#E8EBFF]"
						: ""
				}`}
							onClick={() => openCity(category?._id)}
						>
							{category.name}
						</button>
					))}
				</div>

				{isProductLoading ? (
					<div className="flex mx-auto items-center mt-16">
						<Loader />
					</div>
				) : (
					<div className="w-full lg:w-3/4">
						{categories?.map((category: any, index: any) => (
							<div
								key={category._id}
								id={category._id}
								className="tabcontent"
								style={{
									display: activeTab === category._id ? "block" : "none",
								}}
							>
								{/* Pass filtered products to TabContent */}
								<TabContent products={filterProductsByCategory()} />
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default TopCategories;
