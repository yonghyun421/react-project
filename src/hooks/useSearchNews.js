import { useQuery } from "@tanstack/react-query"
import  api  from "../utils/apiSearchData"

const fetchSearchNews = ({keyword, page}) => {
  return keyword
    ? api.get(`/search/news?q=${keyword}&page=${page}&language=ko-KR`)
    : api.get(`/news/popular?page=${page}&language=ko-KR`)
}

export const useSearchNewsQuery = ({keyword, page}) => {
  return useQuery({
    queryKey: ["news-search", {keyword, page}],
    queryFn: () => fetchSearchNews({keyword, page}),
    select: (result) => result.data,
  })
}