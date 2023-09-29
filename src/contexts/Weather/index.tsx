import { restApiProvider } from "../../services/restApiService";
import { useEffect, useState, createContext } from "react";
import { WeatherResponse } from "../../interfaces/Weather.interface";
import { WeatherProviderParams, WeatherProviderValues } from "./interface";

export const WeatherContext = createContext({} as WeatherProviderValues);

export const WeatherProvider = ({ children }: WeatherProviderParams) => {
  const [data, setdata] = useState<WeatherResponse>({} as WeatherResponse);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const loadCurrentPosition = async () => {
    try {
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
        return;
      }
      return { lat, long };
    } catch (error) {
      console.error("Erro ao obter a localização:", error);
    }
  };

  const loadWeather = async () => {
    try {
      const position = await loadCurrentPosition();
      if (position) {
        const response: WeatherResponse = await restApiProvider.getWeatherDaily(
          {
            cnt: 7,
            lat: position.lat,
            lon: position.long,
          }
        );
        setdata(response);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Erro ao obter a previsão:", error);
    }
  };

  const loadWeatherDailyByName = async (cityName: string) => {
    try {
      const response: WeatherResponse = await restApiProvider.getWeatherDaily({
        cnt: 7,
        q: cityName,
      });
      setdata(response);
    } catch (error) {
      console.error("Erro ao obter a previsão:", error);
    }
  };

  useEffect(() => {
    loadWeather();
  }, []);

  const value = { data, isLoading, loadWeatherDailyByName };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
