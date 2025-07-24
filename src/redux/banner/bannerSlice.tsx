/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import { api } from "../api/apiSlice";

const bannerApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllBanner: builder.query({
			query: () => ({
				url: "/banner/all",
			}),
			providesTags: ["Banner"],
		}),
		
       
	}),
});

export const { useGetAllBannerQuery } = bannerApi;
