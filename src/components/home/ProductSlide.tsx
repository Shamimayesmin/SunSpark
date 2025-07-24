import Image from "next/image";

import Product from "../common/Product";
import ViewALL from "../common/ViewAll";

const ProductSlide = ({ category, products }: any) => {

	return (
		<div className="px-4 lg:px-0">
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-4">
					<div className=" flex justify-center items-center ">
						<span
							className="rounded-lg lg:w-20 lg:h-20 flex justify-center items-center"
							style={{ backgroundColor: "rgba(17, 203, 1, 0.12)" }}
						>
							<Image
								className="py-4 px-2  lg:w-full"
								src={category?.image}
								alt=""
								height={200}
								width={200}
							></Image>
						</span>
					</div>

					<h1 className="text-sm lg:text-3xl text-[#252D3A] font-bold">
						{category?.name}
					</h1>
				</div>
				<ViewALL></ViewALL>
			</div>

			<div className="mt-16 grid grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-4 mb-10">
				{products?.slice(0, 4).map((product: any, index: any) => {
					return (
						<div key={index}>
							<Product product={product}></Product>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductSlide;
