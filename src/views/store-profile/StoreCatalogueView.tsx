import { Grid} from '@mui/material';
import React, { useEffect, useState } from 'react';
import api from '../../api';
import TopBar from '../../components/TopBar';
import StoreCatalogue from '../../microfrontends/store-profile/StoreCatalogue';

export const StoreCatalogueView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  const [canEditCatalogue, setCanEditCatalogue] = useState(false)
  const checkRoleURL = "/users"

  useEffect(()=>{
    api.get(`${checkRoleURL}/${window.localStorage.id}/roles`, 
      {
        withCredentials: true,
        headers: { Authorization: "Bearer " + window.localStorage.token },
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
  return ( <>
  <Grid container direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
        <StoreCatalogue isAppBarVisible={isAppBarVisible} canEditCatalogue={canEditCatalogue}/>
    </Grid>
  </>
  )
}

export default StoreCatalogueView