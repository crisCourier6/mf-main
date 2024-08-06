import React from 'react';
import { Button, Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ScanIcon from "../../public/icons/barcode_scan.png"
import SearchIcon from "../../public/icons/search.png"
import FoodPrefsIcon from "../../public/icons/fish-reject.png"
import ExpertsIcon from "../../public/icons/expert.png"
import StoresIcon from "../../public/icons/store.png"
import FoodListIcon from "../../public/icons/food_list.png"

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
    return <Box 
    sx={{
      pt: 2,
      pb: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      px: 2,
      gap: 4,
      color:"primary.contrastText"
    }}>
        {optionsUser.map((option) => (
        <Button variant='contained' onClick={option.function}
        sx={{
          height: "75px",
          width: "70vw",
          maxWidth: "300px",
          borderRadius: "25px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          border: "3px solid",
          borderColor: "secondary.main",
          bgcolor:"secondary.main",
          color: "secondary.contrastText",
          px: 2,
          textTransform: "none",
          fontSize: 16,
          fontWeight: "bold",
          "&:hover":{
            border: "3px solid",
            bordercolor: "secondary.contrastText",
            bgcolor: "secondary.main"
          }
        }}>
            {option.name}
          <Box
            component="img"
            sx={{
              height: 60,
              maxHeight: { xs: 40, md: 167 },
            }}
            alt={option.name}
            src={option.icon}
          />
        </Button>
      ))}
      </Box>
}