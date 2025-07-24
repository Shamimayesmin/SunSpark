import React from "react";
import AboutUsHeroSection from "./AboutUsHeroSection";
import Navbar from "@/components/common/Navbar";
import Section1 from "./Section1";
import Footer from "@/components/common/Footer";
import Mission from "./Mission";
import Vision from "./Vision";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import SaveMoney from "../solution/evCharging/SaveMoney";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn about us | Solar-PVI",
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
      <AboutUsHeroSection></AboutUsHeroSection>
      <Section1></Section1>
      <Mission></Mission>
      <Vision></Vision>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <div className="px-4 lg:px-0 mt-10 lg:mt-0">
        <SaveMoney></SaveMoney>
      </div>

      <Footer  textColor="#133366" iconColor="#133366" />
    </div>
  );
};

export default page;
