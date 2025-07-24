import Image from "next/image";
import Link from "next/link";
import { GoHeart } from "react-icons/go";

const ViewALL = ({ product, key }: any) => {
	return (
        <Link href="/pages/E-Commerce">
            <button className="btn bg-[#FEAC03] hover:bg-[#E79D03] border-none text-[8px] lg:text-base btn-xs lg:btn-md  text-white">
            View All
            </button>
      </Link>
	);
};

export default ViewALL;
