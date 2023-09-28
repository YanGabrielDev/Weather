import { WeatherDailyList } from "../../interfaces/Weather.interface";
import * as Styled from "./styled";
import { useFormat } from "../../hooks/useFormat";
import { renderWeatherIcon } from "../../utils/renderWeatherIcon";

interface ForecastParams {
  forecast: WeatherDailyList[];
}
export const Forecast = ({ forecast }: ForecastParams) => {
  const { formatTimestamp } = useFormat();
  const nextDays = forecast.slice(1);

  return (
    <Styled.ForecastContainer>
      {nextDays.map((fore, index) => {
        const { dt, temp, weather } = fore;
        const day = formatTimestamp(dt);
        const icon = renderWeatherIcon(weather[0].icon);
        return (
          <Styled.ForecastDetails key={index}>
            <Styled.ForecastTemp>{temp.day.toFixed()}°</Styled.ForecastTemp>
            <img src={icon} />
            <Styled.ForecastDay>{day}</Styled.ForecastDay>
          </Styled.ForecastDetails>
        );
      })}
    </Styled.ForecastContainer>
  );
};
