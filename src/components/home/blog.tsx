"use client";

import img1 from "@/assets/blog/Image (1).jpg";
import img2 from "@/assets/blog/Rectangle 4.png";
import img3 from "@/assets/blog/Rectangle 6.png";
import Image from "next/image";
import Link from "next/link";
import { useGetAllBlogsQuery } from "@/redux/blog/blogSlice";

import Loader from "../common/Loader/Loader";
import { useRouter } from "next/navigation";
import SingleBlog from "@/app/pages/posts/blog/SingleBlog";

import blogImage1 from "@/assets/blog/Image.jpg";
import blogImage2 from "@/assets/blog/Image (1).jpg";
import blogImage3 from "@/assets/blog/Rectangle 2.jpg";
import blogImage4 from "@/assets/blog/Rectangle 4.png";
import blogImage5 from "@/assets/blog/Rectangle 6.png";

const Blog = () => {
	const router = useRouter();
	//@ts-ignore
	const { data: blogData, isLoading, isError } = useGetAllBlogsQuery();
	const allBlogs = blogData?.data?.blogs || [];
	const blogs = allBlogs.slice(0, 3);

	const blogPosts = [
		{
			id: 1,
			title: "What Happens to Solar Panels When It's Cloudy or Raining?",

			excerpt:
				"A beginner-friendly guide to understanding how Server Components work in React and why they matter for performance.",
			content: "Full blog content here...",
			author: "Alina Yesmin",
			date: "2025-07-10",
			tags: ["React", "Server Components", "Frontend"],
			image: blogImage1,
		},
		{
			id: 2,
			title: "10 Compelling Reasons to Install Solar Panels for Your Home",
			slug: "responsive-layout-with-tailwind",
			excerpt:
				"Learn how to create responsive and elegant layouts using Tailwind CSS utility classes.",
			content: "Full blog content here...",
			author: "Alina Yesmin",
			date: "2025-07-15",
			tags: ["Tailwind CSS", "CSS", "Responsive Design"],
			image: blogImage2,
		},
		{
			id: 3,
			title: "Next.js App Router vs Pages Router: Which to Use in 2025?",
			slug: "nextjs-app-router-vs-pages-router",
			excerpt:
				"Explore the differences between the App Router and Pages Router in Next.js and when to use each.",
			content: "Full blog content here...",
			author: "Alina Yesmin",
			date: "2025-07-18",
			tags: ["Next.js", "Routing", "Web Development"],
			image: blogImage3,
		},
		{
			id: 4,
			title: "Top 10 VS Code Extensions for Frontend Developers",
			slug: "top-vscode-extensions-frontend",
			excerpt:
				"Boost your productivity with these must-have VS Code extensions tailored for frontend development.",
			content: "Full blog content here...",
			author: "Alina Yesmin",
			date: "2025-07-20",
			tags: ["VS Code", "Tools", "Productivity"],
			image: blogImage4,
		},
		{
			id: 5,
			title: "Module Federation in Next.js: Step-by-Step Guide",
			slug: "module-federation-nextjs-guide",
			excerpt:
				"Implement module federation in your Next.js app to enable microfrontend architecture and code sharing.",
			content: "Full blog content here...",
			author: "Alina Yesmin",
			date: "2025-07-22",
			tags: ["Next.js", "Module Federation", "Advanced"],
			image: blogImage5,
		},
	];

	// // Redirect to error page
	// if (isError) {
	// 	router.push("/pages/ErrorPage/NotFoundPage");
	// 	return null;
	// }

	return (
		<div className="lg:max-w-screen-xl mx-auto bg-[#FFFFFF]">
			<section className="lg:py-6 mx-auto">
				<div className="container px-6 py-3 lg:mb-12 mx-auto">
					<div className="flex justify-between items-center mt-3">
						<div>
							<h3 className="text-xl lg:text-2xl font-bold text-[#133366]">
								Read All News
							</h3>
						</div>

						<div>
							<Link href="/posts/blog">
								<button className="btn bg-[#FEAC03] hover:bg-[#E79D03] border-none text-[8px] lg:text-base btn-xs lg:btn-md  text-white">
									View All
								</button>
							</Link>
						</div>
					</div>

					{/* Show loader while fetching data */}
					{isLoading ? (
						<div className="flex justify-center items-center mt-10">
							<Loader />
						</div>
					) : (
						<div
							id="blog-card-content"
							className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3 lg:grid-cols-3 mt-10"
						>
							{blogPosts.slice(0, 3).map((item: any, index: any) => (
								<div key={index} className="relative">
									<SingleBlog blog={item}></SingleBlog>
								</div>
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default Blog;
