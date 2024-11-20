import { Grid } from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import StoreList from '../../microfrontends/store-profile/StoreList';


export const StoreListView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };

  return ( <>
  
    
    <Grid container direction="column" 
          justifyContent="flex-start" 
          alignItems="center" >
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}/> 
      <StoreList isAppBarVisible={isAppBarVisible}></StoreList>
    </Grid>
  </>
  )
}

export default StoreListView