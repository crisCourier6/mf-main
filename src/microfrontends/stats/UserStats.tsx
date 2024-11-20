import React, { Suspense, lazy } from "react";
// @ts-ignore
const MFUserStats = lazy(() => import("MFSTATS/UserStats"))

const UserStats: React.FC<{ isAppBarVisible: boolean}> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense>
                <MFUserStats isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default UserStats