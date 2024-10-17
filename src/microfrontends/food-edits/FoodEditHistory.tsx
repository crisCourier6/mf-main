import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodEditHistory = lazy(() => import("MFEDIT/FoodEditHistory"))

const FoodEditHistory: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodEditHistory isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default FoodEditHistory