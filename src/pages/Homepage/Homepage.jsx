import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LatestNewsSlide from "./components/LatestNewsSlide/LatestNewsSlide";
import CategoryNewsSlide from "./components/CategoryNewsSlide/CategoryNewsSlide";
import MediaCompanySlide from "./components/MediaCompanySlide/MediaCompanySlide";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import "./Homepage.style.css";
import YoutubeBox from "./components/YoutubeBox/YoutubeBox";

function Homepage() {
  return (
    // <div>
    <Container className="Homepage-area">
      <Row className="justify-content-md-center">
        <Col xs={12} md={11} className="favorite-area">
          <div className="favorite-title">관심 분야 뉴스</div>
          <div className="favorite-news">
            <CategoryNewsSlide category="sports" />
            <div style={{ padding: "10px" }} />
            <CategoryNewsSlide category="business" />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} md={4} className="country-area">
          {/* aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza */}
          <div className="area-title">나라별 최신뉴스</div>
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
        </Col>
        <Col md={4} className="slide-area">
          <div className="area-title">분야별 최신뉴스</div>
          <LatestNewsSlide />
          <CategoryNewsSlide category="sports" />
          <CategoryNewsSlide category="business" />
          <CategoryNewsSlide category="technology" />
          <CategoryNewsSlide category="general" />
          <CategoryNewsSlide category="science" />
        </Col>
        <Col md={3} className="weather-area">
          <WeatherBox />
          <YoutubeBox />
        </Col>
      </Row>
    </Container>
    // </div>
  );
}

export default Homepage;
