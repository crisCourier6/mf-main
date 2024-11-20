import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import { HomeOptions } from '../components/HomeOptions';
import UserFoodPreferencesMini from '../microfrontends/user-profile/UserFoodPreferencesMini';

export const HomeView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };

  useEffect(()=>{
    document.title = "Inicio - EyesFood";
  },[])

  const getGreetingMessage = () => {
    const now = new Date()
    const hour = now.getHours()

    if (hour >= 5 && hour<12){
      return "Buenos días " + window.localStorage.name
    }
    else if (hour >= 12 && hour<20){
      return "Buenas tardes " + window.localStorage.name
    }
    else {
      return "Buenas noches " + window.localStorage.name
    }
  }
  
  
  return ( <>
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <UserFoodPreferencesMini></UserFoodPreferencesMini>
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      <Typography variant='h5' width="90vw" maxWidth="400px" color={"secondary.dark"} sx={{pt:2}}>
        {getGreetingMessage()}
      </Typography>
      <HomeOptions></HomeOptions>

    </Grid>
  </>
  )
}

export default HomeView