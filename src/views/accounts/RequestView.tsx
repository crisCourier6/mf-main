import React from 'react';
import { Box, Grid } from '@mui/material';
import RegisterRequest from '../../microfrontends/accounts/RegisterRequest';
import EFLogo from '../../svgs/EFLogo';

export const RequestView = () => {
    return ( <Grid container display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100vw" marginTop={2}>
        
          <Box width={"90%"} sx={{maxWidth: "300px", display: "flex", alignItems: "center"}}>
            <EFLogo width={"100%"} height={"auto"}/>
          </Box>
          <RegisterRequest/>
      
      </Grid>
    )
}


export default RequestView