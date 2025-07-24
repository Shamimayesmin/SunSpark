"use client";
import React from "react";
import Nav from "../../../E-Commerce/Nav";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import {useCreateRatingAndReviewMutation,} from "@/redux/product/productSlice";
import Link from "next/link";

const page = ({ params }: any) => {
	const productId = params?.productId || "";
	
	//@ts-ignore
	const [CreateRatingAndReaview] = useCreateRatingAndReviewMutation();
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const reviewText = e.target.review.value;
		const rating = e.target.rating.value;
		//@ts-ignore
		const { data, error } = await CreateRatingAndReaview({productId, rating, reviewText });
	}
	return (
		<div className="bg-[#FFFFFF]">
			<Nav></Nav>
			<div className="px-4 lg:px-0 lg:max-w-screen-xl mx-auto ">
			<form onSubmit={handleSubmit}>
                <div>
					<p className="text-2xl font-semibold pb-2">Rating</p>
					<div className="">
					<input
						type="number"
						className="border border-[#E0E0E0] bg-white p-4 w-full mb-7"
						placeholder="rating"
						name="rating"
						required
						/>
					</div>
                </div>
				<div>
                    <p className="text-2xl font-semibold pb-2">Write Review</p>
					<div className="w-full">
						<textarea
						className="border border-[#E0E0E0] bg-white p-4 w-full text-sm mb-7 h-28"
						placeholder="Give your review"
						name="review"
						required
						/>
						
						<button className="btn bg-[#153870] hover:bg-[#016B90] text-white w-48 rounded-none border-none">
						Send
						</button>
					
                	</div>
				
				</div>
			</form>
				<Footer textColor="#133366" iconColor="#133366"></Footer>
			</div>
		</div>
	);
};

export default page;
