import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Paragraph from "./Paragraph";

const page = () => {
  return (
    <div className=" bg-white">
      <div className="">
        <Navbar
          textColor="#343F52"
          buttonBorderColor="none"
          buttonColor="#153870"
          buttonTextColor="#FFFFFF"
          buttonHoverColor="#016B90"
          buttonHoverTextColor="#FFFFFF"
          dropdownBgColor="white"
        ></Navbar>
        <div className="px-4 lg:px-0 lg:max-w-screen-xl mx-auto">
            <Paragraph></Paragraph>
          <Footer  textColor="#133366" iconColor="#133366" />
        </div>
      </div>
    </div>
  );
};

export default page;
