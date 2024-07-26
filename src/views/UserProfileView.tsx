import { Box, Grid, Paper } from '@mui/material';
import React from 'react';

import TopBar from '../components/TopBar';
import UserAccount from '../microfrontends/accounts/UserAccount';

export const UserProfileView = () => {
  return ( <>
  
    
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <TopBar></TopBar> 
       <h1>Mi perfil</h1>
      <UserAccount></UserAccount>
    </Grid>
  </>
  )
}

export default UserProfileView