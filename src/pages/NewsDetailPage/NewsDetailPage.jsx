/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import "./NewsDetailPage.style.css";

function NewsDetailPage() {
  const { state } = useLocation();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if (state && state.articleData) {
      setIsLoading(false);
      // eslint-disable-next-line no-undef
      window.scrollTo(0, 0);
      /* eslint-disable react/no-danger */
    }
  }, [state]);

  if (isLoading) return <LoadingSpinner />;

  const { articleData } = state;
  const dateString = articleData.publishedAt;
  const date = new Date(dateString);
  const formattedDate = date
    ? `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`
    : "";

  return (
    <div className="newsDetail--wrap">
      <div className="newsDetail--titleWrap">
        <div className="newsDetail--title">{articleData.title}</div>
        {articleData.publishedAt && (
          <div className="newsDetail--date">{formattedDate}</div>
        )}
      </div>
      <div className="newsDetail--img">
        <img src={articleData.urlToImage} alt="newsImg" />
      </div>
      <div className="newsDetail--con">
        <div dangerouslySetInnerHTML={{ __html: articleData.description }} />
      </div>
      {articleData.author && (
        <div className="newsDetail--author">{articleData.author}</div>
      )}
      <div className="newsDetail--news">{articleData.source.name}</div>
    </div>
  );
  /* eslint-disable react/no-danger */
}

export default NewsDetailPage;
