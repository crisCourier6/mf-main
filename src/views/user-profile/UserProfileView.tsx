import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import UserAccount from '../../microfrontends/accounts/UserAccount';
import UserFoodPreferences from '../../microfrontends/user-profile/UserFoodPreferences';
import UserProfile from '../../microfrontends/user-profile/UserProfile';

export const UserProfileView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  return ( <>
  
    
    <Grid container direction="column" 
          justifyContent="flex-start" 
          alignItems="center">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar> 
      <UserAccount isAppBarVisible={isAppBarVisible}/> 
      <UserProfile/>
      
    </Grid>
  </>
  )
}

export default UserProfileView