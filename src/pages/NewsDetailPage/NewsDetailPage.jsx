import React from "react";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNewsListQuery } from "../../hooks/useNews";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { data: news, isLoading, isError, error } = useNewsListQuery();
  // eslint-disable-next-line
  console.log(news);
  const extractNumber = url => {
    const numericPart = url.replace(/\D/g, "");
    return Number.isNaN(Number(numericPart)) ? null : Number(numericPart);
  };

  const newsDetail = news?.articles.filter(
    article => extractNumber(article.url) === parseInt(id, 10),
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  /* eslint-disable react/no-danger */
  return (
    <div>
      {newsDetail.map(article => (
        <div key={article.url}>
          <div>{article.title}</div>
          <div dangerouslySetInnerHTML={{ __html: article.description }} />
        </div>
      ))}
    </div>
  );
  /* eslint-disable react/no-danger */
};

export default NewsDetailPage;
