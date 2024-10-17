import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFUserNotifications = lazy(() => import("MFNOTIF/UserNotifications"))

const UserNotifications: React.FC<{ isAppBarVisible: boolean}> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense>
                <MFUserNotifications isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default UserNotifications