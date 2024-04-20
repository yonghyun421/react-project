import React from "react";
import { Alert } from "react-bootstrap";

import NewsCard from "../../common/NewsCard/NewsCard";
import { useNewsListQuery } from "../../hooks/useNews";
// eslint-disable-next-line
const NewsPage = () => {
  const { data, isLoading, isError, error } = useNewsListQuery();
  const newsList = data?.articles;
  // eslint-disable-next-line
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <ul className="news-list-box">
        {newsList?.map(news => (
          <li key={news?.url}>
            <NewsCard articles={news} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NewsPage;
