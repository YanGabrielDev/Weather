import { Moon, Sun } from "lucide-react";
import { Button, Container, Header, Location, TextField } from "../";
import { ReactNode } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ButtonContainer } from "./styled";
import { useWeatherContext } from "../../hooks/useWeather";

interface LayoutProps {
  darkMode: boolean;
  handleChangeTheme: () => void;
  children: ReactNode;
}

export const Layout = ({
  darkMode,
  handleChangeTheme,
  children,
}: LayoutProps) => {
  const matchLocation = useMediaQuery("(min-width: 700px)");
  const { loadWeatherDailyByName, data, isLoading } = useWeatherContext();
  const { city } = data;
  return (
    <Container>
      <Header>
        {matchLocation && !isLoading && (
          <Location city={city.name} country={city.country} />
        )}
        <TextField
          placeholder="Procure a cidade..."
          onChange={(event) => {
            if (event.target.value.length > 3) {
              loadWeatherDailyByName(event.target.value);
            }
          }}
        />
        <ButtonContainer>
          <Button rounded="full" color="primary" onClick={handleChangeTheme}>
            {darkMode ? <Moon /> : <Sun />}
          </Button>
        </ButtonContainer>
      </Header>
      {children}
    </Container>
  );
};
