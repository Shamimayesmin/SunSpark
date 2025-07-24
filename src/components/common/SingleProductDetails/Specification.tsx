import { useGetProductByIdQuery } from "@/redux/product/productSlice";
import DOMPurify from "dompurify";

const Specification = ({ productId }: any) => {
	const { data } = useGetProductByIdQuery(productId);

	const { specification } = data?.data || {};

	const sanitizedData = () => ({
		__html: DOMPurify.sanitize(specification),
	});
	return (
		<div
			className="lg:mt-5 mt-2 text-xs lg:text-lg text-[#191919]"
			dangerouslySetInnerHTML={{__html: specification}}
		></div>
	);
};

export default Specification;
