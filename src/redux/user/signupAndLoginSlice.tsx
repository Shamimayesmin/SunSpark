/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import { api } from "../api/apiSlice";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Login"],
    }),
    userRegister: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Register"],
    }),
    userSocialLogin: builder.mutation({
      query: (data) => ({
        url: "/user/social-login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Register"],
    }),
    forgetpassword: builder.mutation({
      query: (email) => ({
        url: "/user/forget-password",
        method: "POST",
        body: email,
      }),
      invalidatesTags: ["Password"],
    }),
    setpassword: builder.mutation({
      query: (data) => ({
        url: "/user/set-password",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Password"],
    }),
    createUserAddress: builder.mutation({
      query: (data) => ({
        url: "/address/create",
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      }),
      invalidatesTags: ["Login"],
    }),
    updateUserAddress: builder.mutation({
      query: (data) => ({
        url: `/address/update/${data.id}`,
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      }),
      invalidatesTags: ["Login"],
    }),
    getLoginUser: builder.query({
      query: () => ({
        url: "/user/get-login-user",
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      }),
      providesTags: ["Login"],
    }),
    userLogOut: builder.mutation({
      query: (data) => ({
        url: "/user/logout",
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      }),
      invalidatesTags: ["Login"],
    }),
    getUserAddress: builder.query({
      query: () => ({
        url: "/address/view",
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      }),
      providesTags: ["Login"],
    }),
    changePass: builder.mutation({
      query: (data) => ({
        url: "/user/change-password",
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      }),
      invalidatesTags: ["ChangePass"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useSetpasswordMutation,
  useUserRegisterMutation,
  useUserSocialLoginMutation,
  useGetLoginUserQuery,
  useUserLogOutMutation,
  useGetUserAddressQuery,
  useCreateUserAddressMutation,
  useUpdateUserAddressMutation,
  useChangePassMutation,
  useForgetpasswordMutation,
} = authApi;
