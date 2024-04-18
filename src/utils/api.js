import axios from "axios";

const api = axios.create({
  params: { query: "최신뉴스" },
  baseURL: "https://newsapi.org/v2",
});
/* eslint-disable prefer-arrow-callback */
api.interceptors.request.use(
  // eslint-disable-next-line
  function (config) {
    // Do something before request is sent
    return config;
  },
  // eslint-disable-next-line
  function (error) {
    // Do something with request error
    // eslint-disable-next-line
    console.log("request error", error);
    return Promise.reject(error);
  },
);

// Add a response interceptor
/* eslint-disable prefer-arrow-callback */
api.interceptors.response.use(
  // eslint-disable-next-line
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  // eslint-disable-next-line
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // eslint-disable-next-line
    console.log("response error", error);
    return Promise.reject(error);
  },
);

export default api;
