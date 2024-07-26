import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import { useParams } from "react-router-dom"
import TopBar from '../components/TopBar';
import { HomeOptions } from '../components/HomeOptions';

export const HomeView = () => {
  const { id } = useParams()
  return ( <>
  
    
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <TopBar></TopBar>
      <HomeOptions></HomeOptions>

    </Grid>
  </>
  )
}

export default HomeView