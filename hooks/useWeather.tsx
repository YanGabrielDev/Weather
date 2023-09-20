import { restApiProvider } from "../services/restApiService";
import { useEffect, useState } from "react";
import { WeatherResponse } from "../interfaces/Weather.interface";

export const useWeather = () => {
  const [data, setdata] = useState<WeatherResponse>({} as WeatherResponse);
  const date = new Date()
  const hours = date.getHours() + ":" + date.getSeconds()

  const loadWeather = async () => {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    );
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    if (!lat && !long) {
      alert(
        "Localização desativada, ative para obter as informações meteorológicas da sua localização!"
      );
    }

    const response: WeatherResponse = await restApiProvider.getWeatherForecast({
      cnt: 7,
      lat: lat,
      lon: long,
    });
    setdata(response);
  };

  useEffect(() => {
    loadWeather();
  }, []);

  return { data, hours };
};
