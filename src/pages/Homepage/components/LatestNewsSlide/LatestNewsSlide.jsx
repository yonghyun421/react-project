import React from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NewsSlider from "../../../../common/NewsSlider/NewsSlider";
import { useLatestNews } from "../../../../hooks/useLatestNews";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";

function LatestNewsSlide() {
  const { data, isError, isLoading, error } = useLatestNews();
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner />;
  if (isError) {
    navigate("/error");
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <NewsSlider
        title="Latest News"
        articles={data.articles}
        // responsive={responsive}
      />
    </div>
  );
}

export default LatestNewsSlide;
