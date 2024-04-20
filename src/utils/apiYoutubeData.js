import axios from "axios";

const YOUTUBE_DATA_API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

const apiYoutubeData = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  timeout: 1000,
  params: {
    key: YOUTUBE_DATA_API_KEY,
  },
  headers: {
    accept: "application/json",
  },
});

// 인스턴스 인터셉터 설정
apiYoutubeData.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);
apiYoutubeData.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

export default apiYoutubeData;
