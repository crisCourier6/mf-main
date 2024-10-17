import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFUserFoodPreferencesMini = lazy(() => import("MFUSER/UserFoodPreferencesMini"))

const UserFoodPreferencesMini = () => {
    return (
        <div>
            <Suspense>
                <MFUserFoodPreferencesMini />
            </Suspense>
        </div>
    )
}

export default UserFoodPreferencesMini