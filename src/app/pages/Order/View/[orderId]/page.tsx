"use client";
import React from "react";
import Nav from "../../../E-Commerce/Nav";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import { useGetOrderByIdQuery } from "@/redux/order/orderSlice";
import Link from "next/link";

const page = ({ params }: any) => {
	const orderId = params?.orderId || "";
	//@ts-ignore
	const { data, error } = useGetOrderByIdQuery(orderId);
	const order = data?.data;
	let totalQuantitu = order?.orderItems?.reduce((total: any, item: any) => {
		return total + item.quantity;
	}, 0);
	let totalPrice = order?.orderItems?.reduce((total: any, item: any) => {
		return total + item.price * item.quantity;
	}, 0);
	let shippingFee = 0;

	return (
		<div className="bg-[#FFFFFF]">
			<Nav></Nav>
			<div className="px-4 lg:px-0 lg:max-w-screen-xl mx-auto ">
				<div>
					<p>
						Order ID:{" "}
						<span className=" font-bold text-[#153870]">#{orderId}</span>
					</p>
				</div>
				<div className="py-8 border-b-2">
					<p className="font-semibold text-2xl">Order Status</p>
					<ul className="steps steps-vertical lg:steps-horizontal py-10 lg:w-2/3 w-full">
						<li className="step step-primary text-sm">
							Order Recieved{" "}
							<span className="text-xs">Jul 16, 2022 3:30 PM</span>
						</li>
						<li className="step step-primary text-sm">
							Order Processing{" "}
							<span className="text-xs">Jul 16, 2022 3:30 PM</span>
						</li>
						<li className="step text-sm step-primary">
							Order Shipped{" "}
							<span className="text-xs">Jul 16, 2022 3:30 PM</span>{" "}
						</li>
						<li className="step text-sm">
							Order Delivered{" "}
							<span className="text-xs">Jul 16, 2022 3:30 PM</span>{" "}
						</li>
					</ul>
				</div>
				<div className="py-8 border-b-2">
					<p className="font-semibold text-2xl pb-6">Delivery Address</p>
					<p className="pb-4">
						<span className=" font-semibold text-xl">Home:</span>{" "}
						{order?.shippingInfo?.street},{order?.shippingInfo?.state},
						{order?.shippingInfo?.city}, {order?.shippingInfo?.country}
					</p>
					<p>
						<span className=" font-semibold text-xl">Phone:</span>{" "}
						{order?.shippingInfo?.phoneNumber}{" "}
						<span className="pl-4 font-semibold text-xl">Email:</span>{" "}
						{order?.user?.email}
					</p>
				</div>
				<div className="py-8 border-b-2">
					<p className="font-semibold text-2xl pb-6">Order Summary</p>
					{order?.orderItems.map((item: any, index: any) => (
						<div className=" border-b" key={index}>
							<div className="grid grid-cols-5 gap-3 p-7 items-center">
								<div className="flex items-center gap-3">
									<div className="bg-[#E9EBF8] w-[75px] h-[75px] lg:w-[160px] lg:h-[160px] flex justify-center items-center rounded-md">
										<div className="h-[60px] w-[60px] lg:h-[115px] lg:w-[115px]">
											<Image
												src={item?.product?.image_url[0]}
												height={200}
												width={200}
												alt="img"
											/>
										</div>
									</div>
								</div>
								<div className="">
									<h1 className="text-[#191919] text-xs lg:text-base font-medium">
										{item?.product?.name}
									</h1>
								</div>
								<div className="lg:ml-12">
									<p className="">
										Quantity:{" "}
										<span className=" font-semibold text-xl">
											{item?.quantity}
										</span>
									</p>
								</div>
								<div className="">
									<p className="text-[#191919]">
										Price:{" "}
										<span className="font-semibold text-xl">
											${item?.price}
										</span>
									</p>
								</div>
								<div className="">
									{order?.orderStatus == "Delivered" ? (
										<Link
											href={`/pages/AllProducts/RatingAndReview/${item?.product?._id}`}
											className="text-[#191919] text-xs lg:text-base font-medium"
										>
											Rating and Review
										</Link>
									) : (
										<></>
									)}
								</div>
							</div>
						</div>
					))}
					<div className=" flex justify-end pt-6">
						<div className=" lg:w-1/3">
							<div className=" flex justify-between pb-4">
								<p>Subtotal ({totalQuantitu} Item):</p>
								<p className="font-semibold text-xl">${totalPrice}</p>
							</div>
							<div className=" flex justify-between pb-4">
								<p>Shipping Fee:</p>
								<p className="font-semibold text-xl">${shippingFee}</p>
							</div>
							<div className=" flex justify-between pb-4">
								<p>Total:</p>
								<p className="font-semibold text-xl">
									${totalPrice + shippingFee}
								</p>
							</div>
							<div className=" flex justify-between pb-4">
								<p>Payable Total: </p>
								<p className="font-semibold text-xl">
									${totalPrice + shippingFee}
								</p>
							</div>
						</div>
					</div>
				</div>

				<Footer textColor="#133366" iconColor="#133366"></Footer>
			</div>
		</div>
	);
};

export default page;
