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
  console.log("weather", weather);
  return (
    <div className="weatherbox-area">
      <div className="container">
        <div className="weather-box">
          {weather ? (
            <>
              <div>{dayjs().format("YYYY년 MM월 DD일")}</div>
              <div>{weather.name}</div>
              <div>{weather.main.temp}°C</div>
              <div>{wDescEngToKor(weather.cod)}</div>
              <div className="weather-description-title">
                <div>습도</div>
                <div>최저 기온</div>
                <div>최고 기온</div>
              </div>
              <div className="weather-description">
                <div>{weather.main.humidity}</div>
                <div>{weather.main.temp_min}</div>
                <div>{weather.main.temp_max}</div>
              </div>
            </>
          ) : null}
        </div>
        }
      </div>
    </div>
  );
}

export default WeatherBox;
