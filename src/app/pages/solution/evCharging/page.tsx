import Navbar from "@/components/common/Navbar";
import React from "react";
import Charger from "./Charger";
import Level from "./Level";
import SaveMoney from "./SaveMoney";
import Footer from "@/components/common/Footer";
import EvChargingHeroSection from "./EvChargingHeroSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Solutions | Solar-PVI",
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
      <EvChargingHeroSection></EvChargingHeroSection>
      <Charger></Charger>
      <Level></Level>
      <div className="px-4 lg:px-0">
        <SaveMoney></SaveMoney>
      </div>

      <Footer  textColor="#133366" iconColor="#133366" />
    </div>
  );
};

export default page;
