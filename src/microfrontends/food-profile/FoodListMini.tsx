import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodListMini = lazy(() => import("MFFOOD/FoodListMini"))

const FoodListMini: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodListMini isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default FoodListMini