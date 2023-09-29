import { ReactNode } from "react";
import { WeatherResponse } from "../../interfaces/Weather.interface";

export interface WeatherProviderParams {
  children: ReactNode;
}

export interface WeatherProviderValues {
  data: WeatherResponse;
  isLoading: boolean;
  loadWeatherDailyByName: (cityName: string) => Promise<void>;
}
