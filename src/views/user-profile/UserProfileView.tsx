import { Box, Grid, Paper } from '@mui/material';
import React from 'react';

import TopBar from '../../components/TopBar';
import UserAccount from '../../microfrontends/accounts/UserAccount';
import UserFoodPreferences from '../../microfrontends/user-profile/UserFoodPreferences';
import UserProfile from '../../microfrontends/user-profile/UserProfile';

export const UserProfileView = () => {
  return ( <>
  
    
    <Grid container direction="column" 
          justifyContent="flex-start" 
          alignItems="center" sx={{gap: "10px"}}>
      <TopBar></TopBar> 
       <h1>Mi perfil</h1>
      <UserAccount></UserAccount>
      <UserProfile></UserProfile>
    </Grid>
  </>
  )
}

export default UserProfileView