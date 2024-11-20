import { Box } from '@mui/material';
import React from 'react';
import { useParams } from "react-router-dom"
import Activate from '../../microfrontends/accounts/Activate';
import Logo from "../../../public/EyesFoodBetaLogo.png"

export const ActivateView = () => {
  return ( <Box sx={{
    display: "grid",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 2

  }}>
    <Box
      component="img"
      sx={{
        width: "90vw",
        maxWidth: "300px",
      }}
      alt="EyesFood logo"
      src={Logo}
      />
      <Activate></Activate>
  </Box> 
  )
}

export default ActivateView