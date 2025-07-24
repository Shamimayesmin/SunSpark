/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import { api } from "../api/apiSlice";

const blogApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllBlogs: builder.query({
			query: () => ({
				url: "/blog/all-blog",
			}),
			providesTags: ["Blog"]
		}),
		viewBlogDetails: builder.query({
			query: (id) => ({
				url: `/blog/view-blog/${id}`,
              
			}),
			providesTags: ["Blog"],
		}),
		
       
	}),
});

export const { useGetAllBlogsQuery, useViewBlogDetailsQuery} = blogApi;
