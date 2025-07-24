"use client";

import { useState } from "react";
import Description from "./Description";
import Specification from "./Specification";
import Reviews from "./Reviews";
import { Revalia } from "next/font/google";


const OtherDetails = ({productId}:any) => {
	console.log("productId", productId);
    const [activeTab, setActiveTab] = useState("tab1");

	const openCity = (cityName: string) => {
		document.querySelectorAll(".tabcontent").forEach((tab) => {
			(tab as HTMLElement).style.display = "none";
		});

		document.querySelectorAll(".tablinks").forEach((link) => {
			(link as HTMLElement).classList.remove("active");
		});

		const cityElement = document.getElementById(cityName);
		if (cityElement) {
			(cityElement as HTMLElement).style.display = "block";
			setActiveTab(cityName);
		}
	};
    return (
        <div className="lg:mt-20 mt-10">
           <div className="tab flex justify-evenly border-b-2 gap-3">
				<button
					className={`flex items-center justify-center cursor-pointer text-sm lg:text-xl font-semibold text-[#153870] ${
						activeTab === "tab1"
							? "border-b-2  border-[#153870]"
							: ""
					}`}
					data-city="tab1"
					onClick={() => openCity("tab1")}
				>
					Description
				</button>
				<button
					className={`flex items-center justify-center cursor-pointer text-sm lg:text-xl font-semibold text-[#153870] ${
						activeTab === "tab2"
							? "border-b-2 border-[#153870]"
							: ""
					}`}
					data-city="tab2"
					onClick={() => openCity("tab2")}
				>
					Specification
				</button>
				<button onClick={() => openCity("tab3")}
					className={`flex items-center justify-center cursor-pointer text-sm lg:text-xl font-semibold text-[#153870] ${
					activeTab === "tab3" ? "border-b-2  border-[#153870]" : ""}`} data-city="tab3">
					Reviews<span>(21)</span> 
				</button>
				
			</div>  
            <div className="lg:mt-10 mt-4">
				<div
					id="tab1"
					className="tabcontent"
					style={{ display: activeTab === "tab1" ? "block" : "none" }}
				>
					<Description productId={productId}/>
				</div>

				<div
					id="tab2"
					className="tabcontent"
					style={{ display: activeTab === "tab2" ? "block" : "none" }}
				>
					<Specification productId={productId}/>
				</div>

				<div
					id="tab3"
					className="tabcontent"
					style={{ display: activeTab === "tab3" ? "block" : "none" }}
				>
					<Reviews productId={productId}/>
				</div>
				
			</div>
        </div>
    );
};

export default OtherDetails;