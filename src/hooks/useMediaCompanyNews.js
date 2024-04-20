import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_KEY;

const fetchCompanyNews = async (queryData) => {
  const company = queryData.queryKey[1];
  const response = await api.get(
    `/top-headlines?sources=${company}&apiKey=${API_KEY}`
  );
  return response.data;
};
// sources=bbc-news
// eslint-disable-next-line
export const useMediaCompanyNews = company => {
  return useQuery({
    queryKey: ["언론사별뉴스", company],
    queryFn: fetchCompanyNews,
  });
};
