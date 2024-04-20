import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NewsSlider from "../../../../common/NewsSlider/NewsSlider";
import { useMediaCompanyNews } from "../../../../hooks/useMediaCompanyNews";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";

function MediaCompanySlide({ country }) {
  const { data, isError, isLoading, error } = useMediaCompanyNews(country);
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner />;
  if (isError) {
    navigate("/error");
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <NewsSlider
        title={`${country}'s News`}
        articles={data.articles}
        // responsive={responsive}
      />
    </div>
  );
}

MediaCompanySlide.propTypes = {
  country: PropTypes.string.isRequired,
};

export default MediaCompanySlide;
