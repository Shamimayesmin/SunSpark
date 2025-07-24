import Image from "next/image";
import img404 from "../../../../assets/Error/404.png";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const NotFoundPage = () => {
  return (
    <div className="bg-white max-h-screen w-full">
      <div className="px-4 lg:px-0">
        <div className="flex justify-center items-center mt-10 lg:mt-20 ">
          <Image src={img404} alt=""></Image>
        </div>
        <h1 className="text-[#252F40] text-2xl lg:text-5xl font-bold text-center mt-10">
          Oh No! Error 404
        </h1>
        <p className="text-[#838DA0] text-base lg:text-2xl mt-10 text-center lg:px-[450px]">
          Oops! That page seems to have taken a detour. Let us guide you back to
          your destination.
        </p>
        <div className="flex justify-center w-full mt-7">
          <Link href="/">
            <button className="btn text-white text-bold  bg-primary hover:bg-primary border-none">
              Back to Home 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
