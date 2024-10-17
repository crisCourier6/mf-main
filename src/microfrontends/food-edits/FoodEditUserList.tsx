import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodEditUserList = lazy(() => import("MFEDIT/FoodEditUserList"))

const FoodEditUserList: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodEditUserList isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default FoodEditUserList