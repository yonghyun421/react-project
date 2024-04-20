import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import NewsSlider from "../../../../common/NewsSlider/NewsSlider";
import { useMediaCompanyNews } from "../../../../hooks/useMediaCompanyNews";

function MediaCompanySlide({ country }) {
  const { data, isError, isLoading, error } = useMediaCompanyNews(country);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
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
