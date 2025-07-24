
const ProductBanner = ({ banner }: { banner: any }) => {
	// console.log('banner',banner);
    return (
        <div className="my-10 lg:my-14">
            <div style={{ backgroundImage: `url(${banner?.bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className= "px-24 rounded-lg h-[100px] lg:h-[334px] flex flex-col items-center justify-center bg-[#521220]">

					<div className="flex flex-col lg:flex-row-reverse">
						
						<div className="">
							<h1 className="text-[10px] mb-2 lg:text-4xl text-[#FFFFFF]">
								{banner?.heading}
							</h1>
							<p className="text-lg lg:text-[63px] font-semibold text-[#FFFFFF] leading-none">
								{banner?.title}
							</p>
						</div>
					</div>
					
				</div>
        </div>
    );
};

export default ProductBanner;