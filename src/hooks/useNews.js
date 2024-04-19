import { useInfiniteQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_KEY;

const fetchNewsList = async ({ category, page }) => {
  const response = await api.get(
    `/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}&pageSize=5&page=${page}`,
  );
  return response.data;
};
// eslint-disable-next-line
export const useNewsListQuery = ({ category }) =>
  useInfiniteQuery({
    queryKey: ["news-list", category],
    queryFn: ({ pageParam = 1 }) =>
      fetchNewsList({ category, page: pageParam }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.totalResults > pages.length * 5) {
        return pages.length + 1;
      }
      return undefined;
    },
  });
