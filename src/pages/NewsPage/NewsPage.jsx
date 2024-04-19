import React from "react";
import { Alert } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import NewsCard from "../../common/NewsCard/NewsCard";
import { useNewsListQuery } from "../../hooks/useNews";

const categoryNames = {
  business: "경제",
  entertainment: "엔터",
  general: "일반",
  health: "건강",
  science: "과학",
  sports: "스포츠",
  technology: "기술",
};

function NewsPage() {
  const { category } = useParams();
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useNewsListQuery({ category });

  const newsList = data && data.pages.flatMap(page => page.articles);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const handleLoadMore = () => {
    fetchNextPage();
  };

  return (
    <div>
      <h2>{categoryNames[category] || category} 뉴스</h2>
      <ul className="news-list-box">
        {newsList &&
          newsList.map(news => (
            <li key={news.id || news.url}>
              {" "}
              <NewsCard articles={news} />
            </li>
          ))}
      </ul>
      {hasNextPage && !isFetchingNextPage && (
        <button onClick={handleLoadMore} className="plus-button" type="button">
          기사 더보기 <FaChevronDown />
        </button>
      )}
    </div>
  );
}

export default NewsPage;
