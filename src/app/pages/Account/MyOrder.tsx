import React, {useEffect, useState} from "react";
import img from "@/assets/products/solarPanel.png";
import Image from "next/image";
import { useGetMyOrdersQuery } from "@/redux/order/orderSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { MdFileDownload } from "react-icons/md";

import {
	subscribeToChannel,
	unsubscribeFromChannel,
} from "../../../utils/ably";
import InvoiceDetails from "@/components/Invoice";

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
		.toString()
		.padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} at ${date
		.getHours()
		.toString()
		.padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
		.getSeconds()
		.toString()
		.padStart(2, "0")}`;
	return formattedDate;
};

const MyOrder = () => {
	//@ts-ignore
	const { data: myOrders, refetch: refetchProducts } = useGetMyOrdersQuery();
	const [orderId,setOrderId] = useState('')
	const myOrderlist = myOrders?.data || [];
	const subscribeToProductCreate = () => {
		refetchProducts();
	};

	useEffect(() => {
		subscribeToChannel(
			"order-channel",
			"order-update",
			subscribeToProductCreate
		);
		return () => {
			unsubscribeFromChannel("product-channel");
		};
	}, []);

	return (
		<div className="flex flex-col gap-y-10">
			{myOrderlist.length === 0 ? (
				<p className="font-bold text-xl">No orders available.</p>
			) : (
				myOrderlist.map((order: any, index: any) => (
					<div className="border rounded-xl lg:max-w-screen-md" key={index}>
						<div className="px-3 lg:px-7 pt-5 flex flex-wrap justify-between">
							<p>Order placed on {formatDate(order?.orderDate)}</p>
							<p>Total ${order?.itemsPrice}</p>
							<Link href={`/pages/Order/View/${order?._id}`}><button className="btn btn-xs">View</button></Link>
							{order?.orderStatus == "Payment Pending" ? (
								<Link
									className="text-right cursor-pointer border px-2 text-red-400 text-sm font-bold"
									href={`/pages/AllProducts/CheckOut/payment/${order?._id}`}
								>
									Pay Now
								</Link>
							) : (
								<>
									<p onClick={()=>{
										setOrderId(order?._id)
										// @ts-ignore
										document && document?.getElementById('my_modal_3')?.showModal()}
									}
									   className="inline-flex items-center gap-1 text-xs text-red-400 bg-amber-50 p-2 rounded-xl cursor-pointer">
										Download Invoice <span className="text-base"><MdFileDownload /></span>
									</p>
								</>
							)}
						</div>
						{order.orderItems.map((item: any, index: any) => (
							<div className="" key={index}>
								<div className="grid grid-cols-4 p-7 items-center">
									<div className="flex items-center gap-3">
										<div className="bg-[#E9EBF8] w-[75px] h-[75px] lg:w-[160px] lg:h-[160px] flex justify-center items-center rounded-md">
											<div className="h-[60px] w-[60px] lg:h-[115px] lg:w-[115px]">
												<Image
													className=""
													src={item?.product?.image_url[0]}
													height={200}
													width={200}
													alt=""
												/>
											</div>
										</div>
									</div>
									<div className="col-span-3 ml-4 lg:ml-10">
										<div
											className={`${
												order?.orderStatus === "Processing"
													? "bg-blue-500"
													: order?.orderStatus === "Confirmed"
													? "bg-green-500"
													: order?.orderStatus === "Pickups"
													? "bg-green-500"
													: order?.orderStatus === "Delivered"
													? "bg-green-500"
													: order?.orderStatus === "Cancelled"
													? "bg-red-500"
													: "bg-gray-600"
											} rounded-full flex items-center justify-center w-32`}
										>
											<p className="text-white font-semibold text-[6px] lg:text-[10px] px-2 lg:px-3 py-1">
												{order?.orderStatus}
											</p>
										</div>
										<h1 className="text-[#191919] text-xs lg:text-base font-medium">
											{item?.product?.name}
										</h1>
									</div>
									<div className="flex justify-between items-center">
										<div className="flex w-24 h-6 lg:w-36 lg:h-[30px] items-center">
											<p className="text-[10px] lg:text-xl">
												Qnt: {item?.quantity}
											</p>
										</div>
										<p className="text-[#191919] text-[10px] lg:text-xl">
											${item?.price}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				))
			)}
			{/* You can open the modal using document.getElementById('ID').showModal() method */}
			<dialog id="my_modal_3" className="modal">
				<div className="modal-box bg-white w-full">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<InvoiceDetails orderId={orderId}/>
				</div>
			</dialog>
		</div>
	);
};

export default MyOrder;
