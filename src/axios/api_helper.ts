import axios, { AxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// default
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const token = cookies.get("accessToken") || null;
if (token) axios.defaults.headers.common["Authorization"] = "Bearer " + token;

// intercepting to capture errors
axios.interceptors.response.use(
  function (response: { data: any }) {
    return response.data ? response.data : response;
  },
  function (error: { status: any; message: any }) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.message || error;
    }
    return Promise.reject(message);
  }
);

// axios.defaults.withCredentials = true;
/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token: string) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};

class APIClient {
  /**
   * Fetches data from given url
   */

  //  get = (url, params) => {
  //   return axios.get(url, params);
  // };
  get = (url: any, params: AxiosRequestConfig<any> | undefined) => {
    let response;

    let paramKeys: string[] = [];

    if (params) {
      Object.keys(params).map((key) => {
        // @ts-ignore
        paramKeys.push(key + "=" + params[key]);
        return paramKeys;
      });

      const queryString =
        paramKeys && paramKeys.length ? paramKeys.join("&") : "";
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };
  /**
   * post given data to url
   */
  create = (url: string, data: any) => {
    return axios.post(url, data);
  };

  /**
   * post form data
   */
  postFormData = (url: string, data: any) => {
    return axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  /**
   * Updates data
   */
  update = (url: string, data: any) => {
    return axios.patch(url, data);
  };

  putFormData = (url: string, data: any) => {
    return axios.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  put = (url: string, data: any) => {
    return axios.put(url, data);
  };

  /**
   * Delete
   */
  delete = (url: string, config: AxiosRequestConfig<any> | undefined) => {
    return axios.delete(url, { ...config });
  };
}
const getLoggedinUser = () => {
  const user = sessionStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

export { APIClient, setAuthorization, getLoggedinUser };
