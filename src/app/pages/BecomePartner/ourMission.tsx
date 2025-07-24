import img1 from "@/assets/becomePartner/image 14.png";
import img2 from "@/assets/becomePartner/image 15.png";
import img3 from "@/assets/becomePartner/image 15 (1).png";
import Image from "next/image";
const OurMission = () => {
	const missionData = [
		{
			id: 1,
			title: "Empowering Businesses",
			message:
				"We strive to expand our client base, enabling more businesses to embrace solar energy solutions easily and cost-effectively.",
			image: img1,
		},
		{
			id: 2,
			title: "Simplifying Solutions",
			message:
				"We are committed to finding innovative and straightforward answers to energy needs, making the transition smoother and more accessible for all. ",
			image: img2,
		},
		{
			id: 3,
			title: "Accelerating Installations",
			message:
				"Our expertise allows us to complete solar panel installations faster, ensuring that your business can start benefiting from clean and renewable energy sooner.",
			image: img3,
		},
	];
	return (
		<div className="lg:px-28 lg:py-20 px-4">
			<h1 className="lg:text-[36px] text-xl text-center lg:text-start font-bold text-[#343F52]">
				Our mission is centered around three core goals
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-16 mt-7 lg:gap-0 gap-5">
				{missionData?.map((item) => (
					<div className="card lg:w-96  bg-[#FFF9F0] shadow-md">
						<figure className="lg:px-10 px-4 lg:pt-10 pt-5">
							<Image src={item?.image} alt="Image" className="rounded-xl lg:w-20 w-14 lg:h-20 h-14" />
						</figure>
						<div className="card-body items-center text-center mt-0">
							<h2 className="card-title lg:text-lg text-xs mt-0 text-[#343F52] mb-4">{item?.title}</h2>
							<p className="text-[#343F52] lg:text-base text-xs">{item?.message}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurMission;
