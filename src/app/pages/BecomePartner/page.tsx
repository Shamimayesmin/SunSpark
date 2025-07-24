import Navbar from "@/components/common/Navbar";
import Header from "./Header";
import WhyPvi from "./whyPvi";
import EssentialValues from "./essentialValues";
import ClientFocus from "./clientFocus";
import Passion from "./passion";
import OurMission from "./ourMission";
// import SaveMoney from "../solution/evCharging/SaveMoney";
import Footer from "@/components/common/Footer";
import SaveMoney from "../benefit/SaveMoney";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become A Partner | Solar-PVI",
  description:
    "Switch to Solar with Solar-PVI and Unlock a Brighter, Sustainable & Economically Rewarding Future",
};

const BecomePartner = () => {
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
      />
      <Header />
      <WhyPvi />
      <EssentialValues />
      <ClientFocus />
      <Passion />
      <OurMission />
      <div className="lg:px-0 px-4">
        <SaveMoney />
      </div>

      <Footer textColor="#133366" iconColor="#133366"/>
    </div>
  );
};

export default BecomePartner;
