import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { UIProvider } from "../context/ui";
import "../styles/globals.css";
import { darkTheme, lightTheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider sidemenuOpen={false}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;
