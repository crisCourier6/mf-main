import React, { Suspense, lazy } from "react";

// @ts-ignore
const MFUserProfile = lazy(() => import("MFUSER/UserProfile"))

const UserProfile = () => {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <MFUserProfile />
            </Suspense>
        </div>
    )
}

export default UserProfile