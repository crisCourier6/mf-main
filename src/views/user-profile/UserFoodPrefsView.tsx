import { Box, Grid, Paper } from '@mui/material';
import React from 'react';

import TopBar from '../../components/TopBar';
import UserFoodPreferences from '../../microfrontends/user-profile/UserFoodPreferences';


export const UserFoodPrefsView = () => {
  return ( <>
  
    
    <Grid container direction="column" 
          justifyContent="flex-start" 
          alignItems="center" sx={{gap: "5px"}}>
      <TopBar></TopBar> 
       <h2>Mis preferencias alimenticias</h2>
      <UserFoodPreferences></UserFoodPreferences>
    </Grid>
  </>
  )
}

export default UserFoodPrefsView