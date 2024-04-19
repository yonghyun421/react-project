// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchCurrentLocationWeather = async () => {
//   const response = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=32e35cf8d2f27f04f02af9af8c77e52c&units=metric`
//   );
//   return response.json();
// };
// // sources=bbc-news

// export const useCurrentLocationWeather = () => {
//   return useQuery({
//     queryKey: ["최신뉴스"],
//     queryFn: fetchCurrentLocationWeather,
//   });
// };
