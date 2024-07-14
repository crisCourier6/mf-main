import React, { Suspense, lazy } from "react";

// @ts-ignore
const MFRegister = lazy(() => import("MFACC/Register"))

const Register = () => {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <MFRegister />
            </Suspense>
        </div>
    )
}

export default Register