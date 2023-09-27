import { Moon, Sun } from "lucide-react";
import { Button, Container, Header, Location, TextField } from "../";
import { ReactNode } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ButtonContainer } from "./styled";

interface LayoutProps{
    darkMode: boolean,
    handleChangeTheme: () => void,
    children: ReactNode
}

export const Layout = ({darkMode, handleChangeTheme, children}: LayoutProps) => {
  const matchLocation = useMediaQuery('(min-width: 700px)')
  return (
    <>
      <Container>
      <Header>
        {matchLocation && <Location city="Belo Horizonte" country="BR"/>}
        <TextField placeholder="Procure a cidade..." />
        <ButtonContainer>
        <Button rounded="full" color="primary" onClick={handleChangeTheme}>
          {darkMode ? <Moon /> : <Sun />}
        </Button>
        </ButtonContainer>
      </Header>
        {children}
      </Container>
    </>
  );
};
