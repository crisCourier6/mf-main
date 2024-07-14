import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      light: '##e8eff9',
      main: "#425a6c",
      dark: '#22323f',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#eefded',
      main: "#9bf096",
      dark: '#008537',
      contrastText: '#22323f',
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
        