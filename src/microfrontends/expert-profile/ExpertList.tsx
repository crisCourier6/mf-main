import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFExpertList = lazy(() => import("MFEXPERT/ExpertList"))

const ExpertList: React.FC<{ isAppBarVisible: boolean, onReady:()=>void }> = ({ isAppBarVisible, onReady }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFExpertList isAppBarVisible={isAppBarVisible} onReady={onReady}/>
            </Suspense>
        </div>
    )
}

export default ExpertList