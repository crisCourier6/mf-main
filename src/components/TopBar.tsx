import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../../public/EFbeta.png"
import { 
  Box, List, ListItem, ListItemButton, ListItemIcon, Drawer, AppBar, 
  Toolbar, IconButton, Typography, Paper, Slide} from "@mui/material";
import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
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
    const theme = useTheme() 
    const navigate = useNavigate()
    const [openRight, setOpenRight] = React.useState(false);
    const [openLeft, setOpenLeft] = React.useState(false);

    const toggleDrawerRight = (newOpen: boolean) => () => {
      setOpenRight(newOpen);
    };

    const toggleDrawerLeft = (newOpen: boolean) => () => {
      setOpenLeft(newOpen);
    };

    const handleProfile = () => {
      navigate("/users/" + window.localStorage.id)
    }

    const handleSettings = () => {
      navigate("/users/" + window.localStorage.id + "/settings")
    }
    const handleNotif = () => {
      navigate("/users/" + window.localStorage.id + "/notifications")
    }

    const handleLogout = () => {
        window.localStorage.clear()
        navigate("/login")
    }

    const handleScan = () => {
      navigate("/scan")
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

    const handleFood = () => {
      navigate("/food")
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
    const handleFoodLocal = () => {
      navigate("/food")
    }
    const handleFoodPrefs = () => {
    navigate("/users/" + window.localStorage.id + "/food-prefs")
  }

    const [optionsApp, setOptionsApp] = useState<Option[]>([
      {name: "Inicio", allowedRoles: ["Core"], function: handleHome, icon:<HomeRoundedIcon sx={{fontSize: 32}}/> },
      {name: "Escanear alimento", allowedRoles: ["Core"], function: handleScan, icon: <ScannerIcon width='32px' height= '32px'/>},
      {name: "Buscar alimento", allowedRoles: ["Core"], function: handleSearch, icon: <SearchIcon width='32px' height= '32px'/>},
      // {name: "Lista de alimentos", allowedRoles: ["Expert", "Admin", "Tech"], function: handleFoodLocal, icon: <FoodListIcon width='32px' height= '32px'/>},
      {name: "Ver perfil", allowedRoles: ["Core"], function: handleProfile, icon: <AccountIcon width='32px' height= '32px'/>},
      {name: "Ver nutricionistas", allowedRoles: ["Core"], function: handleExperts, icon: <ExpertIcon width='32px' height= '32px'/>},
      {name: "Ver tiendas", allowedRoles: ["Core"], function: handleStores, icon: <StoreIcon width='32px' height= '32px'/>},
      {name: "Mis preferencias alimenticias", allowedRoles: ["Core"], function: handleFoodPrefs, icon: <FoodPrefsIcon width='32px' height= '32px'/>},
      {name: "Historial de alimentos", allowedRoles: ["Core"], function: handleFoodHistory, icon: <HistoryIcon width='32px' height= '32px'/>},
      // {name: "Mi catálogo", allowedRoles: ["Store"], function: handleStoreCatalogue, icon: <FoodListIcon width='32px' height= '32px'/>},
      {name: "Artículos de salud", allowedRoles: ["Core"], function: handleArticleList, icon: <ArticlesIcon width='32px' height= '32px'/>},
    ])

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
            {window.localStorage.name}
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
          <Toolbar sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:"100%", height:"50px" }}>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawerLeft(true)}
            >
              <MenuIcon fontSize="large"></MenuIcon>
            </IconButton>
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
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawerRight(true)}
            >
              <AccountCircleRoundedIcon fontSize="large"></AccountCircleRoundedIcon>
            </IconButton>
            
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