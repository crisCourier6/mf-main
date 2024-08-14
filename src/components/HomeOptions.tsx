import React from 'react';
import { Button, Box, Typography, Grid} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ScanIcon from "../../public/icons/barcode_scan.png"
import SearchIcon from "../../public/icons/search.png"
import FoodPrefsIcon from "../../public/icons/food-prefs.png"
import ExpertsIcon from "../../public/icons/expert.png"
import StoresIcon from "../../public/icons/store.png"
import FoodListIcon from "../../public/icons/food_list.png"
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
    {name: "Escanear alimento", function: handleScan, icon: ScanIcon},
    {name: "Buscar alimento", function: handleSearch, icon: SearchIcon},
    {name: "Mis preferencias alimenticias", function: handleFoodPrefs, icon: FoodPrefsIcon},
    {name: "Nutricionistas", function: handleExperts, icon: ExpertsIcon},
    {name: "Tiendas saludables", function: handleStores, icon: StoresIcon},
    {name: "Lista local de alimentos", function: handleFoodLocal, icon: FoodListIcon},
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
                <Box width="70%">
                  <Box
                      component="img"
                      sx={{
                        width: "100%"
                      }}
                      alt={option.name}
                      src={option.icon}
                  />
                </Box>
                
                <Typography fontWeight="bold">
                    {option.name}
                </Typography>
            </Button>
          ))}
      </Grid>
}