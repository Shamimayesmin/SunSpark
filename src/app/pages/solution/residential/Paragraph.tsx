import React from "react";
import img1 from "../../../../assets/solution/tree.png";
import img2 from "../../../../assets/solution/solarSUn.png";
import Image from "next/image";

const Paragraph = () => {
	return (
		<div>
			<div className="lg:max-w-screen-xl mx-auto mt-16 text-[#3B3C4A] text-sm px-4 lg:px-0 lg:text-2xl  ">
				<p className="text-center lg:py-8">
					Our vision for home solutions is to empower homeowners with accessible
					and efficient solar energy solutions. We aim to provide tailored
					systems that enable households to generate clean electricity, reduce
					energy bills, and contribute to a sustainable future. By bringing
					solar power to homes, we envision a world where every household plays
					an active role in conserving our planet.
				</p>
				<p className="text-center">
					By adopting solar energy for your home, you not only contribute to a
					greener planet but also enjoy numerous financial benefits and energy
					independence. With the continual advancement in solar technology and
					the increasing focus on sustainable living, investing in solar PV
					systems is a wise choice for homeowners looking to embrace clean and
					renewable energy solutions for their homes. Take the first step
					towards a sustainable future by considering solar energy for your home
					today.
				</p>
			</div>
			<div className="flex justify-between lg:px-10 mt-10 lg:mt-0 px-2 ">
				<Image
					className=" h-[60px] w-[60px] lg:h-[150px] lg:w-[150px]"
					src={img1}
					alt=""
				></Image>
				<Image
					className=" h-[60px] w-[60px] lg:h-[150px] lg:w-[150px]"
					src={img2}
					alt=""
				></Image>
			</div>
		</div>
	);
};

export default Paragraph;
