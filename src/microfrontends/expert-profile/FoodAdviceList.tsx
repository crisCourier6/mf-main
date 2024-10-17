import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodAdviceList = lazy(() => import("MFEXPERT/FoodAdviceList"))

const FoodAdviceList = () => {
    return (
        <div>
            <Suspense>
                <MFFoodAdviceList />
            </Suspense>
        </div>
    )
}

export default FoodAdviceList