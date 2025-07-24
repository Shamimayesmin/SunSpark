/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import { api } from "../api/apiSlice";
import  Cookies  from 'universal-cookie';
const cookies = new Cookies()

const orderApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getMyOrders: builder.query({
			query: () => ({
				url: "/order/orders/me",
                headers: {
                    Authorization: `Bearer ${cookies.get('accessToken')}`,
                },
			}),
			providesTags: ["Order"],
		}),

		createOrder: builder.mutation({
			query: (data) => ({
				url: "/order/create-order",
				method: "POST",
				body: data,
                headers: {
                    Authorization: `Bearer ${cookies.get('accessToken')}`,
                },
			}),

			invalidatesTags: ["Order"],
		}),
		updateOrder: builder.mutation({
			query: (data) => ({
				url: `order/admin/order/${data.id}`,
				method: "PUT",
				body: data,
                headers: {
                    Authorization: `Bearer ${cookies.get('accessToken')}`,
                },
			}),

			invalidatesTags: ["Order"],
		}),
		getOrderById: builder.query({
			query: (id) => ({
				url: `/order/order/${id}`,
                headers: {
                    Authorization: `Bearer ${cookies.get('accessToken')}`,
                },
			}),
			providesTags: ["Order"],
		}),
		createPayment: builder.mutation({
			query: (data) => ({
				url: `/payment/create/${data.id}`,
				method: "POST",
				body: data,
                headers: {
                    Authorization: `Bearer ${cookies.get('accessToken')}`,
                },
			}),
			invalidatesTags: ["Order"],
		}),
		createPayInOffice: builder.mutation({
			query: (data) => ({
				url: `/payment/payInOffice/${data.id}`,
				method: "POST",
				body: data,
                headers: {
                    Authorization: `Bearer ${cookies.get('accessToken')}`,
                },
			}),
			invalidatesTags: ["Order"],
		}),
		createNotification: builder.mutation({
			query: (data) => ({
				url: '/notification/create',
				method: "POST",
				body: data,
                headers: {
                    Authorization: `Bearer ${cookies.get('accessToken')}`,
                },
			}),
			invalidatesTags: ["Order"],
		}),
	}),
});

export const { useGetMyOrdersQuery, useCreateOrderMutation, useUpdateOrderMutation, useGetOrderByIdQuery, useCreatePaymentMutation, useCreatePayInOfficeMutation, useCreateNotificationMutation} = orderApi;
