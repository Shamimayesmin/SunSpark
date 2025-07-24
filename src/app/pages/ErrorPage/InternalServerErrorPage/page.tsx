import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import connection from "../../../../assets/Error/Connection.png";
import Footer from "@/components/common/Footer";
import Link from "next/link";

const InternalServerErrorPage = () => {
  return (
    <div className="bg-white max-h-screen w-full">
      <div className="px-4 lg:px-0">
        <div className="flex justify-center items-center mt-12">
          <Image src={connection} alt="" width="400" height="300"></Image>
        </div>
        <h1 className="text-[#252F40] text-2xl lg:text-5xl font-bold text-center mt-7">
          Connection Lost!
        </h1>
        <p className="text-[#838DA0] text-base lg:text-2xl mt-10 text-center lg:px-[450px]">
          Oops! That page seems to have taken a detour. Let us guide you back to
          your destination.
        </p>
        <div className="flex justify-center mt-7">
          <Link href="/">
            <button className="btn text-white text-bold  bg-primary hover:bg-primary border-none">
              Refresh The Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternalServerErrorPage;
