import { Grid } from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import FoodListMini from '../../microfrontends/food-profile/FoodListMini';


export const UserFoodHistoryView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };

  return (
    <Grid container direction="column" 
          justifyContent="flex-start" 
          alignItems="center" >
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}/> 
      <FoodListMini isAppBarVisible={isAppBarVisible}></FoodListMini>
    </Grid>
  )
}

export default UserFoodHistoryView