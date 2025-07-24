import Comment from "@/components/home/Comment";
import CompanyOverview from "@/components/home/CompanyOverview";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/FAQ";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import Products from "@/components/home/Products";
import Revolution from "@/components/home/Revolution";
import Solution from "@/components/home/Solution";

import Footer from "@/components/common/Footer";
import Blog from "@/components/home/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar-PVI | For Renewable Energy",
  description:
    "Harness the power of the sun with Solar-PVI's innovative solar panel solutions.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Home() {
  return (
    <main style={{ backgroundColor: "white" }}>
      <HeroSection></HeroSection>
      <CompanyOverview></CompanyOverview>
      <Solution></Solution>
      <FeaturedProducts></FeaturedProducts>
      <Products></Products>
      <Comment></Comment>
      <FAQ></FAQ>
      <Revolution></Revolution>
      <Blog />
      <Contact></Contact>
      <Footer textColor="#133366" iconColor="#133366"></Footer>
    </main>
  );
}
