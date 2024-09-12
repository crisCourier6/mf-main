import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodDiary = lazy(() => import("MFDIARY/FoodDiary"))

const FoodDiary: React.FC = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodDiary/>
            </Suspense>
        </div>
    )
}

export default FoodDiary