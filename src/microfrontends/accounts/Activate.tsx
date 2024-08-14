import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFActivate = lazy(() => import("MFACC/Activate"))

const Activate = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFActivate />
            </Suspense>
        </div>
    )
}

export default Activate