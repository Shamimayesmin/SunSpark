"use client";

import { useState } from "react";
// import TabContent from "./TabContent";
import { IoIosArrowForward } from "react-icons/io";
import MyAccount from "./MyAccount";
import MyOrder from "./MyOrder";
import Address from "./Address";
import ChangePassword from "./ChangePassword";

const Tab = () => {
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
		<div className="lg:max-w-screen-xl lg:min-h-screen mx-auto mb-10">
			<div className="flex lg:flex-row flex-col lg:gap-x-10 gap-y-5">
				<div className="tab grid grid-cols-2 lg:grid-cols-1 lg:gap-0 gap-x-3 w-full lg:w-1/4">
					<button
						className={`flex items-center justify-center cursor-pointer rounded-md w-[100px] lg:w-56 py-2 lg:py-4 border-2 border-[#153870] text-[16px] lg:text-xl font-semibold lg:font-bold mb-7 text-[#153870] ${
							activeTab === "tab1"
								? "border-2 border-[#153870] bg-[#153870] text-white"
								: ""
						}`}
						data-city="tab1"
						onClick={() => openCity("tab1")}
					>
						My Orders
					</button>
					<button
						className={`flex items-center justify-center cursor-pointer rounded-md w-[100px] lg:w-56 py-2 lg:py-4 border-2 border-[#153870] text-[#153870] text-[16px] lg:text-xl font-semibold lg:font-bold mb-7  ${
							activeTab === "tab2"
								? "border-2 border-solid border-[#153870] bg-[#153870] text-white"
								: ""
						}`}
						data-city="tab2"
						onClick={() => openCity("tab2")}
					>
						My Account
					</button>

					<button
						className={`flex items-center justify-center cursor-pointer rounded-md w-[10
              0px] lg:w-56 py-2 border-2 border-[#153870] lg:py-4 text-[16px] lg:text-xl font-semibold lg:font-bold mb-7 text-[#153870] ${
								activeTab === "tab3"
									? "border-2  border-[#153870] bg-[#153870] text-white"
									: ""
							}`}
						data-city="tab3"
						onClick={() => openCity("tab3")}
					>
						Address
					</button>
					<button
						className={`flex items-center justify-center cursor-pointer rounded-md w-[10
              0px] lg:w-56 py-2 lg:py-4 border-2 border-[#153870] text-[16px] lg:text-xl font-semibold lg:font-bold mb-7 text-[#153870] ${
								activeTab === "tab4"
									? "border-2 border-[#153870] bg-[#153870] text-white"
									: ""
							}`}
						data-city="tab4"
						onClick={() => openCity("tab4")}
					>
						Change Password
					</button>
				</div>

				<div className="lg:w-3/4 w-full lg:mt-0 mt-32">
					<div
						id="tab1"
						className="tabcontent"
						style={{ display: activeTab === "tab1" ? "block" : "none" }}
					>
						<MyOrder></MyOrder>
					</div>

					<div
						id="tab2"
						className="tabcontent "
						style={{ display: activeTab === "tab2" ? "block" : "none" }}
					>
						<MyAccount></MyAccount>
					</div>
					<div
						id="tab3"
						className="tabcontent "
						style={{ display: activeTab === "tab3" ? "block" : "none" }}
					>
						<Address />
					</div>
					<div
						id="tab4"
						className="tabcontent "
						style={{ display: activeTab === "tab4" ? "block" : "none" }}
					>
						<ChangePassword />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tab;
