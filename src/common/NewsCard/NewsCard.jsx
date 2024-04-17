import React from "react";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ news }) => {
  const navigate = useNavigate();
  const extractNumber = url => {
    const numericPart = url.replace(/\D/g, "");
    return Number.isNaN(Number(numericPart)) ? null : Number(numericPart);
  };

  const newsDetailPage = () => {
    const newsId = extractNumber(news?.url);
    navigate(`/news/${newsId}`);
  };

  return (
    <div
      className=""
      onClick={() => newsDetailPage(news?.url)}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          newsDetailPage(news?.url);
        }
      }}
      role="button"
      tabIndex={0}>
      <div>{news?.title}</div>
      <div>{news?.author}</div>
    </div>
  );
};

export default NewsCard;
