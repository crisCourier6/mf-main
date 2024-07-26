import { Box, Grid, Paper } from '@mui/material';
import React from 'react';

import TopBar from '../components/TopBar';
import FoodListLocal from '../microfrontends/food-profile/FoodListLocal';

export const FoodListLocalView = () => {
  return ( <>
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <TopBar></TopBar>
      <h1>Lista alimentos DB local</h1>
      
      <FoodListLocal></FoodListLocal>
    </Grid>
  </>
  )
}

export default FoodListLocalView