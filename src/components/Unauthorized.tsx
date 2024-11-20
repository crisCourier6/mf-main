import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
    const navigate = useNavigate()
  return (
    <Box sx={{mt:2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap:2, width: "95%", maxWidth: "800"}}>
        <Typography variant='h5'>
            No tienes permiso para ver esta página
        </Typography>
        <Button sx={{maxWidth: "50%"}} variant='contained' onClick={()=>navigate("/home")}>
            Volver al inicio
        </Button>
    </Box>
  );
};

export default Unauthorized;