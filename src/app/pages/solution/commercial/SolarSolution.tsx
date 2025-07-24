import Link from "next/link";
import React from "react";

const SolarSolution = () => {
	return (
		<div className="px-4 lg:px-0 pt-16 lg:pt-0">
			<div className="relative max-w-screen-xl mx-auto bg-[#2563EA] rounded-2xl my-28 flex flex-col justify-center items-center p-16">
				<h1 className="text-[11px] lg:text-4xl font-bold text-white text-center">
					Get a Personalized Solar Solution
				</h1>
				<p className="text-[#E9EBF8] text-[8px] lg:text-base text-center max-w-screen-md py-3 lg:p-7">
					Request a personalized quote tailored to your specific energy needs
					and requirements. Our team will assess your location, energy
					consumption, and goals to provide you with a detailed quote that
					outlines the cost, savings, and benefits of going solar.
				</p>

				<Link href="\#contact">
					<div className="flex justify-center gap-5">
						<button className="btn bg-[#FEAC03] border-none hover:bg-[#E79D03] text-white text-[8px] lg:text-base font-medium btn-xs lg:btn-md">
							Send a Message
						</button>
					</div>
				</Link>
				<span
					className="absolute -top-28 -left-36 lg:-left-20 h-60 w-60 bg-white rounded-full"
					style={{
						maskImage:
							"radial-gradient(circle at center, transparent 68%, white 70%)",
					}}
				></span>
			</div>
		</div>
	);
};

export default SolarSolution;
