"use client";
import Image from "next/image";
import Link from "next/link";
import { GoHeart } from "react-icons/go";
import solar from "@/assets/products/solarPanel.png";
import {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from "@/redux/product/productSlice";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Product from "../Product";

const RelatedProduct = ({ productId }: { productId: string }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  //@ts-ignore
  const { data: product } = useGetProductByIdQuery(productId);
  const categoryId = product?.data?.category;
  console.log("categoryId", categoryId);
  //@ts-ignore
  const { data: products, isLoading } = useGetAllProductsQuery(categoryId);
  const allProducts = products?.data?.products || [];
  console.log("helloall",allProducts);

  useEffect(() => {
    // Filter products to get related products based on the category of the current product
    if (product && allProducts.length > 0) {
      const related = allProducts.filter(
        (p: any) => p?.category?._id === categoryId && p._id !== productId
      );
      setRelatedProducts(related);
    }
  }, [product, allProducts, categoryId, productId]);

  return (
    <div className="lg:mt-24 mt-8">
      <h1 className="text-xl lg:text-3xl text-center text-[#191919] font-medium ">
        Related Products
      </h1>

      {isLoading ? (
        <div className="flex justify-center items-center mt-16">
          <Loader />
        </div>
      ) : (
        <div className=" grid grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5 lg:gap-y-16 gap-y-5 lg:mt-16 mt-6 lg:mb-24 mb-8">
          {relatedProducts &&
            relatedProducts
              ?.slice(0, 4)
              ?.map((relatedProduct: any, index: any) => {
                return (
                  <div key={index} className="">
                      <Product product={relatedProduct}></Product>
					        </div>
                );
              })}
        </div>
      )}
    </div>
  );
};

export default RelatedProduct;
