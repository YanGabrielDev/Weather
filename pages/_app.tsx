import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals-styles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme/darkTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
