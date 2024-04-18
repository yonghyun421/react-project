import React from "react";
import { Alert } from "react-bootstrap";
import NewsSlider from "../../../../common/NewsSlider/NewsSlider";
import { useCategoryNews } from "../../../../hooks/useCategoryNews";

const CategoryNewsSlide = ({ category }) => {
  const { data, isError, isLoading, error } = useCategoryNews(category);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <div>
      <NewsSlider
        title={`${category} News`}
        articles={data.articles}
        // responsive={responsive}
      />
    </div>
  );
};

export default CategoryNewsSlide;
