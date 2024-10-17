import { Box, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from "axios"
import TopBar from '../../components/TopBar';
import UserNotifications from '../../microfrontends/notification/UserNotifications';

export const UserNotificationsView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  
  return ( <>
  <Grid container direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
        <UserNotifications isAppBarVisible={isAppBarVisible}/>
    </Grid>
  </>
  )
}

export default UserNotificationsView