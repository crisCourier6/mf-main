import { Box, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import TopBar from '../components/TopBar';
import { HomeOptions } from '../components/HomeOptions';

export const FoodSubmissionView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  const { id } = useParams()
  return ( <>
  
    
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      Aqui va el formulario de subir/actualizar info de alimento

    </Grid>
  </>
  )
}

export default FoodSubmissionView