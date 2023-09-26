import { WeatherForecastList } from "../../interfaces/Weather.interface";
import * as Styled from "./styled";
import {useFormat} from '../../hooks/useFormat'

interface ForecastParams {
  forecast: WeatherForecastList[];
}
export const Forecast = ({ forecast }: ForecastParams) => {
    const { formatTimestamp } = useFormat();
    const nextDays =  forecast.filter((weather, index: number) => index !== 0)

    return( 
        <Styled.ForecastContainer>
            {nextDays.map((fore, index) => {
          const { dt, main, weather } = fore;
          const day = formatTimestamp(dt);
          const temp = main.temp.toFixed();
          const image = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        return(
            <>
              <Styled.ForecastDetails key={index}>
                <span>{day}</span>
                <img src={image} />
                <span>{temp}</span>
              </Styled.ForecastDetails>
            </>
          );
      })}
        </Styled.ForecastContainer>
  )
};
