import { Grid } from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import UserFoodPreferences from '../../microfrontends/user-profile/UserFoodPreferences';


export const UserFoodPrefsView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  return (
    <Grid container direction="column" 
          justifyContent="flex-start" 
          alignItems="center">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      <UserFoodPreferences isAppBarVisible={isAppBarVisible}></UserFoodPreferences>
    </Grid>
  )
}

export default UserFoodPrefsView