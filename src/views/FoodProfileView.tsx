import { Box, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../components/TopBar';
import FoodProfile from '../microfrontends/food-profile/FoodProfile';

export const FoodProfileView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  return ( <>
  <Grid container direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      <FoodProfile isAppBarVisible={isAppBarVisible}></FoodProfile>
    </Grid>
  </>
  )
}

export default FoodProfileView