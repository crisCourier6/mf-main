import React, { Suspense, lazy } from "react";

// @ts-ignore
const MFFoodProfileMini = lazy(() => import("MFFOOD/FoodProfile"))

const FoodProfile = () => {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <MFFoodProfileMini />
            </Suspense>
        </div>
    )
}

export default FoodProfile