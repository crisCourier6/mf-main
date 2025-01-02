import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { 
  Box, List, ListItem, ListItemButton, ListItemIcon, Drawer, AppBar, 
  Toolbar, IconButton, Typography, Paper, Slide } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SearchIcon from "../svgs/SearchIcon";
import ExpertIcon from "../svgs/ExpertIcon";
import ScannerIcon from "../svgs/ScannerIcon";
import StoreIcon from "../svgs/StoreIcon";
import UserNotificationCount from "../microfrontends/notification/UserNotificationCount";
import ArticlesIcon from "../svgs/ArticlesIcon";
import HistoryIcon from "../svgs/HistoryIcon";
import FoodPrefsIcon from "../svgs/FoodPrefsIcon";
import EFLogo from "../svgs/EFLogo";
import StatsIcon from "../svgs/StatsIcon";
import DiaryIcon from "../svgs/DiaryIcon";
import FoodEditIcon from "../svgs/FoodEditIcon";
import FoodListIcon from "../svgs/FoodListIcon";
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import FoodEditPendingCount from "../microfrontends/food-edits/FoodEditPendingCount";

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
    const currentUserId = window.sessionStorage.getItem("id") ?? window.localStorage.getItem("id")
    const currentUserName = window.sessionStorage.getItem("name") ?? window.localStorage.getItem("name")
    const currentStoreId = window.sessionStorage.getItem("s_id") ?? window.localStorage.getItem("s_id")
    const currentExpertId = window.sessionStorage.getItem("e_id") ?? window.localStorage.getItem("e_id")
    const [openProfile, setOpenProfile] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);

    const toggleDrawerMenu = (newOpen: boolean) => () => {
      setOpenMenu(newOpen);
    };

    const toggleDrawerProfile = (newOpen: boolean) => () => {
      setOpenProfile(newOpen);
    };

    const handleProfile = () => {
      navigate("/users/" + currentUserId)
    }

    const handleNotif = () => {
      navigate("/users/" + currentUserId + "/notifications")
    }

    const handleLogout = () => {
        window.localStorage.clear()
        window.sessionStorage.clear()
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

    const handleFoodPrefs = () => {
    navigate("/users/" + currentUserId + "/food-prefs")
  }

  const handleFoodEdit = () => {
    navigate("/food-edit")
  }

  const handleHelp = () => {
    navigate("/help")
  }

    const [optionsApp, setOptionsApp] = useState<Option[]>([])

    useEffect(()=>{
      if (currentExpertId){
        setOptionsApp(
          [
            {name: "Escanear alimento", allowedRoles: ["Core"], function: handleScan, icon: <ScannerIcon width={28} height= {28}/>},
            {name: "Buscar alimento", allowedRoles: ["Core"], function: handleSearch, icon: <SearchIcon width={28} height= {28}/>},
            {name: "Aportes de usuarios", allowedRoles: ["Admin", "Tech", "Expert"], function: handleFoodEdit, icon: <FoodEditPendingCount width='28px' height= '28px'/>},
            {name: "Nutricionistas", allowedRoles: ["Core"], function: handleExperts, icon: <ExpertIcon width={28} height= {28}/>},
            {name: "Tiendas", allowedRoles: ["Core"], function: handleStores, icon: <StoreIcon width={28} height= {28}/>},
            {name: "Mis preferencias alimenticias", allowedRoles: ["Core"], function: handleFoodPrefs, icon: <FoodPrefsIcon width={28} height= {28}/>},
            {name: "Historial de alimentos", allowedRoles: ["Core"], function: handleFoodHistory, icon: <HistoryIcon width={28} height= {28}/>},
            {name: "Artículos de salud", allowedRoles: ["Core"], function: handleArticleList, icon: <ArticlesIcon width={28} height= {28}/>},
          ]
        )
      }
      else if (currentStoreId){
        setOptionsApp(
          [
            {name: "Escanear alimento", allowedRoles: ["Core"], function: handleScan, icon: <ScannerIcon width={28} height= {28}/>},
            {name: "Buscar alimento", allowedRoles: ["Core"], function: handleSearch, icon: <SearchIcon width={28} height= {28}/>},
            {name: "Tiendas", allowedRoles: ["Core"], function: handleStores, icon: <StoreIcon width={28} height= {28}/>},
            {name: "Historial de alimentos", allowedRoles: ["Core"], function: handleFoodHistory, icon: <HistoryIcon width={28} height= {28}/>},
            {name: "Mi catálogo", allowedRoles: ["Store"], function: handleStoreCatalogue, icon: <FoodListIcon width={28} height= {28}/>},
          ]
        )
      }
      else {
        setOptionsApp(
          [
            
            {name: "Escanear alimento", allowedRoles: ["Core"], function: handleScan, icon: <ScannerIcon width={28} height= {28}/>},
            {name: "Buscar alimento", allowedRoles: ["Core"], function: handleSearch, icon: <SearchIcon width={28} height= {28}/>},
            {name: "Historial de alimentos", allowedRoles: ["Core"], function: handleFoodHistory, icon: <HistoryIcon width={28} height= {28}/>},
            {name: "Nutricionistas", allowedRoles: ["Core"], function: handleExperts, icon: <ExpertIcon width={28} height= {28}/>},
            {name: "Tiendas", allowedRoles: ["Core"], function: handleStores, icon: <StoreIcon width={28} height= {28}/>},
            {name: "Mis preferencias alimenticias", allowedRoles: ["Core"], function: handleFoodPrefs, icon: <FoodPrefsIcon width={28} height= {28}/>},
            {name: "Mis Aportes",  allowedRoles: ["Core"], function: handleFoodEdits, icon: <FoodEditIcon width={28} height= {28}/>},
            {name: "Mis medidas", allowedRoles: ["Core"], function: handleStats, icon: <StatsIcon width={28} height= {28}/>},
            {name: "Mi diario alimenticio", allowedRoles: ["Core"], function: handleFoodDiary, icon: <DiaryIcon width={28} height= {28}/>},
            {name: "Artículos de salud", allowedRoles: ["Core"], function: handleArticleList, icon: <ArticlesIcon width={28} height= {28}/>},
          ]
        )
      }
  
    }, [currentExpertId])

    const optionsUser = [
      {name: "Ir al inicio", allowedRoles: ["Core"], function: handleHome, icon: <HomeIcon width={28} height= {28}/>},
      {name: "Mi perfil", function: handleProfile, icon:<AccountCircleRoundedIcon sx={{fontSize: 28}}/> },
      {name: "Notificaciones", function: handleNotif, icon: <UserNotificationCount/>},
      {name: "Ayuda", function: handleHelp, icon: <HelpIcon width={28} height= {28}/>},
      {name: "Cerrar sesión", function: handleLogout, icon: <LogoutRoundedIcon width={28} height={28}/>},
    ]

    const DrawerListUser = (
      <Box role="presentation" onClick={toggleDrawerProfile(false)} 
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
          <Typography variant="h6" color="primary.contrastText">
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
                <Typography variant="subtitle1">
                {option.name} 
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    const DrawerListApp = (
      <Box role="presentation" onClick={toggleDrawerMenu(false)}
      sx={{  
        borderRight: "3px solid",
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
          <Typography variant="h6" color="primary.contrastText">
            Menú
          </Typography>
        </Paper>
        <List>
          {optionsApp.map((option) => (
            <ListItem key={option.name} disablePadding>
              <ListItemButton onClick={option.function}>
                <ListItemIcon sx={{color:"primary.main"}}>
                  {option.icon}
                </ListItemIcon>
                <Typography variant="subtitle1">
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
           width: "100vw",
           height: "50px"
           }}
        >
          <Toolbar sx={{display: "flex", p:0, flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:"100%", height:"50px" }}> 
            <Box sx={{display:"flex", justifyContent: "flex-start", flex:1}}>
              <IconButton
                onClick={toggleDrawerMenu(true)}
                size="small"
                color="inherit"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
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
            <Box height={"50px"} onClick={handleHome}
              sx={{
                display: "flex", 
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center", 
                cursor: "pointer",
                flex: 2
              }}
            >
              {/* <HomeIcon fontSize="medium"/> */}
              <EFLogo width={"auto"} height={"70%"}/>
            </Box>
            <Box sx={{display:"flex", justifyContent: "flex-end", flex:1}}>
              {/* <IconButton
                onClick={toggleDrawerProfile(true)}
                size="small"
                color="inherit"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                }}
              >
                <AccountCircleRoundedIcon fontSize="large" />
              </IconButton> */}
              <IconButton
                onClick={toggleDrawerProfile(true)}
                size="small"
                color="inherit"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                }}
              >
                <AccountCircleRoundedIcon fontSize="large" />
              </IconButton>
            </Box>
            
          </Toolbar>
          <Drawer anchor="right" open={openProfile} onClose={toggleDrawerProfile(false)}>
            {DrawerListUser}
          </Drawer>
          <Drawer anchor="left" open={openMenu} onClose={toggleDrawerMenu(false)}>
            {DrawerListApp}
          </Drawer>
        </AppBar>
      {/* </Box> */}
      
      </HideOnScroll>
    )
}

export default TopBar