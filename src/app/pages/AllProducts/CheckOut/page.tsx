"use client";

import React from "react";
import Nav from "../../E-Commerce/Nav";
import Customer from "./Customer";
import Products from "./Products";
import AllCheckOut from "./AllCheckOut";
import Footer from "@/components/common/Footer";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { useGetLoginUserQuery } from "@/redux/user/signupAndLoginSlice";

const page = () => {
  return (
    <div className=" bg-[#FFFFFF]">
      <Nav></Nav>
      <div className="px-4  lg:px-0 lg:max-w-screen-xl mx-auto">
        <AllCheckOut></AllCheckOut>
        <Footer textColor="#133366" iconColor="#133366"/>
      </div>
    </div>
  );
};

export default page;
