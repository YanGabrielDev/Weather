import axios, {AxiosInstance, AxiosResponse} from 'axios'

export const api: AxiosInstance = axios.create({
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  params:{
    appid: process.env.NEXT_PUBLIC_WEATHER_KEY,
    lang: "pt_br",
    units: "metric",

  }
})


api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Erro de resposta:', error.response.data);
    } else if (error.request) {
      console.error('Erro de requisição:', error.request);
    } else {
      console.error('Erro:', error.message);
    }
    return Promise.reject(error);
  }
);
