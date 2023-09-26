import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals-styles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme/darkTheme";
import { lightTheme } from "../styles/theme/lightTheme";
import { useState } from "react";
import {Layout } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleChangeTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Layout darkMode={darkMode} handleChangeTheme={handleChangeTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
