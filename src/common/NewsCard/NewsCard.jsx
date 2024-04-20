import React from "react";
import PropTypes from "prop-types";
import "./NewsCard.style.css";
import { useNavigate } from "react-router-dom";

function NewsCard({ articles }) {
  const navigate = useNavigate();
  const extractNumber = url => {
    if (!url) return null;
    const numericPart = url.match(/\d+/g);
    if (numericPart) {
      const numericString = numericPart.join("");
      return Number(numericString.substr(0, 15));
    }
    return null;
  };

  const newsDetailPage = () => {
    const newsId = extractNumber(articles ? articles.url : null);
    navigate(`/news/${newsId}`, { state: { articleData: articles } });
  };

  return (
    <div
      className="news--card"
      onClick={newsDetailPage}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          newsDetailPage();
        }
      }}
      role="button"
      tabIndex={0}>
      <div
        className="news-card"
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

NewsCard.propTypes = {
  articles: PropTypes.shape({
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default NewsCard;
