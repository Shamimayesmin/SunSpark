import Image from "next/image";
import { GoHeart } from "react-icons/go";
import Product from "@/components/common/Product";


const CategoryProducts = ({ products }: any) => {
	return (
		<div className=" grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10 gap-y-8 lg:gap-y-16">
			{products?.map((product: any, index: any) => {
				return (
					<div key={index} className="">
                      <Product product={product}></Product>
					</div>
				);
			})}
		</div>
	);
};

export default CategoryProducts;
