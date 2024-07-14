import { Box, Paper } from '@mui/material';
import React from 'react';

import TopBar from '../components/TopBar';
import FoodProfile from '../microfrontends/food-profile/FoodProfile';

export const FoodProfileView = () => {
  return ( <>
  
    <TopBar></TopBar>
    <Box sx={{
      display: "grid",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      b: 15

    }}>
      <FoodProfile></FoodProfile>
    </Box>
  </>
  )
}

export default FoodProfileView