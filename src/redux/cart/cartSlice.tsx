/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import { api } from "../api/apiSlice";
import  Cookies  from 'universal-cookie';
const cookies = new Cookies()

const orderApi = api.injectEndpoints({
	endpoints: (builder) => ({
		createCart: builder.mutation({
			query: (data) => ({
				url: "/cart/create-cart",
				method: "POST",
				body: data,
                headers: {
                    Authorization: `Bearer ${cookies.get('accessToken')}`,
                },
			}),

			invalidatesTags: ["Cart"],
		}),
        deleteCart: builder.mutation({
    	query: (id) => ({
    		url: `/cart/delete-item/${id}`,
    		method: "DELETE",
    	}),
    	invalidatesTags: ["Cart"],
        }),
		getMyCart: builder.query({
			query: () => ({
				url: "/cart/my-cart",
                headers: {
                    Authorization: `Bearer ${cookies.get('accessToken')}`,
                },
			}),
			providesTags: ["Cart"],
		}),

	}),
});

export const { useCreateCartMutation, useDeleteCartMutation, useGetMyCartQuery } = orderApi;
