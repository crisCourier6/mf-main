import React, { Suspense, lazy } from "react";

// @ts-ignore
const MFActivate = lazy(() => import("MFACC/Activate"))

const Activate = () => {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <MFActivate />
            </Suspense>
        </div>
    )
}

export default Activate