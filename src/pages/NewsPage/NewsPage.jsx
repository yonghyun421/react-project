import React from "react";
import { Alert } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NewsCard from "../../common/NewsCard/NewsCard";
import { useNewsListQuery } from "../../hooks/useNews";
import { useSearchNewsQuery } from "../../hooks/useSearchNews";
import "./NewsPage.style.css";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";

const categoryNames = {
  business: "경제",
  entertainment: "연예",
  general: "일반",
  health: "건강",
  science: "과학",
  sports: "스포츠",
  technology: "기술",
};

function NewsPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");
  const bookmarkList = useSelector(state => state.auth.bookmarkList);

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = keyword
    ? useSearchNewsQuery({ keyword })
    : useNewsListQuery({ category });

  // 북마크 여부 추가
  const newsList =
    data &&
    data.pages.flatMap(page =>
      page.articles.map(article => ({
        ...article,
        isBookmarked: bookmarkList.some(bm => bm.url === article.url),
      })),
    );

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const handleLoadMore = () => {
    fetchNextPage();
  };

  return (
    <div>
      <div className="whole">
        <h2 className="news-title">
          {keyword ? "검색" : categoryNames[category] || category} 뉴스
        </h2>
      </div>
      <div
        className={`news-list-total ${
          newsList && newsList.length > 0 ? "" : "no-results"
        }`}>
        {newsList && newsList.length > 0 ? (
          <ul className="news-list-box">
            {newsList.map(news => (
              <li key={news.id || news.url}>
                <NewsCard articles={news} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-results-message">
            {keyword
              ? "검색어가 없습니다."
              : `${categoryNames[category] || category} 카테고리에 기사가 없습니다.`}
          </div>
        )}
      </div>
      {newsList && newsList.length > 0 && (
        <div className="plus-button-box">
          {hasNextPage && !isFetchingNextPage && (
            <button
              onClick={handleLoadMore}
              className="plus-button"
              type="button">
              기사 더보기 <FaChevronDown />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default NewsPage;
