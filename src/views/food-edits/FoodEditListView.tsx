import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useState } from 'react';
import FoodEditList from '../../microfrontends/food-edits/FoodEditList';
import TopBar from '../../components/TopBar';
import api from '../../api';
import Unauthorized from '../../components/Unauthorized';

export const FoodEditListView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const checkRoleURL = "/users"
    const [canJudge, setCanJudge] = useState(false)

    useEffect(()=>{
        api.get(`${checkRoleURL}/${window.localStorage.id}/roles`, 
        {
            withCredentials: true,
            headers: { Authorization: "Bearer " + window.localStorage.token },
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
    },[])

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
    return ( <><Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
          <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
          {canJudge
        ? <FoodEditList isAppBarVisible={isAppBarVisible}/>
        : <Unauthorized/>}
      
      </Grid></>
    )
}


export default FoodEditListView