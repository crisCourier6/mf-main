import React, { useEffect} from 'react';
import { useState } from "react"
import { useZxing } from "react-zxing"
import { Box, Button, Grid, Paper, TextField } from "@mui/material"
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
        window.location.replace("http://192.168.100.6:4000/food/" + manualCode)
        }
    }

    return (
        <Grid container display="flex" 
            flexDirection="column" 
            justifyContent="start"
            alignItems="center"
            sx={{width: "95%", maxWidth:"600px", height: "95%", gap:2}}
        >
        <Paper elevation={0} sx={{
            display: "flex",
            color: "secondary.contrastText",
            width: "100%",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 0,
            bgcolor: "transparent"

        }}>
            Enfoca el código de barras del producto o ingresa el código numérico manualmente
        </Paper>
        <Box 
        sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <TextField 
            value={manualCode} 
            label="Código de barras"  
            onChange={(e) => setManualCode(e.target.value)}
            sx={{
            "& .MuiInputBase-input": {
                height: "25px", // Adjust input's internal height
                padding: "10px", // Adjust padding for the input text
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