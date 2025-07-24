import Footer from "@/components/common/Footer";
import Nav from "../../E-Commerce/Nav";
import SaveMoney from "../../solution/evCharging/SaveMoney";
import AllCategories from "./AllCategories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products | Solar-PVI",
  description:
    "Switch to Solar with Solar-PVI and Unlock a Brighter, Sustainable & Economically Rewarding Future",
};

const page = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Nav />
      <div className="px-4 lg:px-0 lg:max-w-screen-xl mx-auto ">
        <AllCategories />
        <SaveMoney />
        <Footer  textColor="#133366" iconColor="#133366" />
      </div>
    </div>
  );
};

export default page;
