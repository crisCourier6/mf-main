import { Grid } from '@mui/material';
import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import FoodDiary from '../../microfrontends/food-diary/FoodDiary';
import FoodDiaryLocal from '../../microfrontends/food-diary/FoodDiaryLocal';

export const FoodDiaryView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const googleUser = window.localStorage.getItem("g_auth")
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  return ( 
    <Grid container direction="column" justifyContent="flex-start" alignItems="center" width={"100vw"}>
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>

      {googleUser
        ?<FoodDiary></FoodDiary>
        :<FoodDiaryLocal></FoodDiaryLocal>
      }
      
    </Grid>

  )
}

export default FoodDiaryView