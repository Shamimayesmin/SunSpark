"use client";

import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: any) => {
	console.log("singleblog", blog);

  
	// Format the createdAt date
	// const formatDate = (dateString: string) => {
	//   const options: Intl.DateTimeFormatOptions = {
	//     year: 'numeric',
	//     month: 'long',
	//     day: 'numeric',
	//     hour: 'numeric',
	//     minute: 'numeric',
	//     second: 'numeric',
	//     hour12: true, // Use false for 24-hour format
	//     timeZone: 'Asia/Dhaka' // Set the timezone to Bangladesh
	//   };
	//   return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
	// };

	return (
		<div className="lg:max-w-screen-xl bg-[#FFFFFF]">
			<article className="flex flex-col rounded-sm lg:h-[500px] h-full shadow-md">
				<Link href={`pages/posts/${blog?.id}`}>
					<Image
						alt="Image"
						className="lg:w-full md:h-52 h-full rounded-t-sm"
						src={blog?.image}
						height={500}
						width={500}
					/>
				</Link>

				<div className="flex flex-col flex-1 p-5">
					<h3 className="flex py-2 md:text-2xl text-xs font-semibold leading-snug text-[#121212]">
						{blog?.title}
					</h3>
					<div className="flex flex-wrap justify-between md:pt-3 pt-1 space-x-2 md:text-sm text-[6px] text-[#133366]">
						{/* <span>{formatDate(blog?.createdAt)}</span> */}

						<span>2.1K views</span>
						<span>{blog?.date}</span>
					</div>
					<div className="absolute md:top-40 top-16 lg:left-5 md:left-5 left-2 text-[#133366] bg-white lg:px-4 md:px-4 px-3 py-1 rounded-md lg:text-[14px] md:text-[14px] text-[8px]">
						<h4>SOLAR PANEL</h4>
					</div>
					<Link href={`/pages/posts/${blog?.id}`}>
						<button className="btn bg-[#153870] hover:bg-[#016B90] text-white mt-5 text-[8px] lg:text-base btn-xs lg:btn-md border-none">
							Read More
						</button>
					</Link>
				</div>
			</article>
		</div>
	);
};

export default SingleBlog;
