"use client";
import React, { useEffect, useState } from "react";
import CategoryProducts from "./CategoryProducts";
import { useGetAllCategoryQuery,useGetAllProductsQuery} from "@/redux/product/productSlice";
import Loader from "@/components/common/Loader/Loader";
import { useRouter } from "next/navigation";
import { subscribeToChannel, unsubscribeFromChannel } from "../../../../../src/utils/ably";
import ProductBanner from "./ProductBanner";

const AllCategories = () => {
  const router = useRouter();
  // @ts-ignore
  const { data: categoryData } = useGetAllCategoryQuery();
  const categories = categoryData?.data || [];
  const [activeTab, setActiveTab] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  // @ts-ignore
  const {data: productData, isLoading, isError, refetch: refetchProducts} = useGetAllProductsQuery({ sort: sortOrder });
  const products = productData?.data?.products || [];

  

  const subscribeToProductCreate = () => {
    refetchProducts();
  };

  useEffect(() => {
    const channel = subscribeToChannel(
      "product-channel",
      "product-created",
      subscribeToProductCreate
    );
    subscribeToChannel(
      "product-channel",
      "product-update",
      subscribeToProductCreate
    );
    subscribeToChannel(
      "product-channel",
      "product-stock",
      subscribeToProductCreate
    );

    return () => {
      unsubscribeFromChannel("product-channel");
    };
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setActiveTab("all");
    }
  }, [categories]);
  const categoryRef = React.useRef(null);
  const openCategory = (categoryId: string) => {
    const detailElement = categoryRef.current;
    if (detailElement) {
      // @ts-ignore
      detailElement?.removeAttribute("open");
    }
    setActiveTab(categoryId);
  };

  const filterProductsByCategory = () => {
    if (activeTab === "all") {
      return products;
    } else {
      return products.filter(
        (product: any) => product?.category?._id === activeTab
      );
    }
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
    refetchProducts();
  };

  // if (isError) {
  //   router.push("/pages/ErrorPage/NotFoundPage");
  //   return null;
  // }


  return (
    <div className="mb-20 lg:mb-28 lg:grid grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.length > 0 && (
        <div className="bg-[#F9F9FF] lg:w-[270px] h-fit rounded-xl px-5 py-6 sticky top-24 hidden lg:block">
          <div>
            <p className="text-[#153870] text-xs lg:text-base font-semibold pb-4">
              Categories{" "}
              <span className="text-[#8A8A8A] text-[10px] lg:text-sm">
                ({categories.length})
              </span>
            </p>
            <hr className="pb-4" />
            {categories.map((category: any) => (
              <p
                key={category._id}
                className={`cursor-pointer text-xs lg:text-base mb-7 ${
                  activeTab === category._id
                    ? "text-[#153870] font-semibold px-2 border-l-4 border-[#153870]"
                    : "text-[#627A9F]"
                }`}
                onClick={() => openCategory(category._id)}
              >
                {category.name}
              </p>
            ))}
          </div>
        </div>
      )}

      {categories.length > 0 && (
        <div className=" h-fit rounded-xl lg:hidden flex justify-between mb-5">
          <div>
            <ul className="menu menu-horizontal menu-dropdown px-1">
              <li>
                <details ref={categoryRef}>
                  <summary className="text-xs lg:text-base font-semibold text-[#153870]">
                    Category
                  </summary>
                  <ul className="p-2 bg-[#F9F9FF] font-bold text-white rounded-t-none transform -translate-x-0 w-48">
                    {categories.map((category: any) => (
                      <li key={category._id}>
                        <a
                          className={`cursor-pointer text-xs lg:text-base mb-5 ${
                            activeTab === category._id
                              ? "text-[#153870] font-semibold px-2 border-l-4 border-[#153870]"
                              : "text-[#627A9F]"
                          }`}
                          onClick={() => openCategory(category._id)}
                        >
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="flex items-center ">
            <p className="text-[#627A9F] text-xs">Sort by</p>
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary className="text-xs lg:text-base font-semibold text-[#153870]">
                    Price
                  </summary>
                  <ul className="p-2 bg-slate-400 font-bold text-white rounded-t-none w-40 transform -translate-x-20">
                    <li>
                      <p onClick={() => handleSortChange('-price')}>High to Low</p>
                    </li>
                    <li>
                      <p onClick={() => handleSortChange('price')}>Low to High</p>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center mt-16">
          <Loader />
        </div>
      ) : (
        <div className="lg:col-span-3">
          <div
            className="tabcontent"
            style={{ display: activeTab === "all" ? "block" : "none" }}
          >
            <div className="mb-5 flex justify-between items-center">
              <p className="text-[#153870] text-xs lg:text-base font-semibold">
                All Products
              </p>
              <div className="lg:flex items-center hidden ">
                <p className="text-[#627A9F] text-xs">Sort by</p>
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <details>
                      <summary className="text-base font-semibold text-[#153870]">
                        Price
                      </summary>
                      <ul className="p-2 bg-slate-400 font-bold text-white rounded-t-none w-40 transform -translate-x-20">
                        <li>
                          <a onClick={() => handleSortChange('-price')}>High to Low</a>
                        </li>
                        <li>
                          <a onClick={() => handleSortChange('price')}>Low to High</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
            <CategoryProducts products={products} />
          </div>

          {categories.map((category: any) => (
            <div
              key={category._id}
              id={category._id}
              className="tabcontent"
              style={{ display: activeTab === category._id ? "block" : "none" }}
            >
              <div className="mb-5 lg:flex justify-between items-center">
                <p className="text-[#153870] text-xs lg:text-base font-semibold">
                  {category.name}
                </p>
                <div className="lg:flex items-center hidden ">
                  <p className="text-[#627A9F] text-xs">Sort by</p>
                  <ul className="menu menu-horizontal px-1">
                    <li>
                      <details>
                        <summary className="text-base font-semibold text-[#153870]">
                          Price
                        </summary>
                        <ul className="p-2 bg-slate-400 font-bold text-white rounded-t-none w-40 transform -translate-x-20">
                          <li>
                            <a onClick={() => handleSortChange('-price')}>High to Low</a>
                          </li>
                          <li>
                            <a onClick={() => handleSortChange('price')}>Low to High</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>
              <ProductBanner banner={category?.banner} />
              <CategoryProducts products={filterProductsByCategory()} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCategories;
