import Link from 'next/link';
import React from 'react';
import img from "@/assets/checkout/confirmOrder.png";
import Image from 'next/image';

const page = ({ params }: any) => {
    const orderId = params?.orderId || {};
    console.log(orderId);
    
    return (
        <div className='px-4 lg:px-0 lg:max-w-screen-xl mx-auto bg-[#FFFFFF]'>
           <div className="bg-white">
            <div className="flex flex-col items-center justify-center py-10 ">
                <h3 className="text-[#343434] font-semibold text-xl lg:text-3xl mb-2">
                Your order is confirmed
                </h3>
                <Image src={img} alt="" />
                <p className="text-[#595959] text-base lg:text-xl font-medium mb-1">
                Thank you for purchase
                </p>
                <p className="text-[#595959] text-base lg:text-xl font-medium">
                Order id is: <span className="text-[#153870] font-bold">{orderId}</span>
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
        </div>
    );
};

export default page;