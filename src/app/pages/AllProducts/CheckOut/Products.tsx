"use client";
import React, { useEffect } from "react";
import img from "@/assets/products/solarPanel.png";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeProduct } from "@/redux/order/orderStore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";


//@ts-ignore
const Products = ({onButtonClick, items}) => {

  const removeProductaction = (id:any) => {
    onButtonClick(id)
  };

  
  return (
    <div>
      {items.map((item:any, index:any) => {
        return (
          <div className="border rounded-xl mt-10 grid grid-cols-4 p-2 lg:p-7 items-center" key={index}>
            <div className="bg-[#E9EBF8] w-[75px] h-[75px]  lg:w-[160px] lg:h-[160px] flex justify-center items-center rounded-md">
              <div className="h-[60px] w-[60px] lg:h-[115px] lg:w-[115px]">
                <Image className="" src={item.image} width={200} height={300} alt="" />
              </div>
            </div>
            <div className="col-span-3  ml-4 lg:ml-10">
              <div className="flex justify-between  mb-5 lg:mb-16">
                <h1 className="text-[#191919] text-xs lg:text-base font-medium">
                  {item.name}
                </h1>
                <RiDeleteBinLine onClick={() => removeProductaction(item.id)}
                  className="text-[#8E98A8] cursor-pointer lg:h-5 lg:w-5"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[10px] lg:text-xl">Qty: {item.quantity}</p>
                <p className="text-[#191919]  text-[10px] lg:text-xl">
                {item?.price}x{item?.quantity} ={" "}{item?.price*item?.quantity}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
