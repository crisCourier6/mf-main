import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodSearchLocal = lazy(() => import("MFFOOD/FoodLocalSearch"))

const FoodSearchLocal: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodSearchLocal isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default FoodSearchLocal