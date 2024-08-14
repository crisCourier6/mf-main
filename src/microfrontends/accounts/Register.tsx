import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFRegister = lazy(() => import("MFACC/Register"))

const Register = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFRegister />
            </Suspense>
        </div>
    )
}

export default Register