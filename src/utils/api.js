import axios from "axios";

const API_KEY = process.env.REACT_APP_CLIENT_ID;

const api = axios.create({
  baseURL: "https://newsapi.org",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

// 요청 인터셉터 추가하기
api.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

// 응답 인터셉터 추가하기
api.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default api;
