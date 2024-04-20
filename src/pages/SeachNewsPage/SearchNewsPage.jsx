import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useSearchNewsQuery } from "../../hooks/useSearchNews";
import NewsCard from "../../common/NewsCard/NewsCard";
import Header from "../../common/Header/Header";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";

function SearchNewsPage() {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState(null);
  const keyword = query.get("q");

  const { data, isLoading, isError, error, refetch } = useSearchNewsQuery({
    keyword,
  });
  const newsList = data && data.articles;

  const handleSortPopularRank = () => {
    setSortType("popularity");
  };

  const handleSortPublishedAtRank = () => {
    setSortType("publishedAt");
  };

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  useEffect(() => {
    setPage(1);
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [setQuery]);

  useEffect(() => {
    refetch();
  }, [keyword]);

  const sortedData = () => {
    if (!newsList) return [];

    if (sortType === "popularity") {
      return [...newsList].sort((a, b) => b.popularity - a.popularity);
    }
    if (sortType === "publishedAt") {
      return [...newsList].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
      );
    }
    return newsList;
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <div>
        <ul className="news-list-box">
          {newsList &&
            newsList.map(news => (
              <li key={news && news.url}>
                <NewsCard />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchNewsPage;
