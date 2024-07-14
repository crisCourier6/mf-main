import { Box, Paper } from '@mui/material';
import React from 'react';
import { useParams } from "react-router-dom"
import TopBar from '../components/TopBar';
import { HomeOptions } from '../components/HomeOptions';

export const FoodSubmissionView = () => {
  const { id } = useParams()
  return ( <>
  
    <TopBar></TopBar>
    <Box sx={{
      display: "grid",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      b: 15

    }}>
      Aqui va el formulario de subir/actualizar info de alimento

    </Box>
  </>
  )
}

export default FoodSubmissionView