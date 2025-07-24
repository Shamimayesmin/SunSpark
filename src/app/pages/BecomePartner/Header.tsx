import img from "../../../assets/solution/solutionCar.jpg";
const Header = () => {
	return (
		<div className="relative lg:h-[507px] h-[240px]">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: `url(${img.src})`,
					backgroundAttachment: "fixed",
				}}
			></div>
			<div className="absolute inset-0 bg-black opacity-50"></div>

			{/* Content */}
			<div className="relative z-10 max-w-screen-xl lg:py-28 py-10 mx-auto lg:px-0 px-8">
				<h1 className="lg:text-5xl text-base font-bold text-white ">
					Switch to Solar with Solar-PVI and Unlock a <br /> Brighter,
					Sustainable & Economically Rewarding Future
				</h1>
				<p className="text-white lg:text-2xl text-xs lg:mt-7 mt-3">
					Collaborate with a leading provider of solar solutions, gain access to
					a reputable brand, and tap into a <br /> wide customer base. Together,
					let's make a significant impact on the future of renewable energy!
				</p>
			</div>
		</div>
	);
};

export default Header;
