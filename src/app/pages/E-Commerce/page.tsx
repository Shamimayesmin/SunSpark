import Banner from "./Banner";

import Nav from "./Nav";
import TopCategories from "./TopCategories";

import BestDealProducts from "./BestDealProducts";
import TopRanked from "./TopRanked";
import Footer from "@/components/common/Footer";
import SaveMoney from "../solution/evCharging/SaveMoney";
import SolarCategoryProduct from "./SolarCategoryProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Solar-PVI",
  description:
    "Switch to Solar with Solar-PVI and Unlock a Brighter, Sustainable & Economically Rewarding Future",
};

const EcommerceHome = () => {
  return (
    <div className=" bg-white">
      <div className="">
        <Nav />
        <div className="px-4 lg:px-0 lg:max-w-screen-xl mx-auto">
          <Banner />
          <BestDealProducts />
          <TopCategories></TopCategories>
          <TopRanked></TopRanked>
          <SolarCategoryProduct />
          <div className="lg:mt-20 mt-28">
            <SaveMoney />
          </div>
          <Footer  textColor="#133366" iconColor="#133366" />
        </div>
      </div>
    </div>
  );
};

export default EcommerceHome;
