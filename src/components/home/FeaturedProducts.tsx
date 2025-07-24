import React from "react";

const FeaturedProducts = () => {
  return (
    <div className="lg:max-w-screen-xl mx-auto px-4 lg:px-0 pt-20 lg:pt-40 lg:pb-20 pb-10 bg-white">
      <div>
        <h4 className="text-[#252D3A] text-base lg:text-2xl font-bold text-center">
          FEATURED PRODUCTS
        </h4>
        <h1 className="text-xl lg:text-4xl text-[#133366] font-bold text-center  mt-4">
          Comprehensive  Solutions
        </h1>
      </div>
      <div className="">
        <p className="text-[#343F52] text-sm lg:text-base py-3 mt-4">
          We are a visionary team, fueled by innovation and committed to
          pioneering continuous power solutions for a more sustainable and
          radiant tomorrow.
        </p>
      </div>
      <p className="text-[#343F52] text-sm lg:text-base py-3">
        Whether you are a homeowner, business owner, or part of a large-scale
        industrial project, we offer a comprehensive range of solar energy
        solutions to cater to diverse requirements. From solar panels and energy
        storage solutions to solar-powered water pumps and solar streetlights,
        we have the right solution for you.
      </p>
    </div>
  );
};

export default FeaturedProducts;
