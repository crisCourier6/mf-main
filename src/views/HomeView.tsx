import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import { HomeOptions } from '../components/HomeOptions';
import UserFoodPreferencesMini from '../microfrontends/user-profile/UserFoodPreferencesMini';
import { Link } from 'react-router-dom';

export const HomeView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const currentUserId = window.sessionStorage.getItem("id") ?? window.localStorage.getItem("id") ?? ""
  const name = window.sessionStorage.getItem("name") ?? window.localStorage.getItem("name") ?? ""
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };

  useEffect(()=>{
    document.title = "Inicio - EyesFood";
  },[])

  const getGreetingMessage = (name:string, currentUserId:string) => {
    const now = new Date();
    const hour = now.getHours();
  
    let greeting = '';
    if (hour >= 5 && hour < 12) {
      greeting = 'Buenos días';
    } else if (hour >= 12 && hour < 20) {
      greeting = 'Buenas tardes';
    } else {
      greeting = 'Buenas noches';
    }
  
    return (
      <>
        {greeting}{' '}
        <Link to={`/users/${currentUserId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          {name}
        </Link>
      </>
    );
  };
  
  
  return (
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <UserFoodPreferencesMini></UserFoodPreferencesMini>
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      <Typography variant='h6' width="90vw" maxWidth="400px" color={"secondary.dark"} sx={{pt:2}}>
        {getGreetingMessage(name, currentUserId)}
      </Typography>
      <HomeOptions></HomeOptions>

    </Grid>
  )
}

export default HomeView