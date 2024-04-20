import React from "react";
import { useParams } from "react-router-dom";

const { categoryName } = useParams;

function NewsItem({ title, description, url, publishedAt, urlToImage }) {
  return (
    <div className="news-item">
      {urlToImage && <img src={urlToImage} alt="News" />}
      <h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p>{description}</p>
      <span>{new Date(publishedAt).toLocaleDateString()}</span>
    </div>
  );
}

export default NewsItem;
