import Navbar from "@/components/common/Navbar";
import React from "react";
import BenefitHeroSection from "./BenefitHeroSection";
import SolarPVI from "./SolarPVI";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import SaveMoney from "./SaveMoney";
import Footer from "@/components/common/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Benifits | Solar-PVI",
  description:
    "Switch to Solar with Solar-PVI and Unlock a Brighter, Sustainable & Economically Rewarding Future",
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
      <BenefitHeroSection></BenefitHeroSection>
      <SolarPVI></SolarPVI>
      <Card1></Card1>
      <Card2></Card2>
      <Card3></Card3>
      <div className="lg:px-0 px-4">
        <SaveMoney></SaveMoney>
      </div>
      <Footer  textColor="#133366" iconColor="#133366"/>
    </div>
  );
};

export default page;
