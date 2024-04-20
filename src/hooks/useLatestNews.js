import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_KEY;

const fetchLatestNews = async () => {
  const response = await api.get(`/top-headlines?country=kr&apiKey=${API_KEY}`);
  return response.data;
};
// sources=bbc-news

// sources=bbc-news
// eslint-disable-next-line
export const useLatestNews = () => {
  return useQuery({
    queryKey: ["최신뉴스"],
    queryFn: fetchLatestNews,
  });
};
