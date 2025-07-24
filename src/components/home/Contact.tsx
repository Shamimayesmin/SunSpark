"use client";
import React from "react";
import map from "../../assets/map.png";
import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

  const handleEmail = async (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const text = e.target.text.value;
    const title = e.target.title.value;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/email/service`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, text, title })
      })
      .then(res => res.json())
      .then(data => {
        if (data.statusCode === 200){
          toast.success('Email sent successfully!');
        }else{
          toast.error('Email sent fail!');
        }
      }
       )
    } catch (error) {
      toast.error('Server side error!');
    }
  };

  return (
    <div
      className="grid lg:grid-cols-5 lg:max-w-screen-2xl mx-auto "
      id="contact"
    >
      <div className="lg:max-w-screen-xl mx-auto py-10 lg:py-32 lg:translate-x-32 col-span-4 z-10 ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-24 items-center ">
          <div className="px-4 lg:px-0">
            <h1 className="text-[#343F52] text-3xl lg:text-5xl font-bold">
              Get in <span className="text-[#133366]">Touch</span>
            </h1>
            <p className="text-[#000000] text-sm py-4">
              If you don't see an answer to your question, you can call us or
              send an email.
            </p>
        <form onSubmit={handleEmail}>
        <input
              type="text"
              name="name"
              className="border border-[#E0E0E0] bg-white p-4 w-full text-sm my-7"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="border border-[#E0E0E0] bg-white p-4 w-full mb-7"
              placeholder="Email"
              name="email"
              required
            />
            <textarea
              className="border border-[#E0E0E0] bg-white p-4 w-full text-sm mb-7 h-28"
              placeholder="Give us your feedback"
              name="text"
              required
            />
            <select
              id="title"
              name="title"
              className=" w-full border border-[#E0E0E0] bg-white p-4 text-sm mb-7"
              required
            >
              <option className="text-black" value="">
                How did you find us?
              </option>
              {["Facebook", "LinkedIn", "Others"].map((title, index) => (
                <option key={index} value={title}>
                  {title}
                </option>
              ))}
            </select>
            <button className="btn bg-[#153870] hover:bg-[#016B90] text-white w-full rounded-none border-none">
              Send
            </button>
        </form>
            <div className="mt-10 flex gap-5 lg:gap-16">
              <div className="flex items-center gap-3 lg:gap-5">
                <span className="text-[#343F52]" style={{ fontSize: "30px" }}>
                  <BiPhoneCall />
                </span>

                <div className="text-[#133366] text-xs">
                  <h1 className="font-semibold">PHONE</h1>
                  <p><a href="tel:+41215615315">+41 21 561 53 15</a></p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-5">
                <span className="text-[#343F52]" style={{ fontSize: "30px" }}>
                  <TfiEmail />
                </span>

                <div className="text-[#133366] text-xs">
                  <h1 className="font-semibold">EMAIL</h1>
                  <p><a href="mailto:info@solar-pvi.com">info@solar-pvi.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28 lg:mt-0 lg:w-[620px] relative">
            {/* <Image src={map} alt="Map" className="relative z-10 px-4 lg:px-0" /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.421650328303!2d6.576404775822401!3d46.53934526106569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c31a02111bb6f%3A0x786eefe814971fc0!2sRue%20du%20Jura%203%2C%201023%20Crissier%2C%20Switzerland!5e0!3m2!1sen!2sbd!4v1716703308021!5m2!1sen!2sbd"
              className="relative z-10 px-4 lg:px-0 lg:w-[600px] w-[300]"
              // width="600"
              height="600"
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute -inset-y-16 right-0  bg-[#183A4A] lg:hidden w-1/2 z-0"></div>
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1 bg-[#183A4A] lg:relative">
        <div className="hidden lg:block absolute inset-0 opacity-20"></div>
      </div>
      <Toaster  />
    </div>
  );
};

export default Contact;
