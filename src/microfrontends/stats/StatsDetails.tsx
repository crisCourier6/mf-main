import React, { Suspense, lazy } from "react";
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