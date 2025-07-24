import Image from "next/image";
import Link from "next/link";
import { GoHeart } from "react-icons/go";

const Product = ({ product }: any) => {
  // console.log("show image" , product);
  const YStars = Math.round(product?.averageRating);
  const AStars = (5-YStars);

  return (
    <Link href={`/pages/AllProducts/${product?._id}`}>
      <div className="border cursor-pointer px-4 pb-4 rounded-md hover:shadow-lg">
        <div className="">
          <span className="flex justify-end">
            <p className="bg-[#FE3003] rounded-full lg:px-4 mt-3 text-[8px] lg:text-xs text-white font-semibold flex items-center justify-center px-2 lg:h-6 lg:w-12 mr-2">
              Hot
            </p>
          </span>
          <div className="rounded-md flex justify-center  ">
            <Image
              className="pb-7 h-48 w-36 lg:h-72 lg:w-full rounded-sm object-cover"
              src={product?.image_url}
              width={150}
              height={200}
              alt=""
            />
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <h1 className="truncate-2-lines text-[#252D3A] font-semibold h-10 overflow-hidden text-[8px] lg:text-sm">
            {product?.name}
          </h1>
          {/* <GoHeart className="h-3 w-3 lg:h-5 lg:w-5" /> */}
        </div>
        <div>{product?.averageRating}</div>
        <div className="mt-3 flex items-center">
            <div className="rating rating-xs lg:rating-sm">
                {Array.from({ length: YStars }).map((_, index) => (
                  <input
                    key={`filled-${index}`}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FEBD35]"
                    defaultChecked
                  />
                ))}
                {Array.from({ length: AStars }).map((_, index) => (
                  <input
                    key={`empty-${index}`}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#EBECEE]"
                    defaultChecked
                  />
                ))}
                </div>
          </div>
        <div className="mt-3 flex justify-between items-center">
          <p className="text-[#252D3A] text-[8px] lg:text-xs font-semibold">
            ${product?.price}
            <span className="ml-4 text-[#C0C3C9] line-through">
              ${product?.previous_price}
            </span>
          </p>
          <Link href={`/pages/AllProducts/${product?._id}`}>
            <button className="btn bg-[#153870] hover:bg-[#016B90] text-white text-[8px] lg:text-base btn-xs lg:btn-md flex justify-center items-center border-none">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Product;
