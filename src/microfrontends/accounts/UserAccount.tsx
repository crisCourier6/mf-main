import React, { Suspense, lazy } from "react";

// @ts-ignore
const MFUserAccount = lazy(() => import("MFACC/UserAccount"))

const UserAccount = () => {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <MFUserAccount />
            </Suspense>
        </div>
    )
}

export default UserAccount