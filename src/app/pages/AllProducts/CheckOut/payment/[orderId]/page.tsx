"use client";

import React, { useState } from "react";
import Nav from "../../../../E-Commerce/Nav";
import Footer from "@/components/common/Footer";
import img1 from "@/assets/Paynow.png";
import img2 from "@/assets/office.png";
import { useUpdateOrderMutation, useGetOrderByIdQuery, useCreatePaymentMutation, 
  useCreateNotificationMutation, useCreatePayInOfficeMutation} from "@/redux/order/orderSlice";
import SccessModalComp from "../SuccessModal";
import Image from "next/image";

const page = ({ params }: any) => {
  const orderid = params?.orderId || {};
  const [isModalVisible, setModalVisible] = useState(false);

  const { data, error } = useGetOrderByIdQuery(orderid);
  const order = data?.data;

  const totalQuantity = order?.orderItems.reduce((total: any, item: any) => {
    return total + item.quantity;
  }, 0);

  //@ts-ignore
  const [updateOrder] = useUpdateOrderMutation();
  const [createPayment] = useCreatePaymentMutation();
  const [createPayInOffice] = useCreatePayInOfficeMutation();
  const [createNotification] = useCreateNotificationMutation();

  const handlePaymentMethod = async (value: string) => {
    if (value === "PayInOffice") {
      const notiData = {
        orderId: orderid,
        message: "New order is created",
      };
      //@ts-ignore
      const { data, error } = await createPayInOffice({ id: orderid });
      if (data) {
        setModalVisible(true);
        await createNotification(notiData);
      }
    } else if (value === "PayNow") {
      //@ts-ignore
      const { data, error } = await createPayment({ id: orderid });
      window.location.href = data.data;
    }
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const blurBackgroundStyle: React.CSSProperties = {
    filter: "blur(3px)",
    pointerEvents: "none",
  };

  return (
    <div
      className="bg-[#FFFFFF]"
      // style={isModalVisible ? blurBackgroundStyle : {}}
    >
      <Nav></Nav>
      <div className="px-4 lg:px-0 lg:max-w-screen-xl mx-auto">
        <div className="lg:flex justify-between min-h-[40vh]">
          <div className="lg:flex lg:w-2/3 gap-x-5">
            <div
              className=""
              onClick={() => handlePaymentMethod("PayInOffice")}
            >
              <div className="bg-[#E6F5FA] px-12 py-10 rounded-lg flex flex-col items-center justify-center gap-y-3  border-2 border-blue-800  cursor-pointer">
                <Image className="h-20 w-20" src={img2} alt=""></Image>
                <h3 className="text-[#153870] text-xl font-semibold mt-4">
                  Pay in our office address
                </h3>
              </div>
            </div>

            <div onClick={() => handlePaymentMethod("PayNow")}>
              <div className="bg-[#E6F5FA] px-12 py-10 rounded-lg flex flex-col items-center justify-center gap-y-3  border-2 border-blue-800  cursor-pointer mt-10 lg:mt-0">
                <Image className="h-20 w-20" src={img1} alt=""></Image>
                <h3 className="text-[#153870] text-xl font-semibold mt-4">
                  Pay Now
                </h3>
              </div>
            </div>
          </div>
          <div className=" mx-auto lg:w-auto mt-10 lg:mt-0 ">
            <h1 className="text-[#343434] text-xl font-semibold border-b-2 pb-1">
              Order Summary
            </h1>
            <div className="flex justify-between items-center mb-5 mt-2">
              <h2 className="text-[#737373] text-sm">Subtotal</h2>
              <p className="text-[#343434] text-xl font-semibold">
                {order?.totalPrice}
              </p>
            </div>
            <div className="flex justify-between items-center mb-5 mt-2">
              <h2 className="text-[#737373] text-sm">Total order item</h2>
              <p className="text-[#343434] text-xl font-semibold">
                {totalQuantity}
              </p>
            </div>
            <div className="flex justify-between items-center  mb-5">
              <h1 className="text-[#000] text-sm">Payable Total:</h1>
              <p className="text-[#153870] text-xl font-semibold">
                {order?.totalPrice}
              </p>
            </div>
          </div>
        </div>
        <Footer textColor="#133366" iconColor="#133366" />
      </div>
      <SccessModalComp
        orderid={orderid}
        isVisible={isModalVisible}
        onClose={closeModal}
      />
    </div>
  );
};

export default page;
