import { Grid } from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import UserStats from '../../microfrontends/stats/UserStats';


export const UserStatsView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  return ( <>
  
    
    <Grid container direction="column" 
          justifyContent="flex-start" 
          alignItems="center">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      <UserStats isAppBarVisible={isAppBarVisible}></UserStats>
    </Grid>
  </>
  )
}

export default UserStatsView