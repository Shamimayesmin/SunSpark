import Footer from "@/components/common/Footer";
import Nav from "../../E-Commerce/Nav";
import SingleProductDetails from "../../../../components/common/SingleProductDetails/SingleProductDetails";
import OtherDetails from "../../../../components/common/SingleProductDetails/OtherDetails";
import RelatedProduct from "../../../../components/common/SingleProductDetails/RelatedProduct";

import { getProductById } from "@/axios/backend_helper";
import { Metadata } from "next";

const ProductDetailsPage = async ({ params }: any) => {
  console.log("params", params);
  const productId = params?.productId || {};
  const data = await getData(productId);

  return (
    <>
      <div className="bg-[#FFFFFF]">
        <Nav />
        <div className="px-4 lg:px-0 lg:max-w-screen-xl mx-auto ">
          <SingleProductDetails data={data} />
          <OtherDetails productId={productId} />
          <RelatedProduct productId={productId} />
          <Footer  textColor="#133366" iconColor="#133366"/>
        </div>
      </div>
    </>
  );
};

type Props = {
  params: { productId: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const product = await getProductById(params.productId);
  return {
    title: product.name + " - SolarPVI",
    description: product.short_description,
    openGraph: {
      title: product.name,
      description: product.short_description,
      images: [
        {
          url: product.image_url[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
};

async function getData(productId: string) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props
  // const {
  //   data,
  //   isLoading,
  //   isError,
  //   refetch: refetchProducts,
  // } = useGetProductByIdQuery(productId);
  // const a = await fetch
  const data = await getProductById(productId,{refresh:true});
  console.log(data);
  return data;
}
export default ProductDetailsPage;
