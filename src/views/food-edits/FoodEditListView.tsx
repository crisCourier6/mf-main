import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import FoodEditList from '../../microfrontends/food-edits/FoodEditList';
import TopBar from '../../components/TopBar';
import api from '../../api';
import Unauthorized from '../../components/Unauthorized';
import Loading from '../../components/Loading';
import NavigateBack from '../../components/NavigateBack';

export const FoodEditListView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const token = window.sessionStorage.getItem("token") || window.localStorage.getItem("token")
  const currentUserId = window.sessionStorage.getItem("id") || window.localStorage.getItem("id")
  const [isReady, setIsReady] = useState(false);
  const checkRoleURL = "/users"
    const [canJudge, setCanJudge] = useState(false)

    useEffect(()=>{
        api.get(`${checkRoleURL}/${currentUserId}/roles`, 
        {
            withCredentials: true,
            headers: { Authorization: "Bearer " + token },
        }
        )
        .then(res => {
        const userRoles = res.data;
        const hasAllowedRoleExpert = userRoles.some((role:any) => role==="Expert");
        setCanJudge(hasAllowedRoleExpert)
        })
        .catch(error => {
        console.log(error)
        })
        .finally(()=>{
          setIsReady(true)
        })
    },[])

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
    return ( <Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
          <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
          {isReady 
          ? (canJudge 
              ? <>
                  <Box 
                  sx={{
                    position: 'sticky',
                    top: isAppBarVisible?"50px":"0px",
                    width:"100%",
                    maxWidth: "500px",
                    transition: "top 0.1s",
                    backgroundColor: 'primary.dark', // Ensure visibility over content
                    zIndex: 100,
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottom: "5px solid",
                    borderLeft: "5px solid",
                    borderRight: "5px solid",
                    borderColor: "secondary.main",
                    boxSizing: "border-box",
                    color: "primary.contrastText"
                  }}
                  >
                  <Box sx={{display: "flex", flex: 1}}>
                      <NavigateBack/>
                  </Box>
                  <Box sx={{display: "flex", flex: 4}}>
                      <Typography variant='h6' width="100%"  color="primary.contrastText" sx={{py:1}}>
                          Aportes de alimentos
                      </Typography>
                  </Box>
                  <Box sx={{display: "flex", flex: 1}}>
                  </Box>
                </Box>
                <FoodEditList isAppBarVisible={isAppBarVisible} onPendingCountChange={()=>{}} /> 
              </>
              : <Unauthorized />) 
          : <Loading />}
          
      
      </Grid>
    )
}


export default FoodEditListView