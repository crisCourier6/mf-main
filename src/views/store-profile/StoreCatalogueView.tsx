import React from "react"
import { Grid} from '@mui/material';
import { useEffect, useState } from 'react';
import api from '../../api';
import TopBar from '../../components/TopBar';
import StoreCatalogue from '../../microfrontends/store-profile/StoreCatalogue';

export const StoreCatalogueView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  const token = window.sessionStorage.getItem("token") || window.localStorage.getItem("token")
  const currentUserId = window.sessionStorage.getItem("id") || window.localStorage.getItem("id")
  const [canEditCatalogue, setCanEditCatalogue] = useState(false)
  const checkRoleURL = "/users"

  useEffect(()=>{
    api.get(`${checkRoleURL}/${currentUserId}/roles`, 
      {
        withCredentials: true,
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then(res => {
      const userRoles = res.data;
      const hasAllowedRoleStore = userRoles.some((role:any) => role==="Store");
      setCanEditCatalogue(hasAllowedRoleStore)
    })
    .catch(error => {
      console.log(error)
    })
  },[])
  return (
  <Grid container direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
        <StoreCatalogue isAppBarVisible={isAppBarVisible} canEditCatalogue={canEditCatalogue}/>
    </Grid>
  )
}

export default StoreCatalogueView