import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from '@mui/material';
import { GoogleOAuthProvider } from "@react-oauth/google"
import "@fontsource/montserrat/400.css"
import '@fontsource/righteous/400.css';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
    dark: true
    inverted:true
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
    },
    subtitle2: {
      fontFamily: "Montserrat",
      color: "#425a6c",
      fontSize: "13px"
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
      dark: '#79d673',
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
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: baseTheme.palette.secondary.light, // Custom background color for selected items
            '&:hover': {
              backgroundColor: baseTheme.palette.secondary.main, // Custom hover background color for selected items
            },
          },
          '&:hover': {
            backgroundColor: baseTheme.palette.primary.light, // Custom hover background color for non-selected items
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
                fontFamily: 'Montserrat',
          },
          '& .MuiInputLabel-root': {
              fontFamily: 'Righteous', 
          }
        }
      }
      
    },
    MuiTypography: {
      defaultProps: {
        lineHeight: 1.3,
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: baseTheme.palette.secondary.main, // Replace with your desired hover background color
            color: baseTheme.palette.secondary.contrastText,           // Replace with your desired hover text color
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: baseTheme.palette.primary.light, // Default background color
          color: baseTheme.palette.primary.dark, // Default text color
          '&:hover': {
            backgroundColor: baseTheme.palette.secondary.light, // Background color on hover
          },
        },
        deleteIcon: {
          color: baseTheme.palette.primary.main, // Delete icon color
          '&:hover': {
            color: baseTheme.palette.primary.dark, // Delete icon color on hover
          },
        },
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
              borderColor: baseTheme.palette.secondary.dark
            }
          },
        },
        {
          props: { variant: "dark" },
          style: {
            border: "2px solid",
            borderColor: baseTheme.palette.secondary.main,
            backgroundColor: baseTheme.palette.primary.dark,
            color: baseTheme.palette.secondary.main,
            "&:hover": {
              backgroundColor: baseTheme.palette.secondary.main,
              border: "2px solid",
              borderColor: baseTheme.palette.secondary.main,
              color: baseTheme.palette.primary.dark,
            }
          },
        },
        {
          props: { variant: "inverted" },
          style: {
            backgroundColor: baseTheme.palette.secondary.light,
            color: baseTheme.palette.secondary.contrastText,
            "&:hover": {
              backgroundColor: baseTheme.palette.secondary.main,
              borderColor: baseTheme.palette.secondary.main,
              color: baseTheme.palette.primary.dark,
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
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'Montserrat', 
          fontSize: 14,
          color: baseTheme.palette.primary.dark
        },
      },
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
        