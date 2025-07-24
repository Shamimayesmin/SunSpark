import { useState } from 'react';
import Image from 'next/image'; // Adjust import according to your setup
// import img from "../../../../assets/checkout/confirmOrder.png";
import img from "@/assets/checkout/confirmOrder.png";
import Link from 'next/link';


const SccessModalComp = ({isVisible, onClose , orderid }:any) => {
  console.log("orderId" , orderid);
  if (!isVisible) return null;

  return (
    <dialog id="my_modal_3" className="modal bg-white opacity-100" open>
      <div className="modal-box lg:w-8/12 lg:max-w-2xl bg-white">
        <div className="flex flex-col items-center justify-center py-10 ">
          <h3 className="text-[#343434] font-semibold text-xl lg:text-3xl mb-2">
            Your order is confirmed
          </h3>
          <Image src={img} alt="" />
          <p className="text-[#595959] text-base lg:text-xl font-medium mb-1">
            Thank you for purchase
          </p>
          <p className="text-[#595959] text-base lg:text-xl font-medium">
            Order id is: <span className="text-[#153870] font-bold">{orderid}</span>
          </p>
          <p className="text-[#8A8A8A] text-sm lg:text-base my-4">
            You will receive an order confirmation mail with details of your order
          </p>
          <Link href="/pages/AllProducts/Products" className="btn mt-5 border-none *:btn text-[8px] bg-[#153870] hover:bg-[#016B90] text-white btn-xs lg:btn-sm">
            Continue Shopping
          </Link>
          <Link href="/pages/Account" className="btn mt-5 border-none *:btn text-[8px] bg-[#153870] hover:bg-[#016B90] text-white btn-xs lg:btn-sm">
              My Order
          </Link>
        </div>
      </div>
    </dialog>
  );
};
export default SccessModalComp;