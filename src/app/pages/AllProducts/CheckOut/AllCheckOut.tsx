"use client";

import React, { useState } from "react";
import Customer from "./Customer";
import Products from "./Products";
import Summary from "./Summary";
import { useRouter, redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrderMutation } from "@/redux/order/orderSlice";
import { useGetUserAddressQuery } from "@/redux/user/signupAndLoginSlice";
import { removeProduct } from "@/redux/order/orderStore";
import { removeFromCart } from "@/redux/cart/cartStore";
import { useDeleteCartMutation } from "@/redux/cart/cartSlice";


const AllCheckOut = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [addError, setAddError] = useState("");

  const [createOrder] = useCreateOrderMutation();
  const [deleteCart] = useDeleteCartMutation();
  //@ts-ignore
  const items = useSelector((state: RootState) => state.order.products);
  
  //@ts-ignore
  const { data } = useGetUserAddressQuery();
   //@ts-ignore
  const address = data?.data;
  let adderssId = "";
  if (address?._id) {
    adderssId = address?._id;
  }

  let summarydata = {
    subtotal: 0,
    total: 0,
    shippingFee: 0,
  };
  summarydata.subtotal = items.reduce((total: any, item: any) => {
    return total + item.price * item.quantity;
  }, 0);
  if (items.length) {
    summarydata.shippingFee = 0;
  }

  summarydata.total = summarydata.subtotal + summarydata.shippingFee;

  const removeProductaction = (id: any) => {

    dispatch(removeProduct(id));

  };
  const order = {
    shippingInfo: adderssId,
    orderProducts: items,
  };
  const handleCheckoOut = async () => {
    if(!order.shippingInfo){
        setAddError("You have to add your address for place order")
    }
    else{
        setAddError("")
        //@ts-ignore
        const { data, error } = await createOrder(order);
        if (data?.statusCode == 200) {
          if(items?.length>0){
          items.forEach((item: any) => {
            dispatch(removeFromCart(item.id));
            //@ts-ignore
            const { data, error } = deleteCart(item.id);

          });
        }
          router.push(`/pages/AllProducts/CheckOut/payment/${data.data._id}`);
        }
        if (error.status == 500) {
        router.push("/");
        }
    }
  };
  return (
    <div className="lg:flex lg:gap-10 mb-20 lg:mb-40">
      <div className="lg:w-7/12">
        <Customer address={address}></Customer>
        <p className="px-2 text-red-600">{addError}</p>
        <Products items={items} onButtonClick={removeProductaction}></Products>
      </div>
      <div className="lg:border-r-2"></div>
      <div className="lg:w-5/12">
        <Summary data={summarydata} onButtonClick={handleCheckoOut}></Summary>
      </div>
    </div>
  );
};

export default AllCheckOut;
