import React, { Suspense, lazy } from "react";

// @ts-ignore
const MFLogin = lazy(() => import("MFACC/Login"))

const Login = () => {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <MFLogin />
            </Suspense>
        </div>
    )
}

export default Login