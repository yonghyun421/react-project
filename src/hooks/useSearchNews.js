import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_KEY;

const fetchSearchNews = async ({ keyword }) => {
  const response = await api.get(
    `/top-headlines?q=${keyword}&country=kr&apiKey=${API_KEY}`,
  );
  return response.data;
};
// eslint-disable-next-line
export const useSearchNewsQuery = ({ keyword }) => {
  return useQuery({
    queryKey: ["searchNews", keyword],
    queryFn: () => fetchSearchNews({ keyword }),
    onError: error => {
      // eslint-disable-next-line
      console.error("Error fetching search news:", error);
    },
  });
};
