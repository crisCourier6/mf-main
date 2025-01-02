import React from 'react';
import { Box, Tabs, Tab, Grid } from '@mui/material';
import Login from '../../microfrontends/accounts/Login';
import Register from '../../microfrontends/accounts/Register';
import GoogleAuth from '../../microfrontends/accounts/GoogleAuth';
import EFLogo from '../../svgs/EFLogo';

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
      style={{width: "70%", maxWidth: "300px", justifyContent: "center"}}
    >
      {value === index && <Box>{children}</Box>}
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

    return ( <Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" width="100vw" height={"100vh"}>
        
          <Box width={"80%"} sx={{maxWidth: "300px", display: "flex", alignItems: "center", pt:1}}>
            <EFLogo width={"100%"} height={"auto"}/>
          </Box>
          <Tabs  value={value} onChange={handleChange} >
            <Tab  label="Iniciar sesión" {...a11yProps(0)}/>
            <Tab label="Registrarse" {...a11yProps(1)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Login></Login>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Register></Register>
          </CustomTabPanel>
          <Box sx={{height:10}}/>
          <GoogleAuth></GoogleAuth>
      
      </Grid>
    )
}


export default LoginView