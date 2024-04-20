import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import NewsSlider from "../../../../common/NewsSlider/NewsSlider";
import { useCategoryNews } from "../../../../hooks/useCategoryNews";

// eslint-disable-next-line react/prop-types
function CategoryNewsSlide({ category }) {
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
}

CategoryNewsSlide.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryNewsSlide;
