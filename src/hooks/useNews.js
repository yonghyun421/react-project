import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_KEY;

const fetchNewsList = async () => {
  const response = await api.get(`/top-headlines?country=kr&apiKey=${API_KEY}`);
  return response.data;
};

// eslint-disable-next-line
export const useNewsListQuery = () =>
  useQuery({
    queryKey: ["news-list"],
    queryFn: fetchNewsList,
  });
