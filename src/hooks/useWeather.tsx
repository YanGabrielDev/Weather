import { restApiProvider } from "../services/restApiService";
import { useEffect, useState } from "react";
import { WeatherResponse } from "../interfaces/Weather.interface";

export const useWeather = () => {
  const [data, setdata] = useState<WeatherResponse>({} as WeatherResponse);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const date = new Date()
  const hours = date.getHours() + ":" + date.getMinutes()
  
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
        return
      }
      return{lat, long}
    } catch (error) {
      console.error("Erro ao obter a localização:", error);
      
    }
  }

  const loadWeather = async ()  => {
    try {
      const position = await loadCurrentPosition()
       if(position){
       const response: WeatherResponse = await restApiProvider.getWeatherForecast({
         cnt: 7,
         lat: position.lat,
         lon: position.long,
       });
       setdata(response);
       setIsLoading(false)
     }
    } catch (error) {
      console.error("Erro ao obter a previsão:", error);
      
    }
  };

  useEffect(() => {
    loadWeather();
  }, []);

  return { data, hours, isLoading };
};
