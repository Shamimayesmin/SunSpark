/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      Authorization: `Bearer ${cookies.get("accessToken")}`,
    },
  }),
  tagTypes: ["Product", "Banner","Register", "Login", "Order", "Blog", "Cart","ChangePass", "Password"],
  endpoints: () => ({}),
});
