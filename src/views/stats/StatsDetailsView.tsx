import { Grid } from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import StatsDetails from '../../microfrontends/stats/StatsDetails';


export const StatsDetailsView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  return (
    <Grid container direction="column" 
          justifyContent="flex-start" 
          alignItems="center">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      <StatsDetails isAppBarVisible={isAppBarVisible}></StatsDetails>
    </Grid>
  )
}

export default StatsDetailsView