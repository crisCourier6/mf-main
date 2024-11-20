import { Grid } from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import UserAccount from '../../microfrontends/accounts/UserAccount';
import Loading from '../../components/Loading';

export const UserProfileView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const [isReady, setIsReady] = useState(false)
  const handleReady = () => {
    setIsReady(true); // Set the state to true when ready
  };
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  return ( <>
    <Grid container direction="column" 
          justifyContent="flex-start" 
          alignItems="center" sx={{gap:2}}>
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar> 
      {!isReady && <Loading/>}
      <UserAccount isAppBarVisible={isAppBarVisible} onReady={handleReady}/> 
      
    </Grid>
  </>
  )
}

export default UserProfileView