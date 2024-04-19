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
        <Col xs={4} className="country-area">
          {/* aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza */}
          <div className="area-title">나라별 최신뉴스</div>
          <MediaCompanySlide country="cn" />
          <MediaCompanySlide country="us" />
          <MediaCompanySlide country="tr" />
          <MediaCompanySlide country="cu" />
          <MediaCompanySlide country="jp" />
          <MediaCompanySlide country="eg" />
        </Col>
        <Col xs={4} className="slide-area">
          <div className="area-title">분야별 최신뉴스</div>
          <LatestNewsSlide />
          <CategoryNewsSlide category="sports" />
          <CategoryNewsSlide category="business" />
          <CategoryNewsSlide category="technology" />
          <CategoryNewsSlide category="general" />
          <CategoryNewsSlide category="science" />
        </Col>
        <Col xs={3} className="weather-area">
          <WeatherBox />
          <YoutubeBox />
        </Col>
      </Row>
    </Container>
    // </div>
  );
}

export default Homepage;
