import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals-styles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme/darkTheme";
import { lightTheme } from "../styles/theme/lightTheme";
import { useState } from "react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Sun, Moon } from "lucide-react";

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleChangeTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header>
          <Button rounded="full" color="primary" onClick={handleChangeTheme}>{darkMode ? <Moon /> : <Sun />}</Button>
        </Header>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
