import React, { Suspense, lazy } from "react";
// @ts-ignore
const MFUserFoodPreferencesMini = lazy(() => import("MFUSER/UserFoodPreferencesMini"))

const UserFoodPreferencesMini = () => {
    return (
        <div>
            <Suspense>
                <MFUserFoodPreferencesMini />
            </Suspense>
        </div>
    )
}

export default UserFoodPreferencesMini