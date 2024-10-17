import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodDiaryLocal = lazy(() => import("MFDIARY/FoodDiaryLocal"))

const FoodDiaryLocal: React.FC = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodDiaryLocal/>
            </Suspense>
        </div>
    )
}

export default FoodDiaryLocal