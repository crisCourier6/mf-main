import React from 'react';
import { useState } from "react"
import { useZxing } from "react-zxing"
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const Scanner = () => {
    const navigate = useNavigate()
    const [manualCode, setManualCode] = useState("")
    const validDigits = [12, 13]
    const { ref } = useZxing({
        onDecodeResult(result) {
        if(validDigits.includes(result.getText().length)){
            navigate("/food/" + result.getText())
            
        }   
        },
    });

    const handleManualCode = () => {
        const validDigits = [12, 13]
        if (validDigits.includes(manualCode.length)){
            navigate("/food/" + manualCode)
        }
    }

    return (
        <Grid container display="flex" 
            flexDirection="column" 
            justifyContent="flex-start"
            alignItems="center"
            sx={{width: "95%", maxWidth:"600px", height: "100vh"}}
        >
            <Typography variant='h5' sx={{py:1}}>
                Escáner
            </Typography>
            <Paper elevation={0} sx={{
                display: "flex",
                color: "secondary.contrastText",
                width: "100%",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 0,
                bgcolor: "transparent",
                

            }}>
                <Typography variant='subtitle2'>
                    Enfoca el código de barras del producto o ingresa el código numérico manualmente
                </Typography>
            </Paper>
            <Box 
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                py:1,
            }}>
                <TextField 
                value={manualCode} 
                label="Código de barras"  
                onChange={(e) => setManualCode(e.target.value)}
                sx={{
                    "& .MuiInputBase-root": {
                      height: "35px", // Adjust the overall height of the input
                    },
                    "& .MuiInputBase-input": {
                      padding: "8px", // Adjust padding for input text
                    },
                    "& .MuiInputLabel-root": {
                      transform: "translate(14px, 6px) scale(1)", // Center the label when the field is empty
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -6px) scale(0.75)", // Adjust label position when the field has a value
                    },
                  }}
                />
                <Button onClick={handleManualCode} disabled={manualCode.length<12} variant="contained">
                    Buscar
                </Button>
            </Box>
            <Box
            sx={{
                border: "5px solid",
                borderColor: "primary.dark",
                width:"100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box"
            }}
            > 
                <video ref={ref}/>
            </Box>
        </Grid>
  );
}