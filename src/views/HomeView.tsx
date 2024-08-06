import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import { useParams } from "react-router-dom"
import TopBar from '../components/TopBar';
import { HomeOptions } from '../components/HomeOptions';
import UserFoodPreferencesMini from '../microfrontends/user-profile/UserFoodPreferencesMini';

export const HomeView = () => {
  const { id } = useParams()
  return ( <>
    
    
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <UserFoodPreferencesMini></UserFoodPreferencesMini>
      <TopBar></TopBar>
      <HomeOptions></HomeOptions>

    </Grid>
  </>
  )
}

export default HomeView