import React, { Suspense, lazy } from "react";

// @ts-ignore
const MFFoodProfile = lazy(() => import("MFFOOD/FoodProfile"))

const FoodProfile = () => {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <MFFoodProfile />
            </Suspense>
        </div>
    )
}

export default FoodProfile