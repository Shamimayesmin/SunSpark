"use client";
import img from "@/assets/products/solarPanel.png";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/cart/cartStore";
import {
  addOrderProduct,
  resetProduct,
  setOrderProducts,
} from "@/redux/order/orderStore";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetMultipleProductsWithIdQuery } from "@/redux/product/productSlice";
import { useDeleteCartMutation } from "@/redux/cart/cartSlice";
import { getProductById } from "@/axios/backend_helper";
import toast, { Toaster } from "react-hot-toast";

const Products = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);
  // console.log(cartItems);

  const itemsId = cartItems.map((item) => item.id);
  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching } =
    useGetMultipleProductsWithIdQuery(itemsId);
  const [check, setCheck] = useState(false);
  console.log(check);
console.log(cartItems)
  if (!check) {
    setCheck(true);
    dispatch(resetProduct());
  }
  const [deletrCart] = useDeleteCartMutation();

  useEffect(() => {
    if (data && !isLoading && !isFetching) {
    }
  }, [data, itemsId]);
  console.log("data", data);

  const handleRemoveFromCart = (itemId: any) => {
    dispatch(removeFromCart(itemId));
    //@ts-ignore
    const { data, error } = deletrCart(itemId);
  };

  // const handleIncrementQuantity = (id:any) => {
  // 	dispatch(incrementQuantity({ id }));
  // };

  // const handleDecrementQuantity = (id:any) => {
  // 	dispatch(decrementQuantity({ id }));
  // };
  //@ts-ignore
  const items = useSelector((state: RootState) => state.order.products);

  const updateFinalProducts = async (item: any, quantity: any) => {
    //@ts-ignore
    dispatch(
      addOrderProduct({
        id: item._id,
        name: item.name,
        price: item.price,
        quantity: quantity,
        image: item.image_url[0],
      })
    );
  };

  useEffect(() => {
    const productsData = data?.data?.filter((item: any) => {
      return selectedProductIds.some((i: any) => i === item._id);
    });

    const finalProducts = productsData?.map((item: any) => {
      return {
        id: item._id,
        name: item.name,
        price: item.price,
        quantity: cartItems.find((i: any) => i.id === item._id)?.quantity,
        image: item.image_url[0],
      };
    });

    dispatch(setOrderProducts(finalProducts));
  }, [cartItems, selectedProductIds]);

  const handleIncrementQuantity = async (item: any) => {
    // const
    const loadingToast = toast.loading("Increasing quantity...");
    const { id, quantity } = item;

    const qtyToAdd = 1;
    const productData = await getProductById(id);

    // if (Number(quantity) + qtyToAdd > Number(productData?.stock)) {
    //   toast.error(`Please select quantity less than ${productData?.stock}`, {
    //     id: loadingToast,
    //   });
    //   return;
    // }

    dispatch(incrementQuantity({id}));
    toast.success("Quantity increased", { id: loadingToast });
  };

  const handleDecrementQuantity = (item: any) => {
    const { id } = item;

    dispatch(decrementQuantity({id}));
  };

  console.log(cartItems);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {!isLoading &&
        !isFetching &&
        cartItems?.map((item: any, index: any) => {
          const itemData = data?.data?.find(
            (product: any) => product?._id === item?.id
          );
          // const isChecked = items.some((i:any) => i.id === item.id);
          return (
            <div
              className="border rounded-xl mb-10  grid grid-cols-4 p-2 lg:p-7 items-center"
              key={index}
            >
              <div className="flex items-center gap-3">
                <input
                  onClick={() => {
                    if (selectedProductIds?.includes(item.id)) {
                      setSelectedProductIds(
                        selectedProductIds?.filter((id) => id !== item.id)
                      );
                    } else {
                      setSelectedProductIds([...selectedProductIds, item.id]);
                    }
                  }}
                  checked={selectedProductIds?.includes(item.id)}
                  type="checkbox"
                  name=""
                  id=""
                  className="lg:h-6 lg:w-6 border border-[#D7DAED] bg-[#F5F7FF]"
                />
                <div className="w-[75px] h-[75px]  lg:w-[160px] lg:h-[160px] flex justify-center items-center rounded-md">
                  <div className="h-[60px] w-[60px] lg:h-[115px] lg:w-[115px]">
                    {itemData?.image_url[0] && (
                      <img
                        className="w-full h-full object-cover"
                        src={itemData?.image_url[0]}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-3 ml-4 lg:ml-10">
                <div className="flex justify-between mb-1 lg:mb-2">
                  <h1 className="text-[#191919] text-xs lg:text-base font-medium">
                    {itemData?.name}
                  </h1>

                  <RiDeleteBinLine
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-[#8E98A8] cursor-pointer lg:h-5 lg:w-5"
                  />
                </div>
                <div className="lg:mb-12 mb-4 text-xs">
                  Available in stock: {itemData?.stock}
                </div>
                <div className="flex justify-between items-center">
                  <div className="border rounded-md flex w-24 h-6 lg:w-36 lg:h-[30px]  justify-evenly items-center">
                    <button
                      onClick={() => handleDecrementQuantity(item)}
                      className="border-r text-[6px] lg:text-xs font-semibold pr-4"
                    >
                      <FaMinus />
                    </button>
                    <p className="text-[6px] lg:text-xs font-semibold">
                      {item?.quantity}
                    </p>

                    <button
                      onClick={() => handleIncrementQuantity(item)}
                      className="border-l text-[6px] lg:text-xs pl-4 font-semibold"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p className="text-[#191919] text-[10px] lg:text-xl">
                    {itemData?.price}x{item.quantity} ={" "}
                    {Number(itemData?.price) * Number(item.quantity)}
                    <span className="text-[#D9D9D9] text-[8px] lg:text-base ml-3 line-through">
                      {Number(itemData?.previous_price) * Number(item.quantity)}
                    </span>
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
