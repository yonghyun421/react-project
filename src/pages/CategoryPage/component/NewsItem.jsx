import React from "react";
const { categoryName } = useParams();

const NewsItem = ({ title, description, url, publishedAt, urlToImage }) => (
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

export default NewsItem;
