import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NavigateBack = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
            <IconButton
                onClick={handleBack}
                color="primary"
                
            >
                <ArrowBackIcon />
            </IconButton>
    );
};

export default NavigateBack;