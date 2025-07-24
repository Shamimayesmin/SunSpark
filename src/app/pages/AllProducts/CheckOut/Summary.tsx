"use client";

import React, { useEffect } from "react";
import img from "../../../../assets/checkout/confirmOrder.png";
import Image from "next/image";

//@ts-ignore
const Summary = ({onButtonClick, data}) => {
  return (
    <div>
      <h1 className="text-[#343434] text-xl font-semibold my-12">
        Checkout Summary
      </h1>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[#737373] text-sm">Subtotal</h1>
        <p className="text-[#343434] text-xl font-semibold">{data.subtotal}</p>
      </div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[#737373] text-sm">Shipping Fee</h1>
        <p className="text-[#343434] text-xl font-semibold">{data.shippingFee}</p>
      </div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[#737373] text-sm">Total</h1>
        <p className="text-[#343434] text-xl font-semibold">{data.total}</p>
      </div>
      <div className="flex justify-between items-center  mb-5">
        <h1 className="text-[#000] text-sm">Payable Total:</h1>
        <p className="text-[#153870] text-xl font-semibold">{data.total}</p>
      </div>
      <button className="btn bg-[#153870] hover:bg-[#016B90] border-none text-white mt-10 w-full" 
        onClick={onButtonClick}>
        Place Order
      </button>
      
    </div>
  );
};

export default Summary;
