import React from "react";
import Nav from "../../E-Commerce/Nav";
import AllCart from "./AllCart";
import Footer from "@/components/common/Footer";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const page = () => {

  return (
    <div className=" bg-[#FFFFFF]">
      <Nav></Nav>
      <div className="px-4 lg:px-0 lg:max-w-screen-xl mx-auto">
        <AllCart></AllCart>
        <Footer  textColor="#133366" iconColor="#133366"></Footer>
      </div>
    </div>
  );
};

export default page;
