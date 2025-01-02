import { Box } from '@mui/material';
import React from 'react';

import Logo from "../../../public/EyesFoodBetaLogo.png"
import ResetPassword from '../../microfrontends/accounts/ResetPassword';

export const ResetPassView = () => {
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
      <ResetPassword/>
  </Box> 
  )
}

export default ResetPassView