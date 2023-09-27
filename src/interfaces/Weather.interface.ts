export interface GetWeatherDailyParams {
  cnt?: number;
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
  name: string;
  list: WeatherDailyList[];
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherDailyList {
  clouds: number;
  dt: number;
  dt_txt: string;
    temp: Temp;
    feels_like: FeelsLike;
    temp_min: number;
    temp_max: number;
    pressure: number;
    grnd_level: number;
    humidity: number;
    sea_level: number;
    temp_kf: number;
  weather: Weather[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

export interface Temp{
day: number;
eve: number;
max: number;
min: number;
morn: number;
night: number;
}

export interface FeelsLike{
day: number;
eve: number;
morn: number;
night: number;
}