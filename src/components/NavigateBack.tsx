import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NavigateBack = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <Button
              onClick={handleBack}
              size="small"
              color="inherit"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                border: "2px",
              }}
            >
                <ArrowBackIcon />
        </Button>
    );
};

export default NavigateBack;