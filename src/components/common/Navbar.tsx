"use client";

import React, { useEffect, useState } from "react";
import logo from "@/assets/E-commerce/logo main.png";
import otherlogo from "@/assets/pviwhitelogo.png";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  textColor: string;
  buttonColor: string;
  buttonBorderColor: string;
  buttonTextColor: string;
  buttonHoverColor: string;
  buttonHoverTextColor: string;
  dropdownBgColor: string;
}

const Navbar: React.FC<NavbarProps> = ({
  textColor,
  buttonColor,
  buttonBorderColor,
  buttonTextColor,
  buttonHoverColor,
  buttonHoverTextColor,
  dropdownBgColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSolutionDropdownOpen, setIsSolutionDropdownOpen] = useState(false);
  const [pathname, setPathname] = useState<string>("");

  let closeSolutionDropdownTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSolutionDropdownToggle = () => {
    setIsSolutionDropdownOpen(!isSolutionDropdownOpen);
  };

  const closeSolutionDropdownWithDelay = () => {
    closeSolutionDropdownTimeout = setTimeout(() => {
      setIsSolutionDropdownOpen(false);
    }, 300); // Delay in milliseconds
  };

  const clearSolutionDropdownTimeout = () => {
    clearTimeout(closeSolutionDropdownTimeout);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsSolutionDropdownOpen(false);
  };

  useEffect(() => {
    setPathname(window.location.pathname);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      closeDropdowns();
    };

    const handleResize = () => {
      closeDropdowns();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`lg:navbar lg:flex justify-between px-4 lg:px-0 ${
        isScrolled
          ? "fixed bg-white text-black shadow-md z-80 w-full px-5 py-2 flex lg:justify-around lg:gap-36 justify-between items-center"
          : "bg-transparent lg:max-w-screen-xl lg:mx-auto pt-2"
      } transition-colors duration-300 z-40 lg:mb-10`}
    >
      <div className="flex flex-row-reverse justify-between w-full lg:w-auto">
        <div className="relative">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden z-10"
            onClick={handleDropdownToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke={
                isScrolled ? "black" : pathname === "/" ? "white" : "black"
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className={`menu menu-sm absolute top-full right-0 z-40 mt-3 p-2 shadow transform -translate-x-10 rounded-box w-52 text-lg font-medium ${
                isScrolled ? "text-black bg-white" : "text-white bg-gray-500"
              }`}
            >
              <li>
                <details>
                  <summary>Solution</summary>
                  <ul
                    className="rounded-t-none w-40"
                    style={{
                      color: textColor,
                      backgroundColor: dropdownBgColor,
                    }}
                  >
                    <li>
                      <a href="/pages/solution/evCharging">EV Charging</a>
                    </li>
                    <hr />
                    <li>
                      <a href="/pages/solution/residential">Residential</a>
                    </li>
                    <hr />
                    <li>
                      <a href="/pages/solution/commercial">Commercial</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a
                  href="/pages/posts/blog"
                  className={pathname === "/pages/posts/blog" ? "underline" : ""}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/pages/Download"
                  className={pathname === "/pages/Download" ? "underline" : ""}
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="/pages/AboutUs"
                  className={pathname === "/pages/AboutUs" ? "underline" : ""}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/pages/benefit"
                  className={pathname === "/pages/benefit" ? "underline" : ""}
                >
                  Benefit
                </a>
              </li>
              <li>
                <a
                  href="/pages/BecomePartner"
                  className={pathname === "/pages/BecomePartner" ? "underline" : ""}
                >
                  Partner
                </a>
              </li>
              <li>
                <a
                  href="/pages/E-Commerce"
                  className={pathname === "/pages/E-Commerce" ? "underline" : ""}
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/pages/ContactUs"
                  className={pathname === "/pages/ContactUs" ? "underline" : ""}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          )}
        </div>
        <Link href="/">
          <Image
            src={isScrolled ? logo : pathname === "/" ? otherlogo : logo}
            alt="Logo"
            className="lg:h-16 lg:w-36 h-10 w-20"
          />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul
          className="menu menu-horizontal px-1 text-base font-medium mt-3 relative z-20"
          style={{ color: isScrolled ? "black" : textColor }}
        >
          <li
            className="dropdown dropdown-hover"
            onMouseEnter={() => {
              clearSolutionDropdownTimeout();
              setIsSolutionDropdownOpen(true);
            }}
            onMouseLeave={closeSolutionDropdownWithDelay}
          >
            <div tabIndex={0} role="button">
              Solution
            </div>
            {isSolutionDropdownOpen && (
              <ul
                className="dropdown-content z-[1] menu p-2 rounded-box w-40"
                style={{ color: textColor, backgroundColor: dropdownBgColor }}
                onMouseEnter={clearSolutionDropdownTimeout}
                onMouseLeave={closeSolutionDropdownWithDelay}
              >
                <li>
                  <a href="/pages/solution/evCharging">EV Charging</a>
                </li>
                <hr />
                <li>
                  <a href="/pages/solution/residential">Residential</a>
                </li>
                <hr />
                <li>
                  <a href="/pages/solution/commercial">Commercial</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="/pages/posts/blog"
              className={pathname === "/pages/posts/blog" ? "underline" : ""}
            >
              Blog
            </a>
          </li>

          <li>
            <a
              href="/pages/Download"
              className={pathname === "/pages/Download" ? "underline" : ""}
            >
              Download
            </a>
          </li>

          <li>
            <a
              href="/pages/AboutUs"
              className={pathname === "/pages/AboutUs" ? "underline" : ""}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/pages/benefit"
              className={pathname === "/pages/benefit" ? "underline" : ""}
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              href="/pages/BecomePartner"
              className={pathname === "/pages/BecomePartner" ? "underline" : ""}
            >
              Partner
            </a>
          </li>
        </ul>
        <a
          href="/pages/E-Commerce"
          className={`btn text-base font-medium ml-3 border ${
            isScrolled
              ? "border-[#133366] hover:border-[#133366] text-[#133366] hover:bg-[#133366]"
              : "border-[#E79D03] hover:border-[#E79D03] text-[#E79D03] hover:bg-[#E79D03]"
          }  hover:text-white bg-transparent  hover:text-[${buttonHoverTextColor}]`}
        >
          Shop
        </a>
        <a
          href="/pages/ContactUs"
          className={`btn text-base font-medium ml-3 ${
            isScrolled
              ? "border-[#133366] hover:border-[#133366] bg-[#133366] hover:bg-[#133366] "
              : "border-[#E79D03] hover:border-[#E79D03] bg-[#E79D03] hover:bg-[#E79D03] "
          } border  text-white hover:text-[${buttonHoverTextColor}]`}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
