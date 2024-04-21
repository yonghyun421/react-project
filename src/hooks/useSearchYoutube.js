import { useQuery } from "@tanstack/react-query";
import apiYoutubeData from "../utils/apiYoutubeData";

const fetchYoutubes = ({ keyword }) =>
  keyword
    ? apiYoutubeData.get(`/search`, {
        params: { q: keyword, maxResults: 10, part: "snippet" },
      })
    : apiYoutubeData.get(`/videos`, {
        params: {
          chart: "mostPopular",
          regionCode: "KR",
          part: "snippet",
          maxResults: 10,
        },
      });

const useSearchYoutubeQuery = ({ keyword }) =>
  useQuery({
    queryKey: ["youtube-search", { keyword }],
    queryFn: () => fetchYoutubes({ keyword }),
  });

export default useSearchYoutubeQuery;
