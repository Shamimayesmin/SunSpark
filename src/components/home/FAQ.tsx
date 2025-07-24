import React, { useEffect } from "react";

const FAQ = () => {
  return (
    <div className="lg:max-w-screen-xl mx-auto pt-20 pb-10 lg:py-20 px-4 lg:px-0 bg-white">
      <div>
        <h4 className="text-[#252D3A] text-base lg:text-xl font-bold text-center">
          FREQUENTLY ASKED QUESTIONS
        </h4>
        <h1 className="text-xl lg:text-4xl text-[#133366] font-bold text-center  mt-4 ">
          Unlock the Sun's Potential, Explore Your Top FAQs Answered!
        </h1>
      </div>
      <div className="lg:flex mt-10 lg:mt-20 lg:gap-10">
        <div>
          <div
            className="collapse collapse-plus p-3 mb-5"
            style={{
              backgroundColor: "var(--Neutral-100, #FFF)",
              boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
              borderRadius: "16px",
            }}
          >
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xs lg:text-xl font-medium text-[#170F49]">
              What are solar panels?
            </div>
            <div className="collapse-content">
              <p className="text-[#5D6575] text-[9px] lg:text-base lg:pr-16 ">
                Solar panels are devices that convert sunlight into electricity
                using photovoltaic cells, allowing you to produce clean,
                renewable energy for your home or business.
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-plus p-3 mb-5"
            style={{
              backgroundColor: "var(--Neutral-100, #FFF)",
              boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
              borderRadius: "16px",
            }}
          >
            <input className="" type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xs lg:text-xl font-medium text-[#170F49]">
              How can solar panels benefit me?
            </div>
            <div className="collapse-content">
              <p className="text-[#5D6575] text-[9px] lg:text-base lg:pr-16">
              Solar panels can significantly reduce your electricity bills, contribute to a greener environment by reducing carbon emissions, and increase your property's value
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-plus p-3 mb-5"
            style={{
              backgroundColor: "var(--Neutral-100, #FFF)",
              boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
              borderRadius: "16px",
            }}
          >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xs lg:text-xl font-medium text-[#170F49]">
              Is solar energy suitable for my location? 
            </div>
            <div className="collapse-content">
              <p className="text-[#5D6575] text-[9px] lg:text-base lg:pr-16">
              Solar energy is viable in most regions with access to sunlight, and advancements in technology have made it effective even in areas with less sunshine.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="collapse collapse-plus p-3 mb-5"
            style={{
              backgroundColor: "var(--Neutral-100, #FFF)",
              boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
              borderRadius: "16px",
            }}
          >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xs lg:text-xl font-medium text-[#170F49]">
              What is the lifespan of solar panels?
            </div>
            <div className="collapse-content">
              <p className="text-[#5D6575] text-[9px] lg:text-base lg:pr-16 ">
              Most solar panels have a lifespan of 25 to 30 years or more, providing a long-term investment for your energy needs.
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-plus p-3 mb-5"
            style={{
              backgroundColor: "var(--Neutral-100, #FFF)",
              boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
              borderRadius: "16px",
            }}
          >
            <input className="" type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xs lg:text-xl font-medium text-[#170F49]">
              How can solar panels be installed?
            </div>
            <div className="collapse-content">
              <p className="text-[#5D6575] text-[9px] lg:text-base lg:pr-16">
              The installation process involves an initial assessment, customized system design, obtaining permits, installation by professionals, and connecting the system to the electrical grid.
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-plus p-3 mb-5"
            style={{
              backgroundColor: "var(--Neutral-100, #FFF)",
              boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
              borderRadius: "16px",
            }}
          >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xs lg:text-xl font-medium text-[#170F49]">
              Will solar panel work on cloudy days?
            </div>
            <div className="collapse-content">
              <p className="text-[#5D6575] text-[9px] lg:text-base lg:pr-16">
              Solar panels can still generate electricity on cloudy days, though their efficiency may be reduced. They continue to produce energy as long as there is daylight, even if the sunlight is partially blocked by clouds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
