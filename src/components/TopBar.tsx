import React, { lazy, Suspense } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../public/EyesFoodBetaLogo.png"
import { 
  Box, Button, Divider, List, ListItem, ListItemButton, 
  ListItemIcon, ListItemText, Drawer, Fab, AppBar, 
  Toolbar, IconButton, Typography, 
  Paper,
  TextField} from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


const TopBar = () => {
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
      navigate("/users/" + window.localStorage.id + "/notif")
    }

    const handleLogout = () => {
        window.localStorage.clear()
        navigate("/login")
    }

    const handleScan = () => {
      window.location.replace("https://192.168.100.6:4002/")
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

    const optionsUser = [
      {name: "Mi perfil", function: handleProfile, icon: <AccountCircleRoundedIcon/>},
      {name: "Ajustes", function: handleSettings, icon: <SettingsRoundedIcon/>},
      {name: "Notificaciones", function: handleNotif, icon: <NotificationsNoneRoundedIcon/>},
      {name: "Cerrar sesión", function: handleLogout, icon: <LogoutRoundedIcon/>},
    ]

    const optionsApp = [
      {name: "Inicio", function: handleHome, icon:<HomeRoundedIcon/> },
      {name: "Escanear alimento", function: handleScan, icon: <AccountCircleRoundedIcon/>},
      {name: "Buscar alimento", function: handleSearch, icon: <SettingsRoundedIcon/>},
      {name: "Nutricionistas", function: handleExperts, icon: <NotificationsNoneRoundedIcon/>},
      {name: "Tiendas", function: handleStores, icon: <LogoutRoundedIcon/>},
    ]

    const DrawerListUser = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawerRight(false)}>
        <Button sx={{
          fontSize: 25,
          fontWeight: "fontWeightMedium",
          paddingLeft: "20px",
          textTransform: "none"
        }}>
          {window.localStorage.name}
        </Button>
        <List>
          {optionsUser.map((option) => (
            <ListItem key={option.name} disablePadding>
              <ListItemButton onClick={option.function}>
                <ListItemIcon>
                  {option.icon}
                </ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    const DrawerListApp = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawerLeft(false)}>
        <List>
          {optionsApp.map((option) => (
            <ListItem key={option.name} disablePadding>
              <ListItemButton onClick={option.function}>
                <ListItemIcon>
                  {option.icon}
                </ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
    

    return (<>
        <AppBar position="sticky" 
           sx={{
          // display: "flex",
          // flexDirection: "row",
          // flexWrap: "nowrap",
          // justifyContent: "space-around",
          // alignItems: "center",
           bgcolor: "secondary.main",
           color: "primary.main",
           width: "100%"
           }}
        >
          <Toolbar sx={{display: "flex", justifyContent: "space-between" }}>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawerLeft(true)}
            >
              <MenuIcon fontSize="large"></MenuIcon>
            </IconButton>
            <Box
              component="img"
              sx={{
                height: "50px",
              }}
              alt="EyesFood logo"
              src={Logo}
              />
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
        </AppBar>
      {/* </Box> */}
      <Drawer anchor="right" open={openRight} onClose={toggleDrawerRight(false)}>
        {DrawerListUser}
      </Drawer>
      <Drawer anchor="left" open={openLeft} onClose={toggleDrawerLeft(false)}>
        {DrawerListApp}
      </Drawer>
      </>
    )
}

export default TopBar