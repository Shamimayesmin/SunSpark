"use client";

import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import Link from "next/link";
import Buttons from "@/components/common/Buttons";
import { useState } from "react";
import { useGetAllBlogsQuery } from "@/redux/blog/blogSlice";

import Footer from "@/components/common/Footer";

import { Metadata } from "next";
import SingleBlog from "./SingleBlog";

// export const metadata: Metadata = {
//   title: "Blog | Solar-PVI",
//   description: "Blog about solar energy and solar PV.",
// };

const page = () => {
	//@ts-ignore
	const { data: blogData } = useGetAllBlogsQuery();

	// console.log("blogdata", blogData?.data.blogs);
	// console.log("blog", blogData);
	const allBlogs = blogData?.data?.blogs || [];

	const [scrollPosition, setScrollPosition] = useState(0);

	const scrollBack = () => {
		setScrollPosition((prevPosition) => prevPosition - 350);
	};

	const scrollNext = () => {
		setScrollPosition((prevPosition) => prevPosition + 350);
	};

	// Format the createdAt date
	const formatDate = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
			hour12: true, // Use false for 24-hour format
			timeZone: "Asia/Dhaka", // Set the timezone to Bangladesh
		};
		return new Intl.DateTimeFormat("en-US", options).format(
			new Date(dateString)
		);
	};

	return (
		<div className="max-w-screen-2xl mx-auto bg-[#FFFFFF]">
			<Navbar
				textColor="#343F52"
				buttonBorderColor="none"
				buttonColor="#153870"
				buttonTextColor="#FFFFFF"
				buttonHoverColor="#016B90"
				buttonHoverTextColor="#FFFFFF"
				dropdownBgColor="white"
			/>
			<section className="py-6 lg:w-[1400px] mx-auto">
				<div className="px-6 py-3 mb-12 mx-auto space-y-8">
					<div className="space-y-2 text-center">
						<h2 className="text-3xl font-bold text-[#133366]">Read All News</h2>
					</div>
					<div className="flex justify-between items-center relative">
						<div>
							<h3 className="md:text-xl text-sm font-bold text-[#133366]">
								Recent Articles
							</h3>
						</div>
					</div>

					<div
						id="blog-card-content"
						className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3"
					>
						{allBlogs?.map((item: any, index: any) => {
							return (
								<div key={index} className="relative">
									<SingleBlog blog={item}></SingleBlog>
								</div>
							);
						})}
					</div>
				</div>
				{/* Solar Panel */}
				<div className="px-6 py-3 mb-12 mx-auto space-y-8">
					<div className="flex justify-between items-center relative">
						<div>
							<h3 className="md:text-xl text-sm font-bold text-[#133366]">
								Solar Panel
							</h3>
						</div>
					</div>

					<div
						id="blog-card-content"
						className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3"
					>
						{allBlogs?.map((item: any, index: any) => {
							return (
								<div key={index} className="relative">
									<SingleBlog blog={item}></SingleBlog>
								</div>
							);
						})}
					</div>
				</div>
				{/* Solar Solution */}
				<div className="px-6 py-3 mb-12 mx-auto space-y-8">
					<div className="flex justify-between items-center relative">
						<div>
							<h3 className="md:text-xl text-sm font-bold text-[#133366]">
								Solar Solution
							</h3>
						</div>
					</div>

					<div
						id="blog-card-content"
						className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3"
					>
						{allBlogs?.map((item: any, index: any) => {
							return (
								<div key={index} className="relative">
									<SingleBlog blog={item}></SingleBlog>
								</div>
							);
						})}
					</div>
				</div>
				{/* Solar Energy */}
				<div className="px-6 py-3 lg:mb-12 mx-auto space-y-8">
					<div className="flex justify-between items-center relative">
						<div>
							<h3 className="md:text-xl text-sm font-bold text-[#133366]">
								Solar Energy
							</h3>
						</div>
					</div>

					<div
						id="blog-card-content"
						className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3"
					>
						{allBlogs?.map((item: any, index: any) => {
							return (
								<div key={index} className="relative">
									<SingleBlog blog={item}></SingleBlog>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<Footer textColor="#133366" iconColor="#133366" />
		</div>
	);
};

export default page;
