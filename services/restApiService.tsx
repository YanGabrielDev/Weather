import { Lateef } from "@next/font/google";
import { GetWeatherForecastParams } from "../interfaces/Weather.interface";
import { api } from "./api";
import { WEATHER_ENDPOINTS } from "./restApiConstants";

export const getWeatherForecast = async ({
  cnt,
  lat,
  lon,
  q,
}: GetWeatherForecastParams) => {
  try {
    const response = await api.get(WEATHER_ENDPOINTS.getByName, {
      params: { lat, lon, q, cnt },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
