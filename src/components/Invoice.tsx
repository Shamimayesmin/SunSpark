"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainLogo from "../assets/E-commerce/logo main.png";
import Image from "next/image";
import ImageCons from "next/image";
import { useGetOrderByIdQuery } from "@/redux/order/orderSlice";
import { usePDF } from "react-to-pdf";
// import {PdfDocument} from "@ironsoftware/ironpdf";

import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

export default function InvoiceDetails({ orderId }: any) {
	const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

	const { data, error, isLoading } = useGetOrderByIdQuery(orderId);
	const order = data?.data;
	// const [searchParams, setSearchParams] = useSearchParams();
	console.log(order);
	// const orderId = searchParams.get("orderId")

	//Print the Invoice
	const printInvoice = async () => {
		// var printContents = document.getElementById("printArea").innerHTML;
		// var originalContents = document.body.innerHTML;
		//
		// document.body.innerHTML = printContents;
		//
		// window.print();
		//
		// document.body.innerHTML = originalContents;
		// toPDF()
		// ---------
		// const input = document.getElementById('printArea') as HTMLElement;
		// // // Specify the id of the element you want to convert to PDF
		// html2canvas(input).then((canvas:any) => {
		//     const imgData = canvas.toDataURL('image/png');
		//     const pdf = new jsPDF();
		//     const imgProps = pdf.getImageProperties(imgData);
		//
		//     pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
		//     pdf.save("download.pdf");
		//
		//     // Specify the name of the downloaded PDF file
		// });
		// ---------
		let downloadBtn = document.getElementById("download_button") as HTMLElement;
		downloadBtn.style.visibility = "hidden";
		const input = document.getElementById("printArea") as HTMLElement;
		html2canvas(input).then((canvas: any) => {
			const base64Image = canvas.toDataURL("image/png");
			console.log(base64Image);

			const img = new window.Image();
			img.src = base64Image;

			img.onload = function () {
				const imgWidth = img.width;
				const imgHeight = img.height;
				const pdf = new jsPDF();
				const pdfWidth = pdf.internal.pageSize.getWidth();
				const pdfHeight = pdf.internal.pageSize.getHeight();

				// Calculate aspect ratio and scaled dimensions
				const aspectRatio = imgWidth / imgHeight;
				let newImgHeight = pdfHeight;
				let newImgWidth = pdfHeight * aspectRatio;

				// Centering calculations
				let xPos = (pdfWidth - newImgWidth) / 2;
				let yPos = (pdfHeight - newImgHeight) / 2;

				pdf.addImage(
					base64Image,
					"PNG",
					xPos,
					yPos,
					newImgWidth,
					newImgHeight,
					undefined,
					"FAST"
				);

				// Save the PDF
				pdf.save("Invoice.pdf");
			};
		});
		downloadBtn.style.visibility = "visible";

		// ------------
		// const doc = new jsPDF({
		//     format: 'a4',
		//     unit: 'px',
		// });
		// doc.html(input, {
		//     async callback(doc) {
		//         await doc.save('document.pdf');
		//     },
		// });
		// ----------
		// Render the HTML string
		// const pdf = await PdfDocument.fromHtml(document.getElementById("printArea").innerHTML);
		//
		// // Export the PDF document
		// await pdf.saveAs("pdf-from-html.pdf");
	};

	return (
		<div
			id="printArea"
			ref={targetRef}
			className="page-content text-sm text-gray-900"
		>
			<div className="container mx-auto ">
				<div className="flex justify-center">
					<div className="">
						<div id="">
							<div className="grid grid-cols-12">
								<div className="col-span-12">
									<div className="border-b border-dashed p-4">
										<div className="flex gap-20">
											<div className="flex-grow mb-2">
												<Image
													src={MainLogo}
													className="card-logo card-logo-dark mb-8"
													alt="logo dark"
													height="50"
												/>

												<div className="mt-5">
													<h6 className="text-gray-900 text-xs font-semibold uppercase">
														Address
													</h6>
													<p
														className="text-gray-900 mb-1"
														id="address-details"
													>
														Rue du jura 3, 1023 Crissier, Switzerland
													</p>
													<p className="text-gray-900 mb-0" id="zip-code">
														<span>Zip-code: 90201</span>
													</p>
												</div>
											</div>
											<div className="flex-shrink-0 mt-3">
												<h6>
													<span className="text-gray-900 font-normal">
														Legal Registration No:
													</span>{" "}
													<span id="legal-register-no">not_available</span>
												</h6>
												<h6>
													<span className="text-gray-900 font-normal">
														Email:
													</span>{" "}
													<span id="email">info@solar-pvi.com</span>
												</h6>
												<h6>
													<span className="text-gray-900 font-normal">
														Website:
													</span>{" "}
													<Link href="#" className="text-blue-500" id="website">
														https://www.solar-pvi.com/
													</Link>
												</h6>
												<h6 className="mb-0">
													<span className="text-gray-900 font-normal">
														Contact No:
													</span>{" "}
													<span id="contact-no"> +41 21 561 53 15</span>
												</h6>
											</div>
										</div>
									</div>
								</div>
								<div className="col-span-12">
									<div className="p-4">
										<div className="grid grid-cols-2 gap-3">
											<div className="col-span-1">
												<p className="text-gray-900 mb-2 text-xs font-semibold uppercase">
													Invoice No
												</p>
												<h5 className="text-xs mb-0">
													#<span id="invoice-no">{orderId}</span>
												</h5>
											</div>
											<div className="col-span-1">
												<p className="text-gray-900 mb-2 text-xs font-semibold uppercase">
													Date
												</p>
												<h5 className="text-xs mb-0">
													<span id="invoice-date">
														{new Date(order?.orderDate).toDateString()}
													</span>
													<small className="text-gray-900" id="invoice-time">
														{new Date(order?.orderDate).toTimeString()}
													</small>
												</h5>
											</div>
											<div className="col-span-1">
												<p className="text-gray-900 mb-2 text-xs font-semibold uppercase">
													Payment Status
												</p>
												<span
													className="text-green-600 text-xs"
													id="payment-status"
												>
													{order?.paymentStatus}
												</span>
											</div>
											<div className="col-span-1">
												<p className="text-gray-900 mb-2 text-xs font-semibold uppercase">
													Total Amount
												</p>
												<h5 className="text-xs mb-0">
													$<span id="total-amount">{order?.totalPrice}</span>
												</h5>
											</div>
										</div>
									</div>
								</div>
								<div className="col-span-12">
									<div className="p-4 border-t border-dashed">
										<div className="grid grid-cols-2 gap-3">
											<div className="col-span-1">
												<h6 className="text-gray-900 text-xs font-semibold uppercase mb-3">
													Billing Address
												</h6>
												<p className="font-medium mb-2" id="billing-name">
													{order?.shippingInfo?.fullName}
												</p>
												<p
													className="text-gray-900 mb-1"
													id="billing-address-line-1"
												>
													{order?.shippingInfo?.house},{" "}
													{order?.shippingInfo?.street},{" "}
													{order?.shippingInfo?.city},{" "}
													{order?.shippingInfo?.state},{" "}
													{order?.shippingInfo?.zipCode}
												</p>
												<p className="text-gray-900 mb-1">
													<span>Phone: +</span>
													<span id="billing-phone-no">
														{order?.shippingInfo?.phoneNumber}
													</span>
												</p>
												{/* <p className="text-gray-800 mb-0"><span>Tax: </span><span id="billing-tax-no">12-3456789</span></p> */}
											</div>
											<div className="col-span-1">
												<h6 className="text-gray-900 text-xs font-semibold uppercase mb-3">
													SHIPPING Address
												</h6>
												<p className="font-medium mb-2" id="billing-name">
													{order?.shippingInfo?.fullName}
												</p>
												<p
													className="text-gray-900 mb-1"
													id="billing-address-line-1"
												>
													{order?.shippingInfo?.house},{" "}
													{order?.shippingInfo?.street},{" "}
													{order?.shippingInfo?.city},{" "}
													{order?.shippingInfo?.state},{" "}
													{order?.shippingInfo?.zipCode}
												</p>
												<p className="text-gray-800 mb-1">
													<span>Phone: +</span>
													<span id="billing-phone-no">
														{order?.shippingInfo?.phoneNumber}
													</span>
												</p>
												{/* <p className="text-gray-800 mb-0"><span>Tax: </span><span id="billing-tax-no">12-3456789</span></p> */}
											</div>
										</div>
									</div>
								</div>
								<div className="col-span-12">
									<div className="p-4">
										<div className="overflow-x-auto">
											<table className="table-auto text-center w-full align-middle mb-0">
												<thead>
													<tr className="border-dashed border-b">
														<th
															scope="col"
															className={"pb-3"}
															style={{ width: "50px" }}
														>
															#
														</th>
														<th className={"pb-3 px-1"} scope="col">
															Product Name
														</th>
														<th className={"pb-3 px-1"} scope="col">
															Price
														</th>
														<th className={"pb-3 px-1"} scope="col">
															Quantity
														</th>
														<th className={"pb-3 px-1 text-end"} scope="col">
															Amount
														</th>
													</tr>
												</thead>
												<tbody id="products-list">
													{order?.orderItems &&
														order?.orderItems.map((item: any, index: any) => (
															<tr>
																<th scope="row">{index + 1}</th>
																<td className="text-start">
																	<span className="font-medium">
																		{item?.product?.name}
																	</span>
																	<p className="text-gray-900 mb-0">
																		{item?.product?.short_description
																			?.split(" ")
																			.slice(0, 8)
																			.join(" ")}
																		...
																	</p>
																</td>
																<td>${item?.price}</td>
																<td>{item?.quantity}</td>
																<td className="text-end">
																	${Number(item.price) * Number(item?.quantity)}
																</td>
															</tr>
														))}
												</tbody>
											</table>
										</div>
										<div className="border-t border-dashed mt-4">
											<table
												className="table-auto w-full align-middle mb-0 ml-auto"
												style={{ width: "250px" }}
											>
												<tbody>
													<tr>
														<td>Sub Total</td>
														<td className="text-end">${order?.itemsPrice}</td>
													</tr>
													{/* <tr>
                        <td>Estimated Tax (12.5%)</td>
                        <td className="text-end">$44.99</td>
                      </tr> */}
													{/* <tr>
                        <td>Discount <small className="text-gray-800">(VELZON15)</small></td>
                        <td className="text-end">- $53.99</td>
                      </tr> */}
													<tr>
														<td>Shipping Charge</td>
														<td className="text-end ">
															${order?.shippingPrice}
														</td>
													</tr>
													<tr className="border-t border-dashed text-sm">
														<td className={"pt-2"} scope="row">
															Total Amount
														</td>
														<td className="text-end pt-2">
															${order?.totalPrice}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div className="mt-3">
											<h6 className="text-gray-900 text-xs font-semibold uppercase mb-3">
												Payment Details:
											</h6>
											<p className="text-gray-900 mb-1">
												Payment Method:{" "}
												<span className="font-medium" id="payment-method">
													{order?.paymentMethod}
												</span>
											</p>
											{/* <p className="text-gray-800 mb-1">
                    Card Holder:{" "}
                    <span className="font-medium" id="card-holder-name">{order?.shippingInfo?.fullName}</span>
                  </p> */}
											{/* <p className="text-gray-800 mb-1">
                    Card Number:{" "}
                    <span className="font-medium" id="card-number">xxx xxxx xxxx 1234</span>
                  </p> */}
											<p className="text-gray-900">
												Total Amount:{" "}
												<span className="font-medium" id="">
													${order?.totalPrice}
												</span>
											</p>
										</div>
										{/* <div className="mt-4">
                  <div className="alert alert-info">
                    <p className="mb-0">
                      <span className="font-semibold">NOTES:</span>
                      <span id="note"> All accounts
                        are to be paid within 7 days from receipt of invoice. To
                        be paid by cheque or credit card or direct payment online.
                        If account is not paid within 7 days the credits details
                        supplied as confirmation of work undertaken will be
                        charged the agreed quoted fee noted above.
                      </span>
                    </p>
                  </div>
                </div> */}
										<div
											id="download_button"
											className="flex justify-center items-center mt-4"
										>
											<Link
												href="#"
												onClick={printInvoice}
												className="btn btn-success"
											>
												Download
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
