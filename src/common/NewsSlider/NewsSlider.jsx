/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "./NewsSlider.style.css";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../constants/responsive";
import NewsCard from "../NewsCard/NewsCard";

function NewsSlider({ title, articles }) {
  return (
    <div className="slider-container">
      <h3>{title}</h3>
      <Carousel
        infinite
        centerMode
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}>
        {articles.map((article, index) => (
          <NewsCard key={article.id || index} articles={article} />
        ))}
      </Carousel>
    </div>
  );
}

NewsSlider.propTypes = {
  title: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default NewsSlider;
