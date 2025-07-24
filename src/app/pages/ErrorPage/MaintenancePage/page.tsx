import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import imgMaintenance from "../../../../assets/Error/Maintenance.png";
import Footer from "@/components/common/Footer";

const MaintenancePage = () => {
  return (
    <div className="bg-white max-h-screen">
      <div className="px-4 lg:px-0">
        <div className="flex justify-center items-center">
          <Image src={imgMaintenance} alt="" width="400" height="300"></Image>
        </div>
        <h1 className="text-[#252F40] text-2xl lg:text-5xl font-bold text-center ">
          Hang on! We are under maintenance
        </h1>
        <p className="text-[#838DA0] text-base lg:text-2xl mt-5 text-center lg:px-[450px]">
          We are making our site more optimized. Please stay with us.
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;
