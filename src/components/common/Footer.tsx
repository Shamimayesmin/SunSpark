"use client";
import React from "react";
import logo from "@/assets/E-commerce/logo main.png";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { BsYoutube } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import Link from "next/link";

interface FooterProps {
  textColor: string;
  iconColor: string;
}
const Footer: React.FC<FooterProps> = ({ textColor, iconColor }) => {
  return (
    <div className="mt-16 px-4 lg:px-0">
      <p className="border-t-2"></p>
      <div className="pb-10 lg:mt-20 mt-8 bg-white max-w-screen-xl mx-auto">
        <footer className="footer lg:mt-16 mt-8 text-base-content lg:flex">
          <div className="w-full lg:w-2/4">
            <aside className="">
              <div className="w-36">
                <Image src={logo} alt=""></Image>
              </div>

              <p className="text-[#6F6C90] text-sm lg:text-lg lg:w-[400px] pt-4 lg:pt-0 pb-4">
                SOLAR-PVI can customize your own complete solar power system
                solution kit based on your requests. We provide
                grid-tied, off-grid, hybrid with PV system solutions.
              </p>
              <div
                className="flex gap-4 items-center justify-center lg:justify-start mt-2"
                style={{ color: iconColor }}
              >
                <span style={{ fontSize: "20px" }}>
                  <Link
                    href="https://www.facebook.com/solarpvi/"
                    target="_blank"
                  >
                    <FaFacebookF></FaFacebookF>
                  </Link>
                </span>
                <span style={{ fontSize: "20px" }}>
                  <Link
                    href="https://www.linkedin.com/company/solar-pvi/"
                    target="_blank"
                  >
                    <TfiLinkedin></TfiLinkedin>
                  </Link>
                </span>
                <span style={{ fontSize: "20px" }} className="mt-2">
                  <Link
                    href="https://www.youtube.com/@Solar-PVI"
                    target="_blank"
                  >
                    <BsYoutube></BsYoutube>{" "}
                  </Link>
                </span>
              </div>
            </aside>
          </div>
          <div className="w-full lg:w-9/12 grid grid-cols-2 lg:grid-cols-3">
            <nav className="flex flex-col gap-4 ">
              <h6 className="footer-title text-[#170F49] text-base lg:text-xl  font-bold">
                Company
              </h6>
              <a
                className="link link-hover text-[#6F6C90] text-sm lg:text-lg"
                href="/pages/AboutUs"
              >
                About
              </a>
              <a
                className="link link-hover text-[#6F6C90] text-sm lg:text-lg"
                href="/#contact"
              >
                Contact us
              </a>
              <a
                className="link link-hover text-[#6F6C90] text-sm lg:text-lg"
                href="/posts/blog"
              >
                Blog
              </a>
              <a
                className="link link-hover text-[#6F6C90] text-sm lg:text-lg"
                href="/pages/benefit"
              >
                Benefits
              </a>
              <a
                className="link link-hover text-[#6F6C90] text-sm lg:text-lg"
                href="/pages/BecomePartner"
              >
                Become a Partner
              </a>
            </nav>
            <nav className="flex flex-col gap-4 lg:mt-0">
              <h6 className="footer-title text-[#170F49] text-base lg:text-xl  font-bold">
                Legal
              </h6>
              <a
                className="link link-hover text-[#6F6C90] text-sm lg:text-lg"
                href="/pages/TermsCondition"
              >
                Terms & Condition
              </a>
              <a
                className="link link-hover text-[#6F6C90] text-sm lg:text-lg"
                href="/pages/PrivacyPolicy"
              >
                Privacy Policy
              </a>
              <a
                className="link link-hover text-[#6F6C90] text-sm lg:text-lg"
                href="/pages/RefundPolicy"
              >
                Refund Policy
              </a>
            </nav>
            <nav className="flex flex-col gap-4 mt-10 lg:mt-0 ">
              <h6 className="footer-title text-[#170F49] text-base lg:text-xl  font-bold">
                Contact us
              </h6>
              <div className="link link-hover text-[#6F6C90] text-sm lg:text-lg flex items-center gap-2">
                <span className="text-[#170F49]" style={{ fontSize: "20px" }}>
                  <HiOutlineMail />
                </span>
                <p>
                  <a href="mailto:info@solar-pvi.com">info@solar-pvi.com</a>
                </p>
              </div>
              <div className="link link-hover text-[#6F6C90] text-sm lg:text-lg flex items-center gap-2">
                <span className="text-[#170F49]" style={{ fontSize: "20px" }}>
                  <IoCallOutline />
                </span>
                <p>
                  <a href="tel:+41215615315">+41 21 561 53 15</a>
                </p>
              </div>
              <div className="link link-hover text-[#6F6C90] text-sm lg:text-lg flex items-center gap-2">
                <span className="text-[#170F49]" style={{ fontSize: "18px" }}>
                  <ImWhatsapp></ImWhatsapp>
                </span>
                <p>
                  <a href="//wa.me/41 76 566 98 04" target="_blank">+41 76 566 98 04</a>
                </p>
              </div>
              <div className="link link-hover text-[#6F6C90] text-sm lg:text-lg  flex  gap-2">
                <span className="text-[#170F49] " style={{ fontSize: "22px" }}>
                  <HiOutlineLocationMarker></HiOutlineLocationMarker>
                </span>
                <Link
                  href="https://maps.app.goo.gl/EXYnoKVNzWmFB2Y9A"
                  target="_blank"
                >
                  <p>Rue du jura 3, 1023 Crissier, Switzerland</p>
                </Link>
              </div>
            </nav>
          </div>
        </footer>
        <hr className="mt-7 lg:mt-16" />
        <div className="text-[11px] lg:text-lg lg:flex lg:justify-between mt-10">
          <p className="text-[#6F6C90] text-center lg:text-start">
            Copyright © 2024 Solar-PVI
          </p>
          <p className="text-center lg:text-start">
            <span className="text-[#6F6C90]">All Rights Reserved </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
