import { APIClient } from "./api_helper";

const api = new APIClient();

const productCashe: any = [];
const blogCashe: any = [];
export const getProductById = async (
  id: string,
  options?: { refresh?: boolean }
) => {
  //@ts-ignore
  if (productCashe[id] && !options?.refresh) {
    return productCashe[id];
  }
  const res = await api.get(`/product/view-product/${id}`, {});
  productCashe[id] = res.data;
  return res.data;
};

export const getBlogById = async (
  id: string,
  options?: { refresh?: boolean }
) => {
  //@ts-ignore
  if (blogCashe[id] && !options?.refresh) {
    return blogCashe[id];
  }
  const res = await api.get(`/blog/view-blog/${id}`, {});
  blogCashe[id] = res.data;
  return res.data;
};

