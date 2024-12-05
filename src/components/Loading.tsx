import React from 'react';
import Lottie from 'react-lottie-player'
import animationData from "../../public/loadingAnim2.json"; // Import the Lottie JSON
import { Box } from '@mui/material';

const Loading = () => {
  return (
    <Box sx={{ display: "flex", width: "70%", justifyContent: "center", pt: 2}}>
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: "100%", maxWidth: 300, height: "auto" }}
    />
    </Box>
  );
};

export default Loading;