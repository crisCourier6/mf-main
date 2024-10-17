import React from 'react';
import { Box, Tabs, Tab, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import ArticleList from '../../microfrontends/expert-profile/ArticleList';
import Logo from "../../../public/EFbeta.png"
import TopBar from '../../components/TopBar';
import axios from 'axios';

export const ArticleListView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const checkRoleURL = "http://192.168.100.6:8080/users"
  const [canCreateArticle, setCanCreateArticle] = useState(false)

  useEffect(()=>{
    axios.get(`${checkRoleURL}/${window.localStorage.id}/roles`, 
      {
        withCredentials: true,
        headers: { Authorization: "Bearer " + window.localStorage.token },
      }
    )
    .then(res => {
      const userRoles = res.data;
      const hasAllowedRoleExpert = userRoles.some((role:any) => role==="Expert");
      setCanCreateArticle(hasAllowedRoleExpert)
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
          <ArticleList isAppBarVisible={isAppBarVisible} canCreateArticle={canCreateArticle} />
      
      </Grid></>
    )
}


export default ArticleListView