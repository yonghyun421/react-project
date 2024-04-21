import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from "dayjs";
import wDescEngToKor from "../../../../utils/weather";
import "./WeatherBox.style.css";

function WeatherBox() {
  const [weather, setWeather] = useState(null);

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=32e35cf8d2f27f04f02af9af8c77e52c&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };

  const getCurrentLocation = () => {
    // eslint-disable-next-line no-undef
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="weatherbox-area box-shadow">
      <div className="weateherbox-wrap">
        <div className="weather-box">
          {weather ? (
            <>
              <div className="weather-title-area">
                <h2 className="weather-title">{weather.name}</h2>
                <div className="weather-date">
                  {dayjs().format("YYYY년 MM월 DD일")}
                </div>
              </div>
              <div className="weather-temp-area">
                <div className="weather-temp">{weather.main.temp}°C</div>
                <div className="weather-icon" />
                <h5 className="weather-cod">{wDescEngToKor(weather.cod)}</h5>
              </div>
              <ul className="weather-description">
                <li>
                  습도
                  <span>{weather.main.humidity}%</span>
                </li>
                <li>
                  최저 기온
                  <span>{weather.main.temp_min}°C</span>
                </li>
                <li>
                  최고 기온
                  <span>{weather.main.temp_max}°C</span>
                </li>
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default WeatherBox;
