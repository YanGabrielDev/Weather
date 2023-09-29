import { useContext } from "react";
import { WeatherContext } from "../contexts/Weather";

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

