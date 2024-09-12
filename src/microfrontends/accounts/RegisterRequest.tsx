import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFRegisterRequest = lazy(() => import("MFACC/RegisterRequest"))

const RegisterRequest = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFRegisterRequest />
            </Suspense>
        </div>
    )
}

export default RegisterRequest