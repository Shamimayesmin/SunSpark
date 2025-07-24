import Navbar from "@/components/common/Navbar";
import React from "react";
import SolutionHeroSection from "./ResidentialHeroSection";
import Paragraph from "./Paragraph";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Help from "./Help";
import Footer from "@/components/common/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Residential Solutions | Solar-PVI",
	description:
		"Switch to Solar with Solar-PVI and Unlock a Brighter, Sustainable & Economically Rewarding Future",
};

const page = () => {
	return (
		<div className=" bg-[#FFFFFF]">
			<Navbar
				textColor="#343F52"
				buttonBorderColor="none"
				buttonColor="#153870"
				buttonTextColor="#FFFFFF"
				buttonHoverColor="#016B90"
				buttonHoverTextColor="#FFFFFF"
				dropdownBgColor="white"
			></Navbar>
			<SolutionHeroSection></SolutionHeroSection>
			<Paragraph></Paragraph>
			<Section1></Section1>
			<Section2></Section2>
			<Section3></Section3>
			<Section4></Section4>
			<Help></Help>
			<Footer textColor="#133366" iconColor="#133366" />
		</div>
	);
};

export default page;
