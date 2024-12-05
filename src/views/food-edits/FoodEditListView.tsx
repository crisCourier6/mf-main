import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useState } from 'react';
import FoodEditList from '../../microfrontends/food-edits/FoodEditList';
import TopBar from '../../components/TopBar';
import api from '../../api';
import Unauthorized from '../../components/Unauthorized';
import Loading from '../../components/Loading';

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
              ? <FoodEditList isAppBarVisible={isAppBarVisible} /> 
              : <Unauthorized />) 
          : <Loading />}
          
      
      </Grid>
    )
}


export default FoodEditListView