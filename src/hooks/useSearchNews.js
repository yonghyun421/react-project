import { useInfiniteQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_KEY;

const fetchSearchNews = async ({ keyword, page }) => {
  const response = await api.get(
    `/everything?q=${keyword}&apiKey=${API_KEY}&pageSize=5&page=${page}`,
  );
  return response.data;
};
// eslint-disable-next-line
export const useSearchNewsQuery = ({ keyword }) => {
  return useInfiniteQuery({
    queryKey: ["searchNews", keyword],
    queryFn: ({ pageParam = 1 }) =>
      fetchSearchNews({ keyword, page: pageParam }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.totalResults > pages.length * 5) {
        return pages.length + 1;
      }
      return undefined;
    },
    onError: error => {
      // eslint-disable-next-line
      console.error("Error fetching search news:", error);
    },
  });
};
