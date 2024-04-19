import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_KEY;

const fetchCategoryNews = async queryData => {
  const category = queryData.queryKey[1];
  const response = await api.get(
    `/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`,
  );
  return response.data;
};
// sources=bbc-news
// eslint-disable-next-line
export const useCategoryNews = category => {
  return useQuery({
    queryKey: ["분야별뉴스", category],
    queryFn: fetchCategoryNews,
  });
};
