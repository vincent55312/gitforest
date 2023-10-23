import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRouter from './MainRouter';
import reportWebVitals from './reportWebVitals';
import {DefaultTheme, ThemeProvider} from "styled-components";
import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

ReactGA.initialize("G-WVWWHQT6GK");

export const theme: DefaultTheme = {
    breakpoints: {
        mobile: 1200,
    },
    colors: {
        black: "#1c2129",
        blackLight: "#272d3a",
        white: "rgb(255,255,255)",
        whiteGray: "#8e97a6",
        orange: "#FF9900",
        gray: "#DDDDDD",
        green: "#6fcf97",
        red: "#eb5757",
        blue: "#00ff40",
    },
    radius: {
        soft: "5px",
        extended: "10px",
        medium: "30px",
        hard: "70px",
    },
};

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <MainRouter />
      </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
