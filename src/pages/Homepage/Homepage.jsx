import React from "react";
import LatestNewsSlide from './components/LatestNewsSlide/LatestNewsSlide';
import CategoryNewsSlide from './components/CategoryNewsSlide/CategoryNewsSlide';
import MediaCompanySlide from './components/MediaCompanySlide/MediaCompanySlide';
import WeatherBox from './components/WeatherBox/WeatherBox';

const Homepage = () => {
  return (
    <div>
      <WeatherBox />
     <LatestNewsSlide />
     <CategoryNewsSlide category="sports"/>
     <CategoryNewsSlide category="business"/>
     <MediaCompanySlide company="bbc-news"/>
    </div>
  );
};

export default Homepage;
