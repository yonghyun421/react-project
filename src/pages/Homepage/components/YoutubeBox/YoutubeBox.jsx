import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import useSearchYoutubeQuery from "../../../../hooks/useSearchYoutube";
import "./YoutubeBox.style.css";

function YoutubeBox() {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchYoutubeQuery({
    keyword,
  });

  useEffect(() => {
    // 테스트용 검색키워드 설정
    const newQuery = new URLSearchParams();
    newQuery.set("q", "프론트엔드");
    setQuery(newQuery, { replace: true });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !data || !data.items) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="youtubebox-area box-shadow">
      <div className="conatiner">
        <h2 className="area-title Home-title">유투브 최신 영상</h2>
        <div className="youtubeb-box-list">
          {data.items.map(item => {
            if (item.id.kind === "youtube#video") {
              return (
                <div key={item.id.videoId}>
                  <iframe
                    title={item.id.videoId}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
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
