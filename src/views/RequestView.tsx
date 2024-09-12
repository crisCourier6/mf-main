import React from 'react';
import { Box, Tabs, Tab, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import RegisterRequest from '../microfrontends/accounts/RegisterRequest';
import Logo from ".././../public/EFbeta.png"

export const RequestView = () => {
    return ( <Grid container display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100vw">
        
          <Box
            component="img"
            sx={{
              width: "80vw",
              maxWidth: "400px",
              pt: 1
            }}
            alt="EyesFood logo"
            src={Logo}
            />
          <RegisterRequest/>
      
      </Grid>
    )
}


export default RequestView