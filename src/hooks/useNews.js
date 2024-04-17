import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchNewsList = async () => api.get(`/v2/top-headlines?country=kr`);
const fetchNewsDetail = async () => api.get(`/v2/top-headlines?country=kr`);

export const useNewsListQuery = () =>
  useQuery({
    queryKey: ["news-list"],
    queryFn: fetchNewsList,
    select: result => result.data,
  });

export const useNewsDetailQuery = () =>
  useQuery({
    queryKey: ["news-detail"],
    queryFn: () => fetchNewsDetail,
    select: result => result.data,
  });
