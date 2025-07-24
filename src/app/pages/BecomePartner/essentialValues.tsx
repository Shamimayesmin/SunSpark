import img from "@/assets/becomePartner/focused.png";
import Image from "next/image";

const EssentialValues = () => {
	return (
		<div className="hero bg-[#F9FDFF] lg:px-0 px-4">
			<div className="hero-content flex-col-reverse lg:flex-row-reverse lg:py-20 py-10 items-center">
				<Image src={img} alt="Image" className="lg:w-[487px] w-[268px] lg:h-[487px] h-[268px]" />
				<div className="lg:w-2/3 w-full">
					<h1 className="lg:text-2xl text-[10px] text-[#252D3A] font-bold lg:mb-6 mb-3">
						WE EMBODY THREE ESSENTIAL VALUES
					</h1>
					<h2 className="lg:text-4xl text-base font-bold text-[#133366]">
						Transforming Energy with Solar Panels
					</h2>
					<div className="lg:mt-16 mt-6">
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#E2F5FF] lg:w-14 w-8 lg:h-14 h-8 lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#153870]">
								<ol>1</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Enjoy affordable and high-quality installation resources,
								excellent value for your investment, and access to proven solar
								investment programs. 
							</p>
						</div>
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#E2F5FF] lg:w-14 w-8 lg:h-14 h-8 lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#153870]">
								<ol>2</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Stay informed of all opportunities to thrive in the energy
								market with affordable advertising and solar distributorship
								plans. 
							</p>
						</div>
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#E2F5FF] lg:w-14 w-8 lg:h-14 h-8 lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#153870]">
								<ol>3</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Provide essential feedback to continuously improve trader
								support systems.
							</p>
						</div>
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#E2F5FF] lg:w-14 w-8 lg:h-14 h-8  lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#153870]">
								<ol>4</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Access an extensive knowledge base on solar technology growth
								for free, ensuring you stay ahead of the curve with Solar-PVI.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EssentialValues;
