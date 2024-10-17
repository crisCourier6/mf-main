import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, Grid, CircularProgress} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ScannerIcon from '../svgs/ScannerIcon';
import SearchIcon from '../svgs/SearchIcon';
import FoodPrefsIcon from '../svgs/FoodPrefsIcon';
import ExpertIcon from '../svgs/ExpertIcon';
import StoreIcon from '../svgs/StoreIcon';
import FoodListIcon from '../svgs/FoodListIcon';
import AccountIcon from '../svgs/AccountIcon';
import HistoryIcon from '../svgs/HistoryIcon';
import { inherits } from 'util';
import ArticlesIcon from '../svgs/ArticlesIcon';
import StatsIcon from '../svgs/StatsIcon';

type Option = {
  name:string,
  allowedRoles: string[]
  function: () => void
  icon: any
}

export const HomeOptions:React.FC= () => {
  const navigate = useNavigate()
  const [allDone, setAllDone] = useState(true)
  const handleScan = () => {
    // window.location.href = "https://localhost:4002/"
    navigate("/scan")
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
  const handleProfile = () => {
    navigate("/users/" + window.localStorage.id)
  }
  const handleFoodHistory = () => {
    navigate("/users/" + window.localStorage.id + "/food-history")
  }

  const handleStoreCatalogue = () => {
    navigate("/stores/" + window.localStorage.s_id + "/catalogue")
  }

  const handleArticleList = () => {
    navigate("/articles")
  }

  const handleStats = () => {
    navigate("/stats")
  }

  const [optionsUser, setOptionsUser] = useState<Option[]>([
    {name: "Escanear alimento", allowedRoles: ["Core"], function: handleScan, icon: <ScannerIcon width='100%' height= 'auto'/>},
    {name: "Buscar alimento", allowedRoles: ["Core"], function: handleSearch, icon: <SearchIcon width='100%' height= 'auto'/>},
    // {name: "Lista de alimentos", allowedRoles: ["Expert", "Admin", "Tech"], function: handleFoodLocal, icon: <FoodListIcon width='100%' height= 'auto'/>},
    {name: "Ver perfil", allowedRoles: ["Core"], function: handleProfile, icon: <AccountIcon width='100%' height= 'auto'/>},
    {name: "Ver nutricionistas", allowedRoles: ["Core"], function: handleExperts, icon: <ExpertIcon width='100%' height= 'auto'/>},
    {name: "Ver tiendas", allowedRoles: ["Core"], function: handleStores, icon: <StoreIcon width='100%' height= 'auto'/>},
    {name: "Mis preferencias alimenticias", allowedRoles: ["Core"], function: handleFoodPrefs, icon: <FoodPrefsIcon width='100%' height= 'auto'/>},
    {name: "Historial de alimentos", allowedRoles: ["Core"], function: handleFoodHistory, icon: <HistoryIcon width='100%' height= 'auto'/>},
    // {name: "Mi catálogo", allowedRoles: ["Store"], function: handleStoreCatalogue, icon: <FoodListIcon width='100%' height= 'auto'/>},
    {name: "Artículos de salud", allowedRoles: ["Core"], function: handleArticleList, icon: <ArticlesIcon width='100%' height= 'auto'/>},
    {name: "Mis medidas", allowedRoles: ["Core"], function: handleStats, icon: <StatsIcon width='100%' height= 'auto'/>}
  ])
  
    return (allDone
            ?<Grid container display="flex" 
                flexDirection="row" 
                justifyContent="space-around"
                alignItems="stretch"
                sx={{width: "100vw", maxWidth:"800px", gap:"5px", flexWrap: "wrap", pb: 7}}
            >
            {optionsUser.map((option) => (
              <Button key={option.name} variant='dashed' onClick={option.function} 
              sx={{display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "stretch",
                  width: "30%",
                  maxWidth: "200px", 
                  fontWeight: "bold",
              }}
              > 
                <Box width="70%" color="inherit">
                  {option.icon}
                </Box>
                
                <Typography variant='subtitle1' sx={{fontSize:{xs: 12, sm:18}, fontStyle: "bold"}}>
                    {option.name}
                </Typography>
            </Button>
          ))}
        </Grid>
        :<CircularProgress/>
    )
}