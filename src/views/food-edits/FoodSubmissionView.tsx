import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import TopBar from '../../components/TopBar';

export const FoodSubmissionView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  return ( <>
  
    
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      Aqui va el formulario de subir/actualizar info de alimento

    </Grid>
  </>
  )
}

export default FoodSubmissionView