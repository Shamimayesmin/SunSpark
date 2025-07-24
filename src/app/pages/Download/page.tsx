import React from "react";
import Footer from "@/components/common/Footer";
import SaveMoney from "../solution/evCharging/SaveMoney";
import { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Contact from "@/components/home/Contact";
import Option from "./Option";

export const metadata: Metadata = {
  title: "Download | Solar-PVI",
  description:
    "Our primary goal is to accelerate the adoption of renewable energy on a global scale. By offering cutting-edge solar technologies and customized solutions, we strive to make solar energy accessible and affordable for individuals, businesses, and communities worldwide.",
};

const page = () => {
  return (
    <div className=" bg-[#FFFFFF]">
      <Navbar
        textColor="#343F52"
        buttonBorderColor="none"
        buttonColor="#153870"
        buttonTextColor="#FFFFFF"
        buttonHoverColor="#016B90"
        buttonHoverTextColor="#FFFFFF"
        dropdownBgColor="white"
      ></Navbar>
      <Option></Option>
      <Footer textColor="#133366" iconColor="#133366" />
    </div>
  );
};

export default page;
