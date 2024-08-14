import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFGoogleAuth = lazy(() => import("MFACC/GoogleAuth"))

const GoogleAuth = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFGoogleAuth />
            </Suspense>
        </div>
    )
}

export default GoogleAuth