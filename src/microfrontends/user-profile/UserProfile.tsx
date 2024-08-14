import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFUserProfile = lazy(() => import("MFUSER/UserProfile"))

const UserProfile = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFUserProfile />
            </Suspense>
        </div>
    )
}

export default UserProfile