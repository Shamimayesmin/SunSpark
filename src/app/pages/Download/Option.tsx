import Image from "next/image";
import React from "react";
import img1 from "@/assets/download/catelogue.png";
import img2 from "@/assets/download/aboutus.png";

const Option = () => {
	return (
		<div className="px-4 lg:px-0">
			<h1 className="text-[#343F52] font-bold text-3xl text-center ">
				Downloads
			</h1>
			<div className="lg:flex gap-x-10 gap-y-10 mt-10 lg:mt-20 justify-center items-center">
				<a
					href="/SOLAR PVI ENGLISH CATALOUGE.pdf"
					rel="noopener noreferrer"
					download
				>
					<div className="bg-[#E6F5FA] px-12 py-10 rounded-lg flex flex-col items-center justify-center gap-y-3">
						<Image src={img1} alt="Solar-PVI Catalogue"></Image>
						<h3 className="text-[#153870] text-xl font-semibold">
							Solar-PVI Catalogue
						</h3>
					</div>
				</a>
				<a
					href="/Brochure_SolarPVI English.pdf"
					rel="noopener noreferrer"
					download
				>
					<div className="bg-[#E6F5FA] px-24 py-10 rounded-lg flex flex-col items-center justify-center gap-y-3 mt-10 lg:mt-0">
						<Image src={img2} alt="About PVI"></Image>
						<h3 className="text-[#153870] text-xl font-semibold">About PVI</h3>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Option;
