"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrderMutation } from "@/redux/order/orderSlice";
import { removeProduct } from "@/redux/order/orderStore";
// import { RootState } from "@reduxjs/toolkit/query";

const MyAccount = () => {
	//@ts-ignore
	const user = useSelector((state: RootState) => state.user.user);
	// console.log("user", user);

	// const [selectedGender, setSelectedGender] = useState<string>("");

	// const handleSelection = (gender: string) => {
	// 	setSelectedGender(gender);
	// };
	return (
		<>
			<h1 className="text-2xl mb-4 text-[#153870] font-bold">
				Account information
			</h1>
			<div className="lg:w-1/2 w-full lg:p-6 p-3 border-2 border-dotted">
				<div className="mt-2 lg:mt-0 ">
					<p className="text-sm mb-2">
						<span className="text-[#153870] text-base font-medium mr-2">
							First Name:{" "}
						</span>
						{user?.firstname} {user?.lastname}
					</p>

					<p className="text-sm mb-2">
						<span className="text-base font-medium text-[#153870] mr-2">
							Email:{" "}
						</span>
						{user?.email}
					</p>
					<p className="text-sm mb-2">
						<span className="text-base font-medium text-[#153870] mr-2">
							Phone:{" "}
						</span>
						{user?.phone ? user.phone : "N/A"}
					</p>
				</div>

				{/* <div className="lg:mt-9 mt-5">
					<input
						type="submit"
						value="Update Profile"
						className="btn bg-[#153870] hover:bg-[#016B90] text-white w-1/2 lg:w-1/3"
					/>
				</div> */}
			</div>
		</>
	);
};

export default MyAccount;
