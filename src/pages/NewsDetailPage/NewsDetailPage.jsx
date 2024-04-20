import React from "react";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNewsListQuery } from "../../hooks/useNews";
import "./NewsDetailPage.style.css";

function NewsDetailPage() {
  const { id } = useParams();
  const { data: news, isLoading, isError, error } = useNewsListQuery();
  const extractNumber = url => {
    const numericPart = url.match(/\d+/g);
    if (numericPart) {
      const numericString = numericPart.join("");
      return Number(numericString.substr(0, 15));
    }
    return null;
  };
  const newsDetail = news?.articles.filter(article => {
    const extractedNumber = extractNumber(article.url);
    return extractedNumber === parseInt(id, 10);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  if (newsDetail.length === 0) {
    return <div>Article not found</div>;
  }
  const article = newsDetail[0];
  const dateString = article.publishedAt;
  const date = new Date(dateString);
  const formattedDate = date
    ? `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`
    : "";

  /* eslint-disable react/no-danger */
  return (
    <div className="newsDetail--wrap">
      <div className="newsDetail--titleWrap">
        <div className="newsDetail--title">{article.title}</div>
        {article.publishedAt && (
          <div className="newsDetail--date">{formattedDate}</div>
        )}
      </div>
      <div className="newsDetail--img">
        <img src={article.urlToImage} alt="newsImg" />
      </div>
      <div className="newsDetail--con">
        <div dangerouslySetInnerHTML={{ __html: article.description }} />
      </div>
      {article.author && (
        <div className="newsDetail--author">{article.author}</div>
      )}
      <div className="newsDetail--news">{article.source.name}</div>
    </div>
  );
  /* eslint-disable react/no-danger */
}

export default NewsDetailPage;
