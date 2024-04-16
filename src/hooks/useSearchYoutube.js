import { useQuery } from "@tanstack/react-query";
import apiYoutubeData from "../utils/apiYoutubeData";

const fetchYoutubes = ({ keyword }) =>
  keyword
    ? apiYoutubeData.get(`/search`, { params: { q: keyword } })
    : apiYoutubeData.get(`/search`);

const useSearchYoutubeQuery = ({ keyword }) =>
  useQuery({
    queryKey: ["youtube-search", { keyword }],
    queryFn: () => fetchYoutubes({ keyword }),
  });

export default useSearchYoutubeQuery;
