import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LatestNewsSlide from "./components/LatestNewsSlide/LatestNewsSlide";
import CategoryNewsSlide from "./components/CategoryNewsSlide/CategoryNewsSlide";
import MediaCompanySlide from "./components/MediaCompanySlide/MediaCompanySlide";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import "./Homepage.style.css";
import YoutubeBox from "./components/YoutubeBox/YoutubeBox";

function Homepage() {
  const [interest, setInterest] = useState([]);

  useEffect(() => {
    const interstArray = window.localStorage.getItem("interest");
    if (interstArray) {
      setInterest(JSON.parse(interstArray));
    }
  }, []);

  return (
    <div className="Homepage-area">
      {interest && interest.length > 0 && (
        <div className="favorite-area box-shadow">
          <h2 className="favorite-title Home-title">관심 분야 뉴스</h2>
          <div className="favorite-news">
            {/* <CategoryNewsSlide category="sports" />
            <CategoryNewsSlide category="business" /> */}
            {interest.map((item, index) => (
              <CategoryNewsSlide key={index} category={item} />
            ))}
          </div>
        </div>
      )}
      <div className="mainNews--list">
        <div className="country-area box-shadow">
          <h2 className="area-title Home-title">나라별 최신뉴스</h2>
          <MediaCompanySlide country="cn" />
          <MediaCompanySlide country="us" />
          <MediaCompanySlide country="tr" />
          <MediaCompanySlide country="cu" />
          <MediaCompanySlide country="jp" />
          <MediaCompanySlide country="eg" />
          <div className="refresh-button">
            <img
              alt="refresh"
              style={{ width: "50px", height: "50px" }}
              src="https://us.123rf.com/450wm/foxroar/foxroar1606/foxroar160600250/58011676-%EC%83%88%EB%A1%9C-%EA%B3%A0%EC%B9%A8-%EC%95%84%EC%9D%B4%EC%BD%98.jpg"
            />
          </div>
        </div>
        <div className="slide-area box-shadow">
          <h2 className="area-title Home-title">분야별 최신뉴스</h2>
          <LatestNewsSlide />
          <CategoryNewsSlide category="sports" />
          <CategoryNewsSlide category="business" />
          <CategoryNewsSlide category="technology" />
          <CategoryNewsSlide category="general" />
          <CategoryNewsSlide category="science" />
        </div>
        <div className="weather-area">
          <WeatherBox />
          <YoutubeBox />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
