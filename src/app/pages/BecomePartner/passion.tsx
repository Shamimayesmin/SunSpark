import Image from "next/image";
import img from "@/assets/becomePartner/passionate.png";

const Passion = () => {
	return (
		<div className="hero bg-[#F9FDFF] lg:px-0 px-4">
			<div className="hero-content flex-col-reverse lg:flex-row-reverse lg:py-20 py-10 items-center">
				<Image src={img} alt="Image" className="lg:w-[487px] w-[268px] lg:h-[487px] h-[268px]" />
				<div className="lg:w-2/3 w-full">
					<h2 className="lg:text-4xl text-base font-bold text-[#133366]">Passionate</h2>
					<div className="lg:mt-14 mt-6">
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#E2F5FF] lg:w-14 w-8 lg:h-14 h-8 lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#153870]">
								<ol>1</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Benefit from investments in our relationship and support, driven
								by our passion for solar energy. 
							</p>
						</div>
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#E2F5FF] lg:w-14 w-8 lg:h-14 h-8 lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#153870]">
								<ol>2</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Join a network of like-minded individuals and compete with
								bigger brands through premium membership. 
							</p>
						</div>
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#E2F5FF] lg:w-14 w-8 lg:h-14 h-8 lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#153870]">
								<ol>3</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Consolidate with American solar partners and simplify
								alternative energy contracting through one accessible channel.
							</p>
						</div>
						<div className="flex py-3 items-center">
							<div className="lg:p-5 p-3 bg-[#E2F5FF] lg:w-14 w-8 lg:h-14 h-8 lg:text-[24px] text-base font-bold text-center flex justify-center items-center rounded-full text-[#153870]">
								<ol>4</ol>
							</div>
							<p className="ml-5 lg:text-base text-[9px] text-[#343F52]">
								Support eco-friendliness and join the ‘Global Go Green’ national
								community, ensuring financial sustainability and enhancing your
								solar knowledge and international business standards.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Passion;
