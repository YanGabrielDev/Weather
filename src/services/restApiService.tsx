import { Lateef } from "@next/font/google";
import { GetWeatherDailyParams } from "../interfaces/Weather.interface";
import { api } from "./api";
import { WEATHER_ENDPOINTS } from "./restApiConstants";

export const restApiProvider = {
  getWeatherDaily: async ({
    cnt,
    lat,
    lon,
    q,
  }: GetWeatherDailyParams) => {
    try {
      const response = await api.get(WEATHER_ENDPOINTS.getWeatherDaily, {
        params: { lat, lon, q, cnt },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
}
