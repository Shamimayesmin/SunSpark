import React from "react";
import img from "../../../../assets/solution/solartree.png";
import Image from "next/image";

const Section1 = () => {
	return (
		<div className="bg-[#F9FDFF]">
			{" "}
			<div className="lg:max-w-screen-xl mx-auto lg:py-20 mt-10 lg:mt-0 px-4 lg:px-0">
				<div className="lg:flex justify-between items-center gap-20">
					<div className="lg:w-1/2">
						<h1 className="text-[#343F52] text-xl lg:text-4xl font-bold py-10 pr-10">
							Experience the Future with Our 1.5KW Off-Grid PV System:
							Unleashing Clean Energy Anywhere{" "}
						</h1>
						<button className="btn bg-[#153870] hover:bg-[#016B90] text-white text-[8px] lg:text-base btn-sm lg:btn-md ">
							Learn More
						</button>
					</div>
					<div className="mt-10 lg:mt-0">
						<Image src={img} alt=""></Image>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section1;
