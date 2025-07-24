import React from "react";
import Nav from "../E-Commerce/Nav";
import Tab from "./Tab";
import Footer from "@/components/common/Footer";

const page = () => {
	return (
		<div className="bg-[#FFFFFF]">
			<Nav></Nav>
			<div className="px-4 lg:px-0 lg:max-w-screen-xl mx-auto ">
				<Tab></Tab>
				<Footer textColor="#133366" iconColor="#133366"></Footer>
			</div>
		</div>
	);
};

export default page;
