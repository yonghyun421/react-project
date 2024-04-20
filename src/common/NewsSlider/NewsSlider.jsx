/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "./NewsSlider.style.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-bootstrap/Carousel";
// import { responsive } from "../../constants/responsive";
import NewsCard from "../NewsCard/NewsCard";

function NewsSlider({ title, articles }) {
  return (
    <div className="slider-container">
      <h3>{title}</h3>
      <Carousel controls="true">
        {articles.map(articles => (
          <Carousel.Item key={articles.id}>
            <NewsCard articles={articles} />
          </Carousel.Item>
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
