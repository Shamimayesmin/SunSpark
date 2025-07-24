import { useGetProductByIdQuery } from "@/redux/product/productSlice";

import DOMPurify from "dompurify";

const Description = ({ productId }: any) => {
  const { data } = useGetProductByIdQuery(productId);
  const { description } = data?.data || {};

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(description),
  });

  return (
    <div
      className="mt-2 lg:mt-5 text-xs lg:text-lg text-[#191919]"
      dangerouslySetInnerHTML={sanitizedData()}
    ></div>
  );
};

export default Description;
