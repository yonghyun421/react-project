import React from "react";
import { Alert } from "react-bootstrap";
import NewsSlider from "../../../../common/NewsSlider/NewsSlider";
import { useLatestNews } from "../../../../hooks/useLatestNews";

const LatestNewsSlide = () => {
  const { data, isError, isLoading, error } = useLatestNews();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <div>
      <NewsSlider
        title={"Latest News"}
        articles={data.articles}
        // responsive={responsive}
      />
    </div>
  );
};

export default LatestNewsSlide;
