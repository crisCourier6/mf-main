import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFStoreList = lazy(() => import("MFSTORE/StoreList"))

const StoreList: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFStoreList isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default StoreList