import { getWeatherForecast } from "../services/restApiService";
import { useEffect, useState } from "react";
export const useWeather = () => {
  const [data, setdata] = useState();

  const loadWeather = async () => {
    
    const position =  await new Promise<GeolocationPosition>( (resolve, reject) =>{
      navigator.geolocation.getCurrentPosition(resolve, reject); 
    }
    )
    const lat = position.coords.latitude
    const long = position.coords.longitude

    console.log(position);
    
      
    const response = await getWeatherForecast({
      cnt: 7,
      lat: lat,
      lon: long,
    });
    setdata(response);
  };

  useEffect(() => {
    loadWeather();
  }, []);

  return { data };
};