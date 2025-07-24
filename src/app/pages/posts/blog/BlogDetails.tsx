"use client";

import Image from "next/image";
import img from "@/assets/blog/Image.jpg";
import img2 from "@/assets/blog/Image (1).jpg";
import { useViewBlogDetailsQuery } from "@/redux/blog/blogSlice";
import DOMPurify from "dompurify";

import blogPosts from "@/lib/blogData";
import profilePhoto from "@/assets/blog/Image.jpg";

// interface BlogDetailsProps {

//   blogId: any;
// }

interface Blog {
	id: string;
	title: string;
	date: string;
	author: string;
	content: string;
	image: string;
}

// {blogId}: BlogDetailsProps) it will use dynamic id wise api call below function

const BlogDetails = ({ blog }: any) => {
	console.log("blogs", blog);

	//@ts-ignore
	// const {data:detailsData} = useViewBlogDetailsQuery(blogId)
	// console.log("details", detailsData?.data);
	// const {updatedAt,createdAt,content,author,image,title} = detailsData?.data ||{}

	const { title, date, content, image } = blog || {};
	const sanitizedData = () => ({
		__html: DOMPurify?.sanitize(content),
	});

	return (
		<section className="py-6 lg:max-w-screen-xl px-4 lg:px-0 mx-auto">
			<label htmlFor="">
				<button className="btn btn-outline bg-[#E8EBF1] md:btn-sm btn-xs mb-5 lg:text-base text-[8px]">
					Technology
				</button>
			</label>
			<h2 className="lg:text-[36px] leading-snug text-xs text-[#181A2A] font-semibold md:mb-5 mb-3 lg:mr-48">
				{title}
			</h2>
			<div>
				<div className="flex gap-6 md:mb-8 mb-3 md:mt-5 mt-2 items-center">
					<div className="flex gap-2 items-center">
						<div className="avatar">
							<div className="lg:w-7 w-5 rounded-full">
								<Image src={profilePhoto} alt="Tailwind-CSS-Avatar-component" />
							</div>
						</div>
						<p className="md:text-base text-[6px]">Tracey Wilson</p>
					</div>
					{/* <p className="md:text-base text-[6px]">{createdAt}</p> */}
					<p className="md:text-base text-[6px]">{date}</p>
				</div>
				<Image
					className="w-full h-[450px] rounded-md"
					src={image}
					alt="Image"
					height={100}
					width={100}
				/>
				<div className="md:pb-14 pb-6">
					<p
						className="md:mt-8 mt-4 text-start md:text-base text-[9px]"
						dangerouslySetInnerHTML={sanitizedData()}
					></p>
					<br />
					{/* <p className="text-start mt-3 md:text-base text-[9px]">
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p> */}
				</div>
				{/* <div className="md:mt-8 mt-4 md:pb-14 pb-6">
            <h1 className="md:text-[24px] text-[9px] font-semibold mb-3">
              Research Your Destination
            </h1>
            <p className="text-start mt-3 md:text-base text-[9px]">
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
            </p>
            <p className="text-start mt-3 md:text-base text-[9px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
          </div>
          <div className="md:mt-8 mt-4 md:pb-14 pb-6">
            <h1 className="md:text-[24px] text-[10px] font-semibold mb-3">
              Plan Your Itinerary
            </h1>
            <p className="text-start mt-3 md:text-base text-[9px]">
              While it's essential to leave room for spontaneity and unexpected
              adventures, having a rough itinerary can help you make the most of
              your time and budget. Identify the must-see sights and experiences
              and prioritize them according to your interests and preferences.
              This will help you avoid overscheduling and ensure that you have
              time to relax and enjoy your journey.
            </p>
            <p className="text-start mt-3 md:text-base text-[9px]">
              Vitae sapien pellentesque habitant morbi tristique. Luctus
              venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
              nullam eget felis. Tincidunt arcu non sodales neque sodales ut
              etiam sit amet.
            </p>
          </div>

          <div
            role=""
            className=" rounded-md md:p-6 p-3 border-s-4 border-s-[#E8E8EA] md:mt-8 mt-4 bg-[#E8E8EA]"
          >
            <i className="md:text-[24px] text-[8px]">
              “ Traveling can expose you to new environments and potential
              health risks, so it's crucial to take precautions to stay safe and
              healthy. ”
            </i>
          </div>
          <Image  src={img2} alt="Image" className="md:mt-16 mt-8 w-full" />
          <div
            role=""
            className=" rounded-md md:p-6 p-3 md:mt-8 mt-4 flex justify-center bg-[#E8E8EA] "
          >
            <div>
              <p className="md:text-[14px] text-[5px] text-center">Advertisement</p>
              <p className="md:text-[20px] text-[7px] font-semibold">You can place ads</p>
              <p className="lg:text-[18px] text-[5px] text-center">750x100</p>
            </div>
          </div>
          <div className="md:mt-8 mt-4 md:pb-8 pb-4">
            <h1 className="md:text-[24px] text-[10px] font-semibold mb-3">
              Pack Lightly and Smartly
            </h1>
            <p className="text-start mt-3 md:text-base text-[9px]">
              Packing can be a daunting task, but with some careful planning and
              smart choices, you can pack light and efficiently. Start by making
              a packing list and sticking to it, focusing on versatile and
              comfortable clothing that can be mixed and matched. Invest in
              quality luggage and packing organizers to maximize space and
              minimize wrinkles.
            </p>
          </div>
          <div className="md:mt-8 mt-4 md:pb-8 pb-4">
            <h1 className="md:text-[24px] text-[10px] font-semibold mb-3">
              Stay Safe and Healthy
            </h1>
            <p className="text-start mt-3 md:text-base text-[9px]">
              Traveling can expose you to new environments and potential health
              risks, so it's crucial to take precautions to stay safe and
              healthy. This includes researching any required vaccinations or
              medications, staying hydrated, washing your hands frequently, and
              using sunscreen and insect repellent. It's also essential to keep
              your valuables safe and secure and to be aware of your
              surroundings at all times.
            </p>
          </div>
          <div className="md:mt-8 mt-4 md:pb-8 pb-4">
            <h1 className="md:text-[24px] text-[10px] font-semibold mb-3">
              Immerse Yourself in the Local Culture
            </h1>
            <p className="text-start mt-3 md:text-base text-[9px]">
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
          </div>
          <div className="md:mt-8 mt-4 md:pb-14 pb-6">
            <h1 className="md:text-[24px] text-[10px] font-semibold mb-3">Capture Memories</h1>
            <p className="text-start mt-3 md:text-base text-[9px]">
              Finally, don't forget to capture memories of your journey. Whether
              it's through photographs, journaling, or souvenirs, preserving the
              moments and experiences of your travels can bring joy and
              nostalgia for years to come. However, it's also essential to be
              present in the moment and not let technology distract you from the
              beauty of your surroundings.
            </p>
          </div> */}
			</div>
		</section>
	);
};

export default BlogDetails;
