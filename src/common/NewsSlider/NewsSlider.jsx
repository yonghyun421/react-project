/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from "react";
// import Carousel from "react-multi-carousel";
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

export default NewsSlider;
