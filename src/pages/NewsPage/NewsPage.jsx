import React from "react";
import { Alert } from "react-bootstrap";
import NewsCard from "../../common/NewsCard/NewsCard";
import { useNewsListQuery } from "../../hooks/useNews";

function NewsPage() {
  const { data, isLoading, isError, error } = useNewsListQuery();
  const newsList = data ? data.articles : null;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <ul className="news-list-box">
        {newsList &&
          newsList.map(news => (
            <li key={news.id || news.url}>
              {" "}
              <NewsCard articles={news} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NewsPage;
