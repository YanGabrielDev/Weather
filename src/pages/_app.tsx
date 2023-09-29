import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals-styles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme/darkTheme";
import { lightTheme } from "../styles/theme/lightTheme";
import { useEffect, useState } from "react";
import {Layout } from "../components";
import { WeatherProvider } from "../contexts/Weather";

export default function App({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = useState<string>("light");
  const theme = themeMode ===  "light" ? lightTheme : darkTheme
  const darkMode = themeMode === "dark"

  const handleChangeTheme = () => {
    const currentTheme = themeMode === "light" ? "dark" : "light"
    setThemeMode(currentTheme);
    localStorage.setItem("theme", currentTheme)
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if(theme){
      setThemeMode(theme)
    }
  },[])

  return (
    <WeatherProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout darkMode={darkMode} handleChangeTheme={handleChangeTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </WeatherProvider>
  );
}
