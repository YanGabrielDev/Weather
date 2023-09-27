import { useFormat } from "../../hooks/useFormat";
import { WeatherForecastList } from "../../interfaces/Weather.interface";
import { renderWeatherIcon } from "../../utils/renderWeatherIcon";
import {
  DetailsContainer,
  CurrentDayContainer,
  CurrentDayDetails,
  CurrentDayContent,
  CurrentDayMain,
} from "./styled";

interface CurrentDayParams {
  currentDay: WeatherForecastList;
  hours: string;
}
export const CurrentDay = ({ currentDay, hours }: CurrentDayParams) => {
  const { formatTimestamp } = useFormat();
  const { dt, feels_like ,weather, clouds, humidity, temp } = currentDay;
  const day = formatTimestamp(dt);
  const icon = renderWeatherIcon(weather[0].icon)

  return (
    <CurrentDayContainer>
      <CurrentDayMain>
        <span className="day">{day}</span>
      </CurrentDayMain>
      <CurrentDayMain>
        <span className="temp">{temp.day.toFixed()}°</span>
        <img src={icon} />
      </CurrentDayMain>
      <CurrentDayContent>
        <CurrentDayDetails>
          <DetailsContainer>
            <span className="datails-label">Sensação termica:</span>
            <span className="datails">{feels_like.day.toFixed()}°</span>
          </DetailsContainer>
          <DetailsContainer>
            <span className="datails-label">Humidade:</span>
            <span className="datails">{humidity}%</span>
          </DetailsContainer>
          <DetailsContainer>
            <span className="datails-label">Nuvens:</span>
            <span className="datails">{clouds}</span>
          </DetailsContainer>
        </CurrentDayDetails>
        <CurrentDayDetails>
          <DetailsContainer>
            <span className="datails-label">Temperatura max:</span>
            <span className="datails">{temp.max.toFixed()}°</span>
          </DetailsContainer>
          <DetailsContainer>
            <span className="datails-label">Temperatura min:</span>
            <span className="datails">{temp.min.toFixed()}°</span>
          </DetailsContainer>
        </CurrentDayDetails>
      </CurrentDayContent>
    </CurrentDayContainer>
  );
};
