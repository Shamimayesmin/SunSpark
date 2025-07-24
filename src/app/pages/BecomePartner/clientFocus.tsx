
import img from "@/assets/becomePartner/panels.png";
import Image from "next/image";
const ClientFocus = () => {
	return (
		<div className="hero bg-[#FFFDF9] lg:px-0 px-4">
			<div className="hero-content flex-col-reverse lg:flex-row lg:py-20 py-10 items-center">
				<Image src={img} alt="Image" className="lg:w-[487px] w-[268px] lg:h-[487px] h-[268px]" />
				<div className="lg:w-2/3 w-full lg:ml-10">
					<h2 className="lg:text-4xl text-base font-bold text-[#343F52]">Client-Focused</h2>
					<div className="lg:mt-10 mt-4">
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#FEF1E0] lg:w-14 w-8 lg:h-14 h-8 lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#FEAC03]">
								<ol>1</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Enjoy genuine inquiries without extra payment or complicated
								commission systems.
							</p>
						</div>
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#FEF1E0] lg:w-14 w-8 lg:h-14 h-8 lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#FEAC03]">
								<ol>2</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Prioritize customer service and provide you with educated
								cooperative clients to kickstart your solar panel business
								successfully. 
							</p>
						</div>
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#FEF1E0] lg:w-14 w-8 lg:h-14 h-8 lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#FEAC03]">
								<ol>3</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Gain access to standardized and affordable project materials,
								guaranteed shipping quality, and effective PV maintenance
								schedules.
							</p>
						</div>
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#FEF1E0] lg:w-14 w-8 lg:h-14 h-8 lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#FEAC03]">
								<ol>4</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Benefit from premium training packages and marketing solutions
								to elevate your business further.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientFocus;
