import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFStatsDetails = lazy(() => import("MFSTATS/StatsDetails"))

const StatsDetails: React.FC<{ isAppBarVisible: boolean}> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense>
                <MFStatsDetails isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default StatsDetails