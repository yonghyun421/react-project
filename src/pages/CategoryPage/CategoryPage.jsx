import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../utils/api'
import NewsItem from './component/NewsItem'; // 각 뉴스 아이템을 위한 컴포넌트

const CategoryPage = () => {
  const { categoryName } = useParams(); // 카테고리 이름을 URL 파라미터에서 추출
  const [articles, setArticles] = useState([]); // 뉴스 아이템을 위한 상태

  useEffect(() => {
    // 뉴스 API에서 데이터를 불러오는 함수
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&category=${categoryName}&apiKey=${NEWS_API_KEY}`);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('뉴스를 가져오는데 실패했습니다.', error);
      }
    };

    fetchNews();
  }, [categoryName]);

  return (
    <div className="category-page">
      <h1>{categoryName} 뉴스</h1>
      {articles.map(article => (
        <NewsItem key={article.url} {...article} />
      ))}
    </div>
  );
};

export default CategoryPage;