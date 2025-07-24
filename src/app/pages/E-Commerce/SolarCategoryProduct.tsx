"use client";

import Image from "next/image";
import Link from "next/link";
import { GoHeart } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import {
	useGetAllCategoryQuery,
	useGetAllProductsQuery,
} from "@/redux/product/productSlice";
import Loader from "@/components/common/Loader/Loader";
import { useRouter } from "next/navigation";
import Product from "@/components/common/Product";

const SolarCategoryProduct = () => {
	const router = useRouter();
	//@ts-ignore
	const { data: category } = useGetAllCategoryQuery();
	const categories = category?.data || [];
	//@ts-ignore
	const { data: product, isLoading, isError } = useGetAllProductsQuery();

	const products = product?.data?.products || [];

	if (isLoading) {
		return (
			<div className="flex justify-center items-center mt-10">
				<Loader />
			</div>
		);
	}

	// Redirect to error page
	// if (isError) {
	// 	router.push("/pages/ErrorPage/NotFoundPage");
	// 	return null;
	// }
	return (
		<>
			{categories?.map((category: any, index: any) => {
				const categoryProducts = products.filter(
					(product: any) => product?.category?._id === category._id
				);
				// console.log("items", categoryProducts);
				return (
					<div key={index} className="lg:mt-28 mt-16">
						<div className="flex justify-between items-center border-b-2">
							<div>
								<h1 className="text-[10px] lg:text-2xl text-[#666666] font-normal border-b-2 border-b-[#153870] pb-2">
									Product of
									<span className="text-[#252D3A] font-bold ml-2">
										{category?.name}
									</span>
								</h1>
							</div>
							{/* <Link href="">
								<p className="text-[10px] text-[#222222] lg:text-[16px] inline-flex items-center gap-1 font-extrabold">
									View All{" "}
									<span className="">
										<IoIosArrowForward />
									</span>
								</p>
							</Link> */}
						</div>
						<div className="mt-12">
							<div
								style={{
									backgroundImage: `url(${category?.banner?.bgimage})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
								className="hero relative px-24 rounded-lg bg-[#0386FE]"
							>
								<div className="flex flex-col lg:flex-row-reverse justify-between  gap-5 lg:gap-20 py-6 lg:py-12 z-40">
									<div className=" lg:mt-10">
										<h1 className="text-base lg:text-4xl text-[#FFFFFF]">
											{category?.banner?.title}
										</h1>
										<p className="text-[20px] lg:text-[63px] font-semibold text-[#FFFFFF]">
											{category?.banner?.heading}
										</p>
									</div>
								</div>
							</div>

							<div className=" grid grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-3 gap-y-8 lg:gap-y-16 mt-16 lg:mb-24">
								{categoryProducts
									.slice(0, 4)
									.map((product: any, index: any) => {
										return (
											<div key={index}>
												<Product product={product} />
											</div>
										);
									})}
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default SolarCategoryProduct;
