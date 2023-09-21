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
    const {response, request, message} = error

    if (response) {
      console.error('Erro de resposta:', response.data);
    } else if (request) {
      console.error('Erro de requisição:', request);
    } else {
      console.error('Erro:', message);
    }
    return Promise.reject(error);
  }
);
