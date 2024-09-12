import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import FoodDiary from '../../microfrontends/food-diary/FoodDiary';

export const FoodDiaryView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  return ( <>
    <Grid container direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      <Typography variant='h5' width="100%" maxWidth="400px" sx={{py:1}}>
        Diario alimenticio
      </Typography>
      
      <FoodDiary></FoodDiary>
    </Grid>
  </>
  )
}

export default FoodDiaryView