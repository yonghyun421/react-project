/* eslint-disable */
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function WeatherBox() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=32e35cf8d2f27f04f02af9af8c77e52c&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  return (
    <div>
      <div className={"container"}>
        <div className={"weather-box"}>
          <div>{weather?.name}</div>
          <h2>{weather?.main.temp}°C</h2>
          <h3>{weather?.weather[0].description}</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherBox;
