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
      className="newscard-area"
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
        style={{
          backgroundImage: `url(${articles.urlToImage ? articles.urlToImage : "/nodata.png"})`,
        }}
        //   onClick={() => navigate(`/movies/${articles.id}`)}
      >
        <div className="overlay p-2" />
      </div>
      {articles && (
        <div className="article-contents">
          <div className="article-title">{articles.title}</div>
          <div className="article-description">{articles.description}</div>
          <div className="article-author">{articles.author}</div>
        </div>
      )}
    </div>
  );
}

NewsCard.propTypes = {
  articles: PropTypes.shape({
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default NewsCard;
