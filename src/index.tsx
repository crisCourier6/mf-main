import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from '@mui/material';
import { GoogleOAuthProvider } from "@react-oauth/google"

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
  },
  components: {
    MuiSwitch: {
      defaultProps: {
        color:"secondary"
      },
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="438235274601-8upsdclbaqgep1cncb4c86cs664kicr8.apps.googleusercontent.com">
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
        