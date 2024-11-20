import React from 'react';
import { Scanner } from '../components/Scanner';
import { Grid } from '@mui/material';

export const ScannerView = () => {

  
  return ( <Grid container 
    direction="column" 
    justifyContent="center" 
    alignItems="center" 
    width="100vw" 
    height="100vh"
    sx={{backgroundColor: "secondary.light", borderColor: "primary.dark"}}>
      <Scanner></Scanner>
  </Grid>
  )
}

export default ScannerView