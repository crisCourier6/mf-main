import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from '@mui/material';
import { GoogleOAuthProvider } from "@react-oauth/google"
import "@fontsource/montserrat/400.css"
import '@fontsource/righteous/400.css';
require('dotenv').config();

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string

const baseTheme = createTheme({
  typography: {
    h1: {
      fontFamily: "Righteous",
      color: "#425a6c"
    },
    h2: {
      fontFamily: "Righteous",
      color: "#425a6c"
    },
    h3: {
      fontFamily: "Righteous",
      color: "#425a6c"
    },
    h4: {
      fontFamily: "Righteous",
      color: "#425a6c"
    },
    h5: {
      fontFamily: "Righteous",
      color: "#425a6c",
      fontSize: "24px"
    },
    h6: {
      fontFamily: "Righteous",
      color: "#425a6c",
      fontSize: "18px"
    },
    subtitle1: {
      fontFamily: "Montserrat",
      color: "#425a6c",
      fontSize: "15px"
    }
  },
  palette: {
    primary: {
      light: '#e8eff9',
      main: "#425a6c",
      dark: '#22323f',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#dff5c4',
      main: "#b0e971",
      dark: '#008000',
      contrastText: '#22323f',
    },
    warning: {
      main: '#ff9800', // Main warning color
      light: '#ffc947', // Light variant of the warning color
      dark: '#c66900', // Dark variant of the warning color
      contrastText: '#000000', // Contrast color for text on warning color
    },
  },
})

const theme = createTheme({
  ...baseTheme,
  components: {
    MuiSwitch: {
      defaultProps: {
        color:"warning"
      },
    },
    
    MuiTypography: {
      defaultProps: {
        lineHeight: 1.3,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
           
            borderRadius: 10,
            border: "5px dashed",
            borderColor: baseTheme.palette.primary.contrastText,
            backgroundColor: baseTheme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: baseTheme.palette.primary.contrastText,
              border: "5px dashed",
              borderColor: baseTheme.palette.secondary.main
            }
          },
        },
      ],
      styleOverrides: {
        root: {
          fontWeight: "bold",
          textTransform: "none",
          "&.Mui-disabled": {
            backgroundColor: "gray"
          }
        },
        contained: {
          "&:hover" : {
            color: baseTheme.palette.secondary.contrastText,
            backgroundColor: baseTheme.palette.secondary.main,
            borderColor: baseTheme.palette.secondary.main
          }
        },
        text: {
          color: baseTheme.palette.primary.dark
        },
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          lineHeight:1.2,
          fontFamily: "Montserrat",
          backgroundColor: baseTheme.palette.primary.dark,
          color: baseTheme.palette.primary.contrastText,
          borderRadius: 0,
          border: "3px solid",
          textTransform: "none",
          borderColor: baseTheme.palette.secondary.main,
          '&.Mui-selected': {
            backgroundColor: baseTheme.palette.secondary.main,
            color: baseTheme.palette.secondary.contrastText,
            borderColor: baseTheme.palette.secondary.main,
            borderRadius: 0,
            '&:hover': {
              backgroundColor: baseTheme.palette.secondary.main,
              color: baseTheme.palette.secondary.contrastText,
              borderColor: baseTheme.palette.secondary.main,
              borderRadius: 0,
            },
          },
          '&:hover': {
            backgroundColor: baseTheme.palette.primary.dark,
            color: baseTheme.palette.secondary.main,
            borderRadius: 0,
          },
        },
      },
    },
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

    <GoogleOAuthProvider clientId={googleClientId}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </GoogleOAuthProvider>
);
        