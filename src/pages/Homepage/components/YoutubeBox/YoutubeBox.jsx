import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import useSearchYoutubeQuery from "../../../../hooks/useSearchYoutube";
import "./YoutubeBox.style.css";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";

function YoutubeBox() {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q") || "";
  const { data, isLoading, isError, error } = useSearchYoutubeQuery({
    keyword,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError || !data || !data.items) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="youtubebox-area box-shadow">
      <div className="conatiner">
        <h2 className="area-title Home-title">유투브 최신 영상</h2>
        <div className="youtubeb-box-list">
          {data.items.map(item => {
            if (item.kind === "youtube#video") {
              return (
                <div key={item.id}>
                  <iframe
                    title={item.snippet.title}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${item.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeBox;
