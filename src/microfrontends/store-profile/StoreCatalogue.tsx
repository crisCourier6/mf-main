import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFStoreCatalogue = lazy(() => import("MFSTORE/StoreCatalogue"))

const StoreCatalogue: React.FC<{ isAppBarVisible: boolean, canEditCatalogue: boolean }> = ({ isAppBarVisible, canEditCatalogue }) => {
    return (
        <div>
            <Suspense>
                <MFStoreCatalogue isAppBarVisible={isAppBarVisible} canEditCatalogue={canEditCatalogue}/>
            </Suspense>
        </div>
    )
}

export default StoreCatalogue