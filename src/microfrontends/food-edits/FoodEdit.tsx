import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodEdit = lazy(() => import("MFEDIT/FoodEdit"))

const FoodEdit: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodEdit isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default FoodEdit