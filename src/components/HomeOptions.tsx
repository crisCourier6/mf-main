import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, Grid, CircularProgress} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ScannerIcon from '../svgs/ScannerIcon';
import SearchIcon from '../svgs/SearchIcon';
import FoodPrefsIcon from '../svgs/FoodPrefsIcon';
import ExpertIcon from '../svgs/ExpertIcon';
import StoreIcon from '../svgs/StoreIcon';
// import FoodListIcon from '../svgs/FoodListIcon';
import AccountIcon from '../svgs/AccountIcon';
import HistoryIcon from '../svgs/HistoryIcon';
import ArticlesIcon from '../svgs/ArticlesIcon';
import StatsIcon from '../svgs/StatsIcon';
import SubmissionsIcon from '../svgs/SubmissionsIcon';
import FoodListIcon from '../svgs/FoodListIcon';
import DiaryIcon from '../svgs/DiaryIcon';
import FoodEditIcon from '../svgs/FoodEditIcon';

type Option = {
  name:string,
  allowedRoles: string[]
  function: () => void
  icon: any
}

export const HomeOptions:React.FC= () => {
  const navigate = useNavigate()
  const [allDone, setAllDone] = useState(true)
  const currentUserId = window.sessionStorage.getItem("id") || window.localStorage.getItem("id")
  const currentStoreId = window.sessionStorage.getItem("s_id") || window.localStorage.getItem("s_id")
  const currentExpertId = window.sessionStorage.getItem("e_id") || window.localStorage.getItem("e_id")
  const handleScan = () => {
    if (process.env.REACT_APP_SCANNER_URL){
      window.location.replace(process.env.REACT_APP_SCANNER_URL)
    }
    else {
      navigate("/scan")
    }
  }

  const handleSearch = () => {
    navigate("/search")
  }

  const handleFoodPrefs = () => {
    navigate("/users/" + currentUserId + "/food-prefs")
  }

  const handleExperts = () => {
    navigate("/experts")
  }

  const handleStores = () => {
    navigate("/stores")
  }

  const handleFoodEdit = () => {
    navigate("/food-edit")
  }

  // const handleFoodLocal = () => {
  //   navigate("/food")
  // }
  
  const handleProfile = () => {
    navigate("/users/" + currentUserId)
  }
  const handleFoodHistory = () => {
    navigate("/users/" + currentUserId + "/food-history")
  }

  const handleStoreCatalogue = () => {
    navigate("/stores/" + currentStoreId + "/catalogue")
  }

  const handleArticleList = () => {
    navigate("/articles")
  }

  const handleStats = () => {
    navigate("/stats")
  }

  const handleFoodDiary = () => {
    navigate("/users/" + currentUserId + "/food-diary")
  }

  const handleFoodEdits = () => {
    navigate("/users/" + currentUserId + "/food-edits")
}

  const [optionsUser, setOptionsUser] = useState<Option[]>([])

  useEffect(()=>{
    if (currentExpertId){
      setOptionsUser(
        [
          {name: "Escanear alimento", allowedRoles: ["Core"], function: handleScan, icon: <ScannerIcon width='100%' height= 'auto'/>},
          {name: "Buscar alimento", allowedRoles: ["Core"], function: handleSearch, icon: <SearchIcon width='100%' height= 'auto'/>},
          {name: "Aportes de usuarios", allowedRoles: ["Admin", "Tech", "Expert"], function: handleFoodEdit, icon: <SubmissionsIcon width='100%' height= 'auto'/>},
          // {name: "Lista de alimentos", allowedRoles: ["Expert", "Admin", "Tech"], function: handleFoodLocal, icon: <FoodListIcon width='100%' height= 'auto'/>},
          {name: "Ver perfil", allowedRoles: ["Core"], function: handleProfile, icon: <AccountIcon width='100%' height= 'auto'/>},
          {name: "Ver nutricionistas", allowedRoles: ["Core"], function: handleExperts, icon: <ExpertIcon width='100%' height= 'auto'/>},
          {name: "Ver tiendas", allowedRoles: ["Core"], function: handleStores, icon: <StoreIcon width='100%' height= 'auto'/>},
          {name: "Mis preferencias alimenticias", allowedRoles: ["Core"], function: handleFoodPrefs, icon: <FoodPrefsIcon width='100%' height= 'auto'/>},
          {name: "Historial de alimentos", allowedRoles: ["Core"], function: handleFoodHistory, icon: <HistoryIcon width='100%' height= 'auto'/>},
          // {name: "Mi catálogo", allowedRoles: ["Store"], function: handleStoreCatalogue, icon: <FoodListIcon width='100%' height= 'auto'/>},
          {name: "Artículos de salud", allowedRoles: ["Core"], function: handleArticleList, icon: <ArticlesIcon width='100%' height= 'auto'/>},
          // {name: "Mis medidas", allowedRoles: ["Core"], function: handleStats, icon: <StatsIcon width='100%' height= 'auto'/>}
        ]
      )
    }
    else if (currentStoreId){
      setOptionsUser(
        [
          {name: "Escanear alimento", allowedRoles: ["Core"], function: handleScan, icon: <ScannerIcon width='100%' height= 'auto'/>},
          {name: "Buscar alimento", allowedRoles: ["Core"], function: handleSearch, icon: <SearchIcon width='100%' height= 'auto'/>},
          {name: "Ver perfil", allowedRoles: ["Core"], function: handleProfile, icon: <AccountIcon width='100%' height= 'auto'/>},
          {name: "Ver tiendas", allowedRoles: ["Core"], function: handleStores, icon: <StoreIcon width='100%' height= 'auto'/>},
          {name: "Historial de alimentos", allowedRoles: ["Core"], function: handleFoodHistory, icon: <HistoryIcon width='100%' height= 'auto'/>},
          {name: "Mi catálogo", allowedRoles: ["Store"], function: handleStoreCatalogue, icon: <FoodListIcon width='100%' height= 'auto'/>},
        ]
      )
    }
    else {
      setOptionsUser(
        [
          {name: "Escanear alimento", allowedRoles: ["Core"], function: handleScan, icon: <ScannerIcon width='100%' height= 'auto'/>},
          {name: "Buscar alimento", allowedRoles: ["Core"], function: handleSearch, icon: <SearchIcon width='100%' height= 'auto'/>},
          {name: "Historial de alimentos", allowedRoles: ["Core"], function: handleFoodHistory, icon: <HistoryIcon width='100%' height= 'auto'/>},
          {name: "Ver perfil", allowedRoles: ["Core"], function: handleProfile, icon: <AccountIcon width='100%' height= 'auto'/>},
          {name: "Ver nutricionistas", allowedRoles: ["Core"], function: handleExperts, icon: <ExpertIcon width='100%' height= 'auto'/>},
          {name: "Ver tiendas", allowedRoles: ["Core"], function: handleStores, icon: <StoreIcon width='100%' height= 'auto'/>},
          {name: "Mis preferencias alimenticias", allowedRoles: ["Core"], function: handleFoodPrefs, icon: <FoodPrefsIcon width='100%' height= 'auto'/>},
          {name: "Mis Aportes",  allowedRoles: ["Core"], function: handleFoodEdits, icon: <FoodEditIcon width={"100%"} height={"auto"}/>},
          {name: "Mis medidas", allowedRoles: ["Core"], function: handleStats, icon: <StatsIcon width='100%' height= 'auto'/>},
          {name: "Diario alimenticio", allowedRoles: ["Core"], function: handleFoodDiary, icon: <DiaryIcon width={"100%"} height={"auto"}/>},
          {name: "Artículos de salud", allowedRoles: ["Core"], function: handleArticleList, icon: <ArticlesIcon width='100%' height= 'auto'/>},
        ]
      )
    }

  }, [currentExpertId])
  
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