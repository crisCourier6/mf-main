import React from 'react';
import { Box, Tabs, Tab, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import TopBar from '../../components/TopBar';
import { useParams } from 'react-router-dom';
import FoodEditUserList from '../../microfrontends/food-edits/FoodEditUserList';


export const FoodEditUserListView = () => {
    const [isAppBarVisible, setIsAppBarVisible] = useState(true);

    const handleAppBarVisibilityChange = (visible: boolean) => {
        setIsAppBarVisible(visible);
    };
    return ( <>
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
        <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
        <FoodEditUserList isAppBarVisible={isAppBarVisible}/>
        
  
    </Grid>
    </>
    )
}


export default FoodEditUserListView