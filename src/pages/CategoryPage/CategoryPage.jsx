import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/api";
import "./CategoryPage.style.css";
import { FaChevronDown } from "react-icons/fa";

const categoryNames = {
  business: "경제",
  entertainment: "엔터",
  general: "일반",
  health: "건강",
  science: "과학",
  sports: "스포츠",
  technology: "기술",
};

function CategoryPage() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setArticles([]); // 카테고리가 변경될 때 기사 목록 초기화
    const fetchArticles = async () => {
      setLoading(true);
      const API_KEY = process.env.REACT_APP_KEY;
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}&pageSize=5&page=${page}`,
        );
        setArticles(prev => [...prev, ...response.data.articles]);
        setHasMore(response.data.articles.length > 0);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="category-page-container">
      <h2>{categoryNames[category] || category} 뉴스</h2>
      <ul className="articles-list">
        {articles.map((article, index) => (
          <li key={article.id || index} className="article">
            <img src={article.urlToImage} alt={article.title} />
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-dierect-link">
                {article.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
      {hasMore && !loading && (
        <button onClick={handleLoadMore} className="plus-button">
          기사 더보기 <FaChevronDown />
        </button>
      )}
      {loading && <div>로딩 중...</div>}
    </div>
  );
}

export default CategoryPage;
