import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import useSearchYoutubeQuery from "../../../../hooks/useSearchYoutube";

function YoutubeVideo() {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchYoutubeQuery({
    keyword,
  });

  console.log("data: ", data);

  useEffect(() => {
    setQuery("");
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return <div>YoutubeVideo</div>;
}

export default YoutubeVideo;
