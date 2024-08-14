import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodProfile = lazy(() => import("MFFOOD/FoodProfile"))

const FoodProfile: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodProfile isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default FoodProfile