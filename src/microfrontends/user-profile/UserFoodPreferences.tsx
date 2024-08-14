import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFUserFoodPreferences = lazy(() => import("MFUSER/UserFoodPreferences"))

const UserFoodPreferences: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFUserFoodPreferences isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default UserFoodPreferences