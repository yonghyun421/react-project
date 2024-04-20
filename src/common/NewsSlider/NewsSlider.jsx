/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import "./NewsSlider.style.css";
import "react-multi-carousel/lib/styles.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsSlider({ title, articles }) {
  return (
    <div className="slider-container">
      <h3>{title}</h3>
      <Carousel controls="true">
        {(articles.length > 5 ? articles.slice(0, 5) : articles).map(
          article => (
            <Carousel.Item key={article.id}>
              <NewsCard articles={article} />
            </Carousel.Item>
          ),
        )}
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
