import { useQuery } from "@tanstack/react-query"
// import  api  from "../utils/api"

const fetchSearchNews = ({keyword, page}) => {
  return keyword
    ? api.get(`/search/news?query=${keyword}&page=${page}`)
    : api.get(`/news/popular?page=${page}`)
}

export const useSearchNewsQuery = ({keyword, page}) => {
  return useQuery({
    queryKey: ["news-search", {keyword, page}],
    queryFn: () => fetchSearchNews({keyword, page}),
    select: (result) => result.data,
  })
}