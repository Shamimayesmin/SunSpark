"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetProductByIdQuery, useGetReviewsByProductIdQuery } from "@/redux/product/productSlice";
import { useAppDispatch } from "@/redux/hook";
import toast, { Toaster } from "react-hot-toast";

import { addToCart } from "@/redux/cart/cartStore";
import { addOrderProduct, resetProduct } from "@/redux/order/orderStore";

import ReactImageMagnify from "react-image-magnify";

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import { useCreateCartMutation } from "@/redux/cart/cartSlice";
import { useGetLoginUserQuery } from "@/redux/user/signupAndLoginSlice";
import Loader from "../Loader/Loader";
import {subscribeToChannel, unsubscribeFromChannel} from "../../../utils/ably";
import { useRouter, redirect } from "next/navigation";


interface SingleProductDetailsProps {
  data: any;
}


const SingleProductDetails = ({ data }: SingleProductDetailsProps) => {
  const router = useRouter();
  //@ts-ignore
const { data:userdata } = useGetLoginUserQuery();
const user = userdata?.data;

  
  const productId = data?._id || undefined;
  const [image, setImage] = useState(``);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(null);
  const dispatch = useAppDispatch();
  //@ts-ignore
  //   const {
  //     data,
  //     isLoading,
  //     isError,
  //     refetch: refetchProducts,
  //   } = useGetProductByIdQuery(productId);
  const {
    name = "",
    price = 0,
    short_description = "",
    stock = 0,
    image_url = [],
    brand = "",
    model = "",
    previous_price = 0,
  } = data || {};
  const { data:rat, error } = useGetReviewsByProductIdQuery(productId);
  const rating = rat?.data?.averageRating;
  const YStars = Math.round(rating);
  const AStars = (5-YStars);
  const totalReview= rat?.data?.totalReviews;


  //   const subscribeToProductCreate = () => {
  //     refetchProducts();
  //   };

  //   useEffect(() => {
  //     subscribeToChannel(
  //       "product-channel",
  //       "product-update",
  //       subscribeToProductCreate
  //     );
  //     subscribeToChannel(
  //       "product-channel",
  //       "product-stock",
  //       subscribeToProductCreate
  //     );
  //     return () => {
  //       unsubscribeFromChannel("product-channel");
  //     };
  //   }, []);

  const [createCart] = useCreateCartMutation();

  useEffect(() => {
    data && setImage(data?.image_url[0]);
    // Giving data as a dependency so that after render data it will reset the image data
  }, [data]);

  const handleAddToCart = async () => {
    // Dispatch action to add item to cart
    //@ts-ignore
    if (quantity > stock) {
      toast.error(`Please select quantity less than ${stock}`);
      return;
    }
    dispatch(
      addToCart({ id: productId, name, price, quantity, image: image_url[0] })
    );

    //@ts-ignore
    const { data, error } = await createCart({ quantity, productId });

    toast.success(`${name} added to cart`);
  };

  const handleBuyProduct = () => {
    if(!user){
      router.push('/pages/User/Login');
    }
    else{
      dispatch(resetProduct());
      if (quantity > stock) {
        toast.error(`Please select quantity less than ${stock}`);
        return;
      }
      //@ts-ignore
      dispatch(addOrderProduct({ id: productId, name, image: image_url[0], price, quantity,}));
      router.push('/pages/AllProducts/CheckOut');
    }
    
  };

  const imageSrc = image;
  const handleIncrement = () => {
    if (quantity >= stock) {
      toast.error(`Please select quantity less than ${stock}`);
      return;
    }
    // Increment quantity
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    // Ensure quantity doesn't go below 1
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //   if (isLoading) {
  //     return (
  //       <div className="flex justify-center items-center mt-10">
  //         <Loader />
  //       </div>
  //     );
  //   }

  const handleImageClick = (image: any) => {
    setImage(image);
    setActiveImage(image);
  };
  return (
    <div className="lg:flex flex-row gap-10">
      <Toaster />
      <div className="w-full lg:w-1/2">
        <div className=" lg:w-full flex flex-row gap-4">
          <ReactImageMagnify
            className="w-full object-cover h-fit aspect-[3/2] mx-auto rounded-md p-6 bg-[#F1F1F1] "
            {...{
              smallImage: {
                alt: "Magnifier Preview",
                isFluidWidth: true,
                src: imageSrc,
              },
              largeImage: {
                src: imageSrc,
                width: 1000,
                height: 1800,
              },
              enlargedImageContainerStyle: { zIndex: 9999 },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "100%",
              },
            }}
          />
          <div className="flex flex-row md:flex-col flex-wrap align-center mx-auto justify-around gap-2 w-40">
            {image_url?.slice(0, 4).map((item: any, index: any) => (
              <Image
                key={index}
                src={item}
                height={60}
                width={70}
                alt="Image"
                className={`cursor-pointer w-[70px] md:w-full h-[60px] md:h-[80px] p-2 object-cover aspect-[3/2] rounded-md border-2 ${
                  activeImage === item ? "border-blue-400" : ""
                }`}
                onClick={() => handleImageClick(item)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:px-0 px-5">
        <h1 className="text-lg lg:text-[24.74px] text-[#191919] font-medium  mb-3">
          {name}
        </h1>
        <div className="my-2 flex items-center">
            <div className="rating rating-xs lg:rating-sm">
                {Array.from({ length: YStars }).map((_, index) => (
                  <input
                    key={`filled-${index}`}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FEBD35]"
                    defaultChecked
                  />
                ))}
                {Array.from({ length: AStars }).map((_, index) => (
                  <input
                    key={`empty-${index}`}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#EBECEE]"
                    defaultChecked
                  />
                ))}
                </div>
                <p className="ml-4 text-[#C0C3C9] text-[8px] lg:text-xs font-semibold">
                  ({totalReview})
                </p>
          </div>
        <div className="lg:text-[14px] text-xs text-[#191919] mt-5 lg:mt-0 flex flex-row flex-wrap gap-3">
          <h1 className="font-semibold mb-2">
            Brand : <span className="font-normal">{brand}</span>
          </h1>
          <h1 className="font-semibold mb-2">
            Model : <span className="font-normal">{model} </span>
          </h1>
          <h1 className="font-semibold mb-2">
            Availability:{" "}
            {stock > 0 ? <span className="font-normal mb-2">Only {stock} in Stock {stock < 10 &&
                    <span className={'text-red-600'}>(limited stock)</span>}</span> :
                <span className="font-normal mb-2 text-red-600">out of stock</span>}
          </h1>
        </div>
        <div>
          <ul
              className="text-xs space-y-2 mb-7 mt-2 ml-4"
              style={{listStyleType: "disc"}}
          >
            <li>{short_description}</li>
          </ul>
          <hr/>
        </div>

        {/* <div className="mt-5 flex justify-evenly">
					<button className=" border px-10 py-3 rounded-md bg-white text-[#153870]">
						Size
					</button>
					<button className=" border px-10 py-3 rounded-md bg-white text-[#153870]">
						Size
					</button>
					<button className=" border px-10 py-3 rounded-md bg-white text-[#153870]">
						Size
					</button>
				</div>
				<div className="mt-3 flex justify-evenly mb-5">
					<button className=" border px-10 py-3 rounded-md bg-white text-[#153870]">
						Size
					</button>
					<button className=" border px-10 py-3 rounded-md bg-white text-[#153870]">
						Size
					</button>
					<button className=" border px-10 py-3 rounded-md bg-white text-[#153870]">
						Size
					</button>
				</div> */}
        <hr/>
        <div className="mt-7 text-center lg:text-start">
          <p className="text-xs text-[#191919] mb-1">USD(incl. of all taxes)</p>
          <p className="lg:text-[24px] text-xl text-[#191919]">
            ${price}
            <span className="text-[#D9D9D9] lg:text-lg text-sm line-through ml-3">
              ${previous_price}
            </span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-center gap-x-16">
          <div className="border flex w-36 h-[37.88px] mt-5 justify-evenly items-center">
            <button
                disabled={quantity == 1 || stock == 0}
                onClick={handleDecrement}
                className="border-r lg:text-[20px] text-sm font-semibold pr-4"
            >
              <FaMinus/>
            </button>
            <p className="lg:text-[20px] text-sm font-semibold">{quantity}</p>

            <button
                disabled={stock == 0}
                onClick={handleIncrement}
                className="border-l lg:text-[20px] text-sm pl-4 font-semibold"
            >
              <FaPlus/>
            </button>
          </div>
          <div className="flex gap-5 justify-center items-center mt-5">

            <button
                disabled={stock == 0}
                onClick={handleBuyProduct}
                className="bg-[#153870] text-white px-5 py-2 rounded-md font-medium text-[8px] lg:text-base btn-xs lg:btn-md flex justify-center items-center"
            >
              Buy Now
            </button>


            <button
                disabled={stock == 0}
                onClick={handleAddToCart}
                className="px-5 py-2 border rounded-md font-medium text-[8px] lg:text-base btn-xs lg:btn-md flex justify-center items-center"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
