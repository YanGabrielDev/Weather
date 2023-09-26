import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { CurrentDay } from "../components/CurrentDay";
import { Forecast } from "../components/Forecast";
import { WeatherContainer } from "./styles";

export default function Home() {
  const { data, hours, isLoading } = useWeather();
  const weatherList = data?.list
  
  return (
    <WeatherContainer>
      <Head>
        <title>Weather app</title>
        <meta name="description" content="Generated by Weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (<h1>Carregando</h1>) : (
        <>
        <CurrentDay currentDay={weatherList[0]} hours={hours}/>
      <Forecast forecast={weatherList}/>
        </>
      )}
    </WeatherContainer>
   
)}