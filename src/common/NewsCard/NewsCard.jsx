import React from "react";
import "./NewsCard.style.css";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
function NewsCard({ articles }) {
  const navigate = useNavigate();
  const extractNumber = url => {
    const numericPart = url.match(/\d+/g);
    if (numericPart) {
      const numericString = numericPart.join("");
      return Number(numericString.substr(0, 15));
    }
    return null;
  };

  const newsDetailPage = () => {
    const newsId = extractNumber(articles?.url);
    navigate(`/news/${newsId}`);
  };

  return (
    <div
      className=""
      onClick={() => newsDetailPage(articles?.url)}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          newsDetailPage(articles?.url);
        }
      }}
      role="button"
      tabIndex={0}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${articles.urlToImage})` }}
        //   onClick={() => navigate(`/movies/${articles.id}`)}
      >
        <div className="overlay p-2" />
      </div>
      <div className="article-contents">
        <div>{articles.title}</div>
        <div>{articles.author}</div>
      </div>
    </div>
  );
}

export default NewsCard;
