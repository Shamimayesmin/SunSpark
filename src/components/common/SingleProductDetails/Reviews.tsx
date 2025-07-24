import { useGetReviewsByProductIdQuery } from "@/redux/product/productSlice";


const Review = ({ productId }: any) => {
  const { data, error } = useGetReviewsByProductIdQuery(productId);
  const reviews = data?.data?.reviews;
  const YStars = Math.round(data?.data?.averageRating);
  const AStars = (5-YStars);
  const totalReview= data?.data?.totalReviews;


  return (
    <div className="mt-2 lg:mt-5 text-xs lg:text-lg text-[#191919]">
        {reviews?.map((review: any, index: any) => {
			return (
                <div key={index}>
                    <div className="border-b">
                        <p className=" capitalize">{review?.user?.firstname} {review?.user?.lastname}</p>
                        <div className="my-2 flex items-center">
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
                            <p className="ml-4 text-[#C0C3C9] text-[8px] lg:text-xs font-semibold">
                            ({totalReview})
                          </p>
                      </div>
                        <p className="">{review?.reviewText} </p>
                    </div>
                </div>
            )
        })
    }
    </div>
  );
};

export default Review;
