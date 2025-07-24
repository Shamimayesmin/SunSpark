import React from "react";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import solar from "@/assets/products/solarPanel.png";
import Link from "next/link";

const TabContent = ({ products }: any) => {
	// console.log("filter product", products);

	return (
		<div className="grid lg:grid-cols-4 grid-cols-2 gap-3 carousel px-3 py-4">
			{products?.slice(0, 4).map((product: any, index: any) => {
				return (
					<Link href={`/pages/AllProducts/${product?._id}`}>
						<div
							key={index}
							className="w-40 lg:w-56 hover:shadow-md border rounded-md px-2 pb-2 cursor-pointer"
						>
							<div className="">
								<span className="flex justify-end">
									<p className="bg-[#FE3003] rounded-full lg:px-4 mt-3 text-[8px] lg:text-xs text-white font-semibold flex items-center justify-center px-2 lg:h-6 lg:w-12 mr-2 mb-2">
										Hot
									</p>
								</span>
								<div className="rounded-md flex justify-center">
									<Image
										className="pb-3 h-40 w-36 lg:h-52 lg:w-full rounded-md object-cover"
										src={product?.image_url[0]}
										width={150}
										height={200}
										alt=""
									/>
								</div>
							</div>

							<div className="px-1 py-2">
								<div className="mt-2 flex justify-between items-center">
									<h1 className="text-[#252D3A] text-[8px] lg:text-sm font-semibold">
										{product?.name}
									</h1>
									{/* <GoHeart className="h-3 w-3 lg:h-5 lg:w-5" /> */}
								</div>
								{/* <div className="mt-2 flex items-center">
									<div className="rating rating-xs">
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
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-[#FEBD35]"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-[#EBECEE]"
										/>
									</div>
									<p className="ml-4 text-[#C0C3C9] text-[8px] lg:text-xs font-semibold">
										(25)
									</p>
								</div> */}
								<div className="mt-2 flex justify-between items-center">
									<p className="text-[#252D3A] text-[8px] lg:text-xs font-semibold">
										${product?.price}
										<span className="ml-4 text-[#C0C3C9] line-through">
											$120
										</span>
									</p>
									<Link href={`/pages/AllProducts/${product?._id}`}>
										<button className="btn  text-[8px]  bg-[#153870] hover:bg-[#016B90] text-white btn-xs lg:btn-sm border-none">
											View Details
										</button>
									</Link>
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default TabContent;
