"use client";

import React, { useState } from "react";
import level1 from "../../../../assets/solution/Level1.png";
import level2 from "../../../../assets/solution/Level2.png";
import Image from "next/image";
import Level1 from "./Level1";
import Level2 from "./Level2";

const Level = () => {
	const [activeTab, setActiveTab] = useState("tab1");

	const handleTabChange = (tabId: any) => {
		setActiveTab(tabId);
	};
	return (
		<div className="bg-[#F9FDFF]">
			<div
				role="tablist"
				className="tabs px-4 lg:px-0 pt-10 lg:max-w-screen-xl mx-auto"
			>
				<label
					htmlFor="tab1"
					className={`flex items-center justify-center cursor-pointer rounded-md px-7 py-2 lg:mr-10 w-40 lg:w-48 text-sm lg:text-xl font-bold text-[#153870] ${
						activeTab === "tab1"
							? "border-2 border-dashed border-[#153870]"
							: ""
					}`}
					onClick={() => handleTabChange("tab1")}
				>
					<Image
						src={level1}
						className="h-6 w-6 lg:h-10 lg:w-10 mr-4"
						alt=""
					></Image>
					Level 1
				</label>
				<input
					type="radio"
					name="my_tabs_1"
					role="tab"
					className="tab sr-only"
					id="tab1"
					aria-label="Level 1"
					defaultChecked={activeTab === "tab1"}
				/>
				<div role="tabpanel" className="tab-content lg:p-10 ">
					{activeTab === "tab1" && <Level1 />}
				</div>

				<label
					htmlFor="tab2"
					className={`flex items-center cursor-pointer rounded-md px-7 py-2 w-40 lg:w-48 text-sm lg:text-xl font-bold text-[#153870] ${
						activeTab === "tab2"
							? "border-2 border-dashed border-[#153870]"
							: ""
					}`}
					onClick={() => handleTabChange("tab2")}
				>
					<Image
						src={level2}
						className="h-6 w-6 lg:h-10 lg:w-10 mr-4"
						alt=""
					></Image>
					Level 2
				</label>
				<input
					type="radio"
					name="my_tabs_1"
					role="tab"
					id="tab2"
					className="tab sr-only"
					aria-label="Tab 2"
					defaultChecked={activeTab === "tab2"}
				/>
				<div role="tabpanel" className="tab-content lg:p-10">
					{activeTab === "tab2" && <Level2 />}
				</div>
			</div>
		</div>
	);
};

export default Level;
