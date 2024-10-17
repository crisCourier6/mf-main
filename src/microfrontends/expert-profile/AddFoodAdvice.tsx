import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFAddFoodAdvice = lazy(() => import("MFEXPERT/AddFoodAdvice"))

const AddFoodAdvice = () => {
    return (
        <div>
            <Suspense>
                <MFAddFoodAdvice />
            </Suspense>
        </div>
    )
}

export default AddFoodAdvice