import React from 'react';
import { Button, Box, Typography, Grid} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ScannerIcon from '../svgs/ScannerIcon';
import SearchIcon from '../svgs/SearchIcon';
import FoodPrefsIcon from '../svgs/FoodPrefsIcon';
import ExpertIcon from '../svgs/ExpertIcon';
import StoreIcon from '../svgs/StoreIcon';
import FoodListIcon from '../svgs/FoodListIcon';
import { inherits } from 'util';

export const HomeOptions = () => {
  const navigate = useNavigate()
  
  const handleScan = () => {
    window.location.replace("https://192.168.100.6:4002/")
  }

  const handleSearch = () => {
    navigate("/search")
  }

  const handleFoodPrefs = () => {
    navigate("/users/" + window.localStorage.id + "/food-prefs")
  }

  const handleExperts = () => {
    navigate("/experts")
  }

  const handleStores = () => {
    navigate("/stores")
  }

  const handleFoodLocal = () => {
    navigate("/food")
  }

  const optionsUser = [
    {name: "Escanear alimento", function: handleScan, icon: <ScannerIcon width='100%' height= 'auto'/>},
    {name: "Buscar alimento", function: handleSearch, icon: <SearchIcon width='100%' height= 'auto'/>},
    {name: "Mis preferencias alimenticias", function: handleFoodPrefs, icon: <FoodPrefsIcon width='100%' height= 'auto'/>},
    {name: "Nutricionistas", function: handleExperts, icon: <ExpertIcon width='100%' height= 'auto'/>},
    {name: "Tiendas saludables", function: handleStores, icon: <StoreIcon width='100%' height= 'auto'/>},
    {name: "Lista local de alimentos", function: handleFoodLocal, icon: <FoodListIcon width='100%' height= 'auto'/>},
  ]
    return <Grid container display="flex" 
                flexDirection="row" 
                justifyContent="space-around"
                alignItems="stretch"
                sx={{width: "100vw", maxWidth:"500px", gap:"5px", flexWrap: "wrap", pb: 7}}
            >
            {optionsUser.map((option) => (
              <Button variant='dashed' onClick={option.function} 
              sx={{display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "stretch",
                  width: "45%", 
                  fontWeight: "bold",
              }}
              > 
                <Box width="70%" color="inherit">
                  {option.icon}
                </Box>
                
                <Typography color="primary.dark" fontFamily="Montserrat">
                    {option.name}
                </Typography>
            </Button>
          ))}
      </Grid>
}