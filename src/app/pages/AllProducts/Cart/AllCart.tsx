import React from "react";
import Products from "./Products";
import Summary from "./Summary";

const AllCart = () => {
  // const;
  return (
    <div className="lg:flex lg:gap-10 mb-40">
      <div className="lg:w-7/12">
        <Products></Products>
      </div>
      <div className="hidden lg:flex border-r-2"></div>
      <div className="lg:w-5/12">
        <Summary></Summary>
      </div>
    </div>
  );
};

export default AllCart;
