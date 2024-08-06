import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { useEffect, useState } from 'react';
import Login from '../microfrontends/accounts/Login';
import Register from '../microfrontends/accounts/Register';
import GoogleAuth from '../microfrontends/accounts/GoogleAuth';
import Logo from "../../public/EyesFoodBetaLogo.png"

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
  


export const LoginView = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return ( <Box sx={{
        display: "grid",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 2

      }}>
        <Box
          component="img"
          sx={{
            width: "auto",
            maxWidth: "40vh",
          }}
          alt="EyesFood logo"
          src={Logo}
          />
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Iniciar sesión" {...a11yProps(0)} />
          <Tab label="Registrarse" {...a11yProps(1)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Login></Login>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Register></Register>
        </CustomTabPanel>
        <GoogleAuth></GoogleAuth>
      </Box> 
    )
}


export default LoginView