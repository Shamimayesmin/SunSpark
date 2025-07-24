"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setOrderProducts } from "@/redux/order/orderStore";
import { useGetLoginUserQuery } from "@/redux/user/signupAndLoginSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Summary = () => {
  // Access cart state from Redux store
  const { cartItems, cartTotalAmount } = useAppSelector((state) => state.cart);
  //@ts-ignore
  const items = useSelector((state: RootState) => state?.order?.products);

  //@ts-ignore
  const { data, isLoading, isFetching } = useGetLoginUserQuery();
  const user = data?.data;

  const dispatch = useAppDispatch();
  const router = useRouter();
  // Calculate subtotal
  // const subtotal = cartTotalAmount.toFixed(2);
  const subtotal = items?.reduce((total: any, item: any) => {
    return total + Number(item.price) * Number(item.quantity);
  }, 0);
  // console.log(cartTotalAmount);

  // Define shipping fee
  const shippingFee = 0;

  const _gotoCheckout = () => {
    // @ts-ignore
    dispatch(setOrderProducts(items));
    router.push("/pages/AllProducts/CheckOut");
  };

  // Calculate total
  const total = (subtotal + shippingFee).toFixed(2);
  return (
    <>
      <h1 className="text-[#343434] text-xl font-semibold my-12">
        Checkout Summary
      </h1>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[#737373] text-sm">Subtotal</h1>
        <p className="text-[#343434] text-xl font-semibold">
          ${subtotal ? subtotal : 0}
        </p>
      </div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[#737373] text-sm">Shipping Fee</h1>
        <p className="text-[#343434] text-xl font-semibold">
          ${shippingFee ? shippingFee : 0}
        </p>
      </div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[#737373] text-sm">Total</h1>
        <p className="text-[#343434] text-xl font-semibold">
          ${total ? total : 0}
        </p>
      </div>
      <div className="flex justify-between items-center  mb-5">
        <h1 className="text-[#000] text-sm">Payable Total:</h1>
        <p className="text-[#153870] text-xl font-semibold">
          ${total ? total : 0}
        </p>
      </div>
      {/* <Link href="/"> */}
      <button
        disabled={items?.length === 0 || !user}
        onClick={_gotoCheckout}
        className="btn bg-[#153870] hover:bg-[#016B90] text-white mt-10 w-full border-none"
      >
        Proceed to Checkout
      </button>
      {!user && !isLoading && !isFetching && (
        <button
          onClick={() => router.push("/pages/User/Login")}
          className="btn bg-[#153870] hover:bg-[#016B90] text-white mt-10 w-full border-none"
        >
          Login to Checkout
        </button>
      )}
      {/* </Link> */}
    </>
  );
};

export default Summary;
