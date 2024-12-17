import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFResetPassword = lazy(() => import("MFACC/ResetPassword"))

const ResetPassword = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFResetPassword />
            </Suspense>
        </div>
    )
}

export default ResetPassword