import React from 'react';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import ArticleList from '../../microfrontends/expert-profile/ArticleList';
import TopBar from '../../components/TopBar';
import api from '../../api';

export const ArticleListView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const checkRoleURL = "/users"
  const token = window.sessionStorage.getItem("token") ?? window.localStorage.getItem("token")
  const currentUserId = window.sessionStorage.getItem("id") ?? window.localStorage.getItem("id")
  const [canCreateArticle, setCanCreateArticle] = useState(false)

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
      setCanCreateArticle(hasAllowedRoleExpert)
    })
    .catch(error => {
      console.log(error)
    })
  },[])

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
    return ( <Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
          <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
          <ArticleList isAppBarVisible={isAppBarVisible} canCreateArticle={canCreateArticle} />
      
      </Grid>
    )
}


export default ArticleListView