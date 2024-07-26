import { Box, Grid, Paper } from '@mui/material';
import React from 'react';

import TopBar from '../components/TopBar';
import FoodProfile from '../microfrontends/food-profile/FoodProfile';

export const FoodProfileView = () => {
  return ( <>
  <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <TopBar></TopBar>
    
      <FoodProfile></FoodProfile>
    </Grid>
  </>
  )
}

export default FoodProfileView