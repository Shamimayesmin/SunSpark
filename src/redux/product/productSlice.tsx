/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import { api } from "../api/apiSlice";
import Cookies from "universal-cookie";
const cookies = new Cookies();
//@ts-ignore
const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        url: "/category/all-category",
      }),
      providesTags: ["Product"],
    }),
    getAllProducts: builder.query({
      //@ts-ignore
      query: ({categoryId, sort,}={}) => ({
        url: "/product/all-product",
        params: { category: categoryId, sort: sort },

      }),
      providesTags: ["Product"],
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/product/view-product/${id}`,
      }),
      providesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product/create-product",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, newData }) => ({
        url: `/product/update-product/${id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags: ["Product"],
    }),
    // hit a single api multiple times for multiple time
    getMultipleProductsWithId: builder.query({
      query: (ids) => ({
        url: `/cart/cart-products`,
        body: {
          productsId: ids,
        },
        method: "POST",
      }),
      providesTags: ["Product"],
    }),
    getBestDeal: builder.query({
      query: () => ({
        url: "/setting/product/best-deal-list",
      }),
      providesTags: ["Product"],
    }),
    getTopRank: builder.query({
      query: () => ({
        url: "/setting/product/best-deal-list",
      }),
      providesTags: ["Product"],
    }),
    createRatingAndReview: builder.mutation({
      query: (data) => ({
        url: `/review/create-review/${data.productId}`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      }),
      invalidatesTags: ["Product"],
    }),
    getReviewsByProductId: builder.query({
      query: (id) => ({
        url: `review/all-review/${id}`,
      }),
      providesTags: ["Product"],
    }),

    // deleteProduct: builder.mutation({
    // 	query: (id) => ({
    // 		url: `//${id}`,
    // 		method: "DELETE",
    // 	}),
    // 	invalidatesTags: ["Product"],
    // }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useGetAllCategoryQuery,
  useGetMultipleProductsWithIdQuery,
  useGetBestDealQuery,
  useGetTopRankQuery,
  useCreateRatingAndReviewMutation,
  useGetReviewsByProductIdQuery,
} = productApi;
