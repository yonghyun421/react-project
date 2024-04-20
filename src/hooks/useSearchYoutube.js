import { useQuery } from "@tanstack/react-query";
import apiYoutubeData from "../utils/apiYoutubeData";

const fetchYoutubes = ({ keyword }) =>
  keyword
    ? apiYoutubeData.get(`/search`, { params: { q: keyword, maxResults: 10 } })
    : apiYoutubeData.get(`/search`, { params: { maxResults: 10 } });

const useSearchYoutubeQuery = ({ keyword }) =>
  useQuery({
    queryKey: ["youtube-search", { keyword }],
    queryFn: () => fetchYoutubes({ keyword }),
  });

export default useSearchYoutubeQuery;
