import React from 'react';
import { Scanner } from '../components/Scanner';
import { Grid } from '@mui/material';
import TopBar from '../components/TopBar';

export const ScannerView = () => {
  return ( <Grid container
    display="flex" 
    direction="column" 
    justifyContent="flex-start" 
    alignItems="center" 
    
    sx={{backgroundColor: "warning.light", borderColor: "primary.dark"}}>
      <TopBar onVisibilityChange={()=>{}}/>
      <Scanner></Scanner>
  </Grid>
  )
}

export default ScannerView