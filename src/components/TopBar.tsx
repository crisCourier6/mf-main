import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { 
  Box, List, ListItem, ListItemButton, ListItemIcon, Drawer, AppBar, 
  Toolbar, IconButton, Typography, Paper, Slide,
  Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SearchIcon from "../svgs/SearchIcon";
import ExpertIcon from "../svgs/ExpertIcon";
import ScannerIcon from "../svgs/ScannerIcon";
import StoreIcon from "../svgs/StoreIcon";
import { useTheme } from "@mui/material/styles";
import UserNotificationCount from "../microfrontends/notification/UserNotificationCount";
import AccountIcon from "../svgs/AccountIcon";
import ArticlesIcon from "../svgs/ArticlesIcon";
import HistoryIcon from "../svgs/HistoryIcon";
import FoodPrefsIcon from "../svgs/FoodPrefsIcon";
import EFLogo from "../svgs/EFLogo";
import StatsIcon from "../svgs/StatsIcon";
import DiaryIcon from "../svgs/DiaryIcon";
import FoodEditIcon from "../svgs/FoodEditIcon";
import FoodListIcon from "../svgs/FoodListIcon";
import SubmissionsIcon from "../svgs/SubmissionsIcon";
import HomeIcon from '@mui/icons-material/Home';

type Option = {
  name:string,
  allowedRoles: string[]
  function: () => void
  icon: any
}

const HideOnScroll: React.FC<{ onVisibilityChange: (visible: boolean) => 
  void, children: React.ReactElement }> = ({ onVisibilityChange, children }) => {
    const [lastScrollSwitch, setLastScrollSwitch] = useState(0);
    const [lastScroll, setLastScroll] = useState(0);
    const [visible, setVisible] = useState(true);

    const hideThreshold = 100; // Amount to scroll down to hide the AppBar
    const showThreshold = 100; // Amount to scroll up to show the AppBar

    const handleScroll = useCallback(() => {
        const scroll = window.scrollY;

        // Logging scroll positions for debugging

        if (scroll > lastScrollSwitch && Math.abs(scroll - lastScrollSwitch) > hideThreshold) {
            // Scrolling down, hide the AppBar
            if (visible) {
                setVisible(false);
            }
            // Clear any previous timeout for reappearing the AppBar
        } 
        else if (scroll < lastScrollSwitch && Math.abs(scroll - lastScrollSwitch) > showThreshold) {
            // Scrolling up, show the AppBar after a delay
            if (!visible) {
                // Set a timeout to show the AppBar after a delay
                setVisible(true)
            }
        }
        else if (scroll<50){
          if (!visible) {
            // Set a timeout to show the AppBar after a delay
            setVisible(true)
        }
        }

        if(scroll<lastScroll && scroll>lastScrollSwitch){
          setLastScrollSwitch(lastScroll)
        }
        else if (scroll>lastScroll && scroll<lastScrollSwitch){
          setLastScrollSwitch(lastScroll)
        }

        setLastScroll(scroll);
        
    }, [lastScroll, lastScrollSwitch, visible]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
           
        };
    }, [handleScroll]);

    useEffect(() => {
        onVisibilityChange(visible);
    }, [visible, onVisibilityChange]);

    return (
        <Slide appear={false} direction="down" in={visible}>
            {children}
        </Slide>
    );
};


const TopBar: React.FC<{ onVisibilityChange: (visible: boolean) => void}> = ({ onVisibilityChange }) => {
    const navigate = useNavigate()
    const currentUserId = window.sessionStorage.getItem("id") || window.localStorage.getItem("id")
    const currentUserName = window.sessionStorage.getItem("name") || window.localStorage.getItem("name")
    const currentStoreId = window.sessionStorage.getItem("s_id") || window.localStorage.getItem("s_id")
    const currentExpertId = window.sessionStorage.getItem("e_id") || window.localStorage.getItem("e_id")
    const [openRight, setOpenRight] = React.useState(false);
    const [openLeft, setOpenLeft] = React.useState(false);

    const toggleDrawerRight = (newOpen: boolean) => () => {
      setOpenRight(newOpen);
    };

    const toggleDrawerLeft = (newOpen: boolean) => () => {
      setOpenLeft(newOpen);
    };

    const handleProfile = () => {
      navigate("/users/" + currentUserId)
    }

    // const handleSettings = () => {
    //   navigate("/users/" + window.localStorage.id + "/settings")
    // }
    const handleNotif = () => {
      navigate("/users/" + currentUserId + "/notifications")
    }

    const handleLogout = () => {
        window.localStorage.clear()
        window.sessionStorage.clear()
        navigate("/login")
    }

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

    const handleExperts = () => {
      navigate("/experts")
    }

    const handleStores = () => {
        navigate("/stores")
    }

    const handleHome = () => {
      navigate("/home")
    }

    // const handleFood = () => {
    //   navigate("/food")
    // }

    const handleFoodHistory = () => {
      navigate("/users/" + currentUserId + "/food-history")
    }
  
    const handleStoreCatalogue = () => {
      navigate("/stores/" + currentStoreId + "/catalogue")
    }
  
    const handleArticleList = () => {
      navigate("/articles")
    }
    // const handleFoodLocal = () => {
    //   navigate("/food")
    // }
  
    const handleStats = () => {
      navigate("/stats")
    }
  
    const handleFoodDiary = () => {
      navigate("/users/" + currentUserId + "/food-diary")
    }
  
    const handleFoodEdits = () => {
      navigate("/users/" + currentUserId + "/food-edits")
  }

    const handleFoodPrefs = () => {
    navigate("/users/" + currentUserId + "/food-prefs")
  }

  const handleFoodEdit = () => {
    navigate("/food-edit")
  }

    const [optionsApp, setOptionsApp] = useState<Option[]>([])

    useEffect(()=>{
      if (currentExpertId){
        setOptionsApp(
          [
            {name: "Ir al inicio", allowedRoles: ["Core"], function: handleHome, icon: <HomeIcon width={32} height= {32}/>},
            {name: "Escanear alimento", allowedRoles: ["Core"], function: handleScan, icon: <ScannerIcon width={32} height= {32}/>},
            {name: "Buscar alimento", allowedRoles: ["Core"], function: handleSearch, icon: <SearchIcon width={32} height= {32}/>},
            {name: "Aportes de usuarios", allowedRoles: ["Admin", "Tech", "Expert"], function: handleFoodEdit, icon: <SubmissionsIcon width={32} height= {32}/>},
            // {name: "Lista de alimentos", allowedRoles: ["Expert", "Admin", "Tech"], function: handleFoodLocal, icon: <FoodListIcon width={32} height= {32}/>},
            {name: "Ver perfil", allowedRoles: ["Core"], function: handleProfile, icon: <AccountIcon width={32} height= {32}/>},
            {name: "Ver nutricionistas", allowedRoles: ["Core"], function: handleExperts, icon: <ExpertIcon width={32} height= {32}/>},
            {name: "Ver tiendas", allowedRoles: ["Core"], function: handleStores, icon: <StoreIcon width={32} height= {32}/>},
            {name: "Mis preferencias alimenticias", allowedRoles: ["Core"], function: handleFoodPrefs, icon: <FoodPrefsIcon width={32} height= {32}/>},
            {name: "Historial de alimentos", allowedRoles: ["Core"], function: handleFoodHistory, icon: <HistoryIcon width={32} height= {32}/>},
            // {name: "Mi catálogo", allowedRoles: ["Store"], function: handleStoreCatalogue, icon: <FoodListIcon width={32} height= {32}/>},
            {name: "Artículos de salud", allowedRoles: ["Core"], function: handleArticleList, icon: <ArticlesIcon width={32} height= {32}/>},
            // {name: "Mis medidas", allowedRoles: ["Core"], function: handleStats, icon: <StatsIcon width={32} height= {32}/>}
          ]
        )
      }
      else if (currentStoreId){
        setOptionsApp(
          [
            {name: "Ir al inicio", allowedRoles: ["Core"], function: handleHome, icon: <HomeIcon width={32} height= {32}/>},
            {name: "Escanear alimento", allowedRoles: ["Core"], function: handleScan, icon: <ScannerIcon width={32} height= {32}/>},
            {name: "Buscar alimento", allowedRoles: ["Core"], function: handleSearch, icon: <SearchIcon width={32} height= {32}/>},
            {name: "Ver perfil", allowedRoles: ["Core"], function: handleProfile, icon: <AccountIcon width={32} height= {32}/>},
            {name: "Ver tiendas", allowedRoles: ["Core"], function: handleStores, icon: <StoreIcon width={32} height= {32}/>},
            {name: "Historial de alimentos", allowedRoles: ["Core"], function: handleFoodHistory, icon: <HistoryIcon width={32} height= {32}/>},
            {name: "Mi catálogo", allowedRoles: ["Store"], function: handleStoreCatalogue, icon: <FoodListIcon width={32} height= {32}/>},
          ]
        )
      }
      else {
        setOptionsApp(
          [
            {name: "Ir al inicio", allowedRoles: ["Core"], function: handleHome, icon: <HomeIcon width={32} height= {32}/>},
            {name: "Escanear alimento", allowedRoles: ["Core"], function: handleScan, icon: <ScannerIcon width={32} height= {32}/>},
            {name: "Buscar alimento", allowedRoles: ["Core"], function: handleSearch, icon: <SearchIcon width={32} height= {32}/>},
            {name: "Ver perfil", allowedRoles: ["Core"], function: handleProfile, icon: <AccountIcon width={32} height= {32}/>},
            {name: "Ver nutricionistas", allowedRoles: ["Core"], function: handleExperts, icon: <ExpertIcon width={32} height= {32}/>},
            {name: "Ver tiendas", allowedRoles: ["Core"], function: handleStores, icon: <StoreIcon width={32} height= {32}/>},
            {name: "Mis preferencias alimenticias", allowedRoles: ["Core"], function: handleFoodPrefs, icon: <FoodPrefsIcon width={32} height= {32}/>},
            {name: "Historial de alimentos", allowedRoles: ["Core"], function: handleFoodHistory, icon: <HistoryIcon width={32} height= {32}/>},
            {name: "Artículos de salud", allowedRoles: ["Core"], function: handleArticleList, icon: <ArticlesIcon width={32} height= {32}/>},
            {name: "Mis medidas", allowedRoles: ["Core"], function: handleStats, icon: <StatsIcon width={32} height= {32}/>},
            {name: "Diario alimenticio", allowedRoles: ["Core"], function: handleFoodDiary, icon: <DiaryIcon width={32} height= {32}/>},
            {name: "Mis Aportes",  allowedRoles: ["Core"], function: handleFoodEdits, icon: <FoodEditIcon width={32} height= {32}/>},
          ]
        )
      }
  
    }, [currentExpertId])

    const optionsUser = [
      {name: "Mi perfil", function: handleProfile, icon:<AccountCircleRoundedIcon sx={{fontSize: 32}}/> },
      {name: "Notificaciones", function: handleNotif, icon: <UserNotificationCount/>},
      {name: "Cerrar sesión", function: handleLogout, icon: <LogoutRoundedIcon width={32} height={32}/>},
    ]

    const DrawerListUser = (
      <Box role="presentation" onClick={toggleDrawerRight(false)} 
      sx={{ 
        borderLeft: "3px solid",
        width: 250, 
        height: "100vh", 
        borderColor: "secondary.main", 
      }}>
        <Paper sx={{
          padding: "5px",
          display:"flex",
          borderRadius: 0,
          borderBottom: "3px solid",
          borderColor: "secondary.main",
          bgcolor: "primary.dark",
          textIndent: 10
          
        }}>
          <Typography variant="h5" color="primary.contrastText">
            {currentUserName}
          </Typography>
          
        </Paper>
        <List>
          {optionsUser.map((option) => (
            <ListItem key={option.name} disablePadding>
              <ListItemButton onClick={option.function}>
                <ListItemIcon sx={{color:"secondary.contrastText"}}>
                  {option.icon}
                </ListItemIcon>
                <Typography   fontFamily={"Montserrat"} color={"primary.dark"}>
                {option.name} 
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    const DrawerListApp = (
      <Box role="presentation" onClick={toggleDrawerLeft(false)}
      sx={{  
        borderRight: "3px solid",
        width: 250, 
        height: "100vh", 
        borderColor: "secondary.main", 
      }}>
        <Paper sx={{
          padding: "10px",
          display:"flex",
          borderRadius: 0,
          borderBottom: "3px solid",
          borderColor: "secondary.main",
          bgcolor: "primary.dark",
          textIndent: 10
          
        }}>
          <Typography variant="h6" color="primary.contrastText">
            ¿Qué quieres hacer?
          </Typography>
        </Paper>
        <List>
          {optionsApp.map((option) => (
            <ListItem key={option.name} disablePadding>
              <ListItemButton onClick={option.function}>
                <ListItemIcon sx={{color:"primary.main"}}>
                  {option.icon}
                </ListItemIcon>
                <Typography   fontFamily={"Montserrat"} color={"primary.dark"}>
                  {option.name} 
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (<HideOnScroll onVisibilityChange={onVisibilityChange}>
        <AppBar position="sticky" 
           sx={{
          display: "flex",
          flexDirection: "row",
          // flexWrap: "nowrap",
          alignItems: "center",
           bgcolor: "secondary.main",
           color: "primary.dark",
           width: "100%",
           height: "50px"
           }}
        >
          <Toolbar sx={{display: "flex", p:0, flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:"100%", height:"50px" }}>
          <Button
            onClick={toggleDrawerLeft(true)}
            size="small"
            color="inherit"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none",
              border: "2px"
            }}
          >
            <MenuIcon fontSize="medium" />
            <Typography variant="subtitle2">Menú</Typography>
          </Button>
            {/* <Box
              component="img"
              sx={{
                width: "50%",
                maxWidth: "150px",
                cursor: "pointer"
              }}
              alt="EyesFood logo"
              src={Logo}
              onClick={handleHome}
              /> */}
            <Box height={"100%"} sx={{display: "flex", alignItems: "center", cursor: "pointer"}} onClick={handleHome}>
              <EFLogo width={"auto"} height={"70%"}/>
            </Box>
            <Button
              onClick={toggleDrawerRight(true)}
              size="small"
              color="inherit"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                border: "2px"
              }}
            >
              <AccountCircleRoundedIcon fontSize="medium" />
              <Typography variant="subtitle2">Perfil</Typography>
            </Button>
            
          </Toolbar>
          <Drawer anchor="right" open={openRight} onClose={toggleDrawerRight(false)}>
            {DrawerListUser}
          </Drawer>
          <Drawer anchor="left" open={openLeft} onClose={toggleDrawerLeft(false)}>
            {DrawerListApp}
          </Drawer>
        </AppBar>
      {/* </Box> */}
      
      </HideOnScroll>
    )
}

export default TopBar