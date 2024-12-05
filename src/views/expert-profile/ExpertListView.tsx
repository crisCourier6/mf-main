import { Grid} from '@mui/material';
import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import ExpertList from '../../microfrontends/expert-profile/ExpertList';
import Loading from '../../components/Loading';


export const ExpertListView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const handleReady = () => {
    setIsReady(true); // Set the state to true when ready
  };
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };

  return ( 
    <Grid container display="flex" direction="column" 
          justifyContent="flex-start" 
          alignItems="center" >
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}/> 
      {!isReady && <Loading/>}
      <ExpertList isAppBarVisible={isAppBarVisible} onReady={handleReady}></ExpertList>
    </Grid>
  )
}

export default ExpertListView