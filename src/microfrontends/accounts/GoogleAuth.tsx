import React, { Suspense, lazy } from "react";

// @ts-ignore
const MFGoogleAuth = lazy(() => import("MFACC/GoogleAuth"))

const GoogleAuth = () => {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <MFGoogleAuth />
            </Suspense>
        </div>
    )
}

export default GoogleAuth