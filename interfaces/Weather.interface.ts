export interface GetWeatherForecastParams {
  cnt: number;
  q?: string;
  lat?: number;
  lon?: number;
}

export interface WeatherResponse {
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: WeatherForecastList[];
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherForecastList {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    grnd_level: number;
    humidity: number;
    sea_level: number;
    temp_kf: number;
  };
  weather: Weather[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}
