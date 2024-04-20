import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NewsSlider from "../../../../common/NewsSlider/NewsSlider";
import { useCategoryNews } from "../../../../hooks/useCategoryNews";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";

function CategoryNewsSlide({ category }) {
  const { data, isError, isLoading, error } = useCategoryNews(category);
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner />;
  if (isError) {
    navigate("/error");
    return <Alert variant="danger">{error.message}</Alert>;
  }

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
