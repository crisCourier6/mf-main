import React, { Suspense, lazy } from "react";

// @ts-ignore
const MFUserFoodPreferences = lazy(() => import("MFUSER/UserFoodPreferences"))

const UserFoodPreferences = () => {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <MFUserFoodPreferences />
            </Suspense>
        </div>
    )
}

export default UserFoodPreferences