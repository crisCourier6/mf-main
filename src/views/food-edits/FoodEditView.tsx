import React from 'react';
import { Grid } from '@mui/material';
import { useState } from 'react';
import TopBar from '../../components/TopBar';
import FoodEdit from '../../microfrontends/food-edits/FoodEdit';


export const FoodEditView = () => {
    const [isAppBarVisible, setIsAppBarVisible] = useState(true);
    const handleAppBarVisibilityChange = (visible: boolean) => {
        setIsAppBarVisible(visible);
    };
    return (
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
        <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
        <FoodEdit isAppBarVisible={isAppBarVisible}/>
    </Grid>
    )
}


export default FoodEditView