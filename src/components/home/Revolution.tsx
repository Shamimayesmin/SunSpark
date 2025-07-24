import React from "react";
import img from "../../assets/solarSky.png";
import Image from "next/image";
import Link from "next/link";

const Revolution = () => {
  return (
    <div className="relative h-[550px] mb-20">
      <div
        className="absolute
         inset-0  bg-cover bg-center "
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 lg:max-w-screen-xl px-4 lg:px-0 py-20 lg:py-28 mx-auto text-white">
          <h1 className="text-xl lg:text-4xl font-bold">
            Join the Solar Revolution: Invest Today, Save on Energy <br /> Bills
            Forever!
          </h1>
          <p className="text-sm lg:text-lg py-7 lg:py-10 lg:mr-32">
            Embrace solar energy with Solar-PVI, and together, let's empower a
            brighter tomorrow. Get in touch with our team today, and let's
            embark on this transformation journey toward a greener world! Join
            us on our mission to embrace the power of the sun and make a lasting
            impact on the planet. <br /> Let Solar-PVI Solutions be your trusted
            partner in harnessing the limitless potential of solar.
          </p>
          <Link href='/pages/BecomePartner'>
            <button className="btn bg-[#FEAC03] hover:bg-[#E79D03] border-none text-white">
              Become a partner
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Revolution;
