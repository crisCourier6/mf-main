import { Box, Paper } from '@mui/material';
import React from 'react';

import TopBar from '../components/TopBar';
import FoodListLocal from '../microfrontends/food-profile/FoodListLocal';

export const FoodListLocalView = () => {
  return ( <>
  
    <TopBar></TopBar>
    <Box sx={{
      display: "grid",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      b: 15

    }}>
        <h1>Lista alimentos DB local</h1>
      <FoodListLocal></FoodListLocal>
    </Box>
  </>
  )
}

export default FoodListLocalView