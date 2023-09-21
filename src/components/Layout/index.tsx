import { Moon, Sun } from "lucide-react";
import { Button, Container, Header, Location, TextField } from "../";
import { ReactNode } from "react";

interface LayoutProps{
    darkMode: boolean,
    handleChangeTheme: () => void,
    children: ReactNode
}

export const Layout = ({darkMode, handleChangeTheme, children}: LayoutProps) => {
  return (
    <>
      <Header>
        <Location city="Belo Horizonte" country="BR"/>
        <TextField placeholder="Procure a cidade..." />
        <Button rounded="full" color="primary" onClick={handleChangeTheme}>
          {darkMode ? <Moon /> : <Sun />}
        </Button>
      </Header>
      <Container>
        {children}
      </Container>
    </>
  );
};
