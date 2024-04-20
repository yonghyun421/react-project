import React from "react";
import Carousel from "react-multi-carousel";
import "./NewsSlider.style.css";
import "react-multi-carousel/lib/styles.css";
import NewsCard from "../NewsCard/NewsCard";
import { responsive } from "../../constants/responsive";

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
        {articles.map((articles, index) => (
          <NewsCard key={index} articles={articles} />
        ))}
      </Carousel>
    </div>
  );
}

export default NewsSlider;
