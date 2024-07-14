import React, { Suspense, lazy } from "react";

// @ts-ignore
const MFFoodListLocal = lazy(() => import("MFFOOD/FoodListLocal"))

const FoodListLocal = () => {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <MFFoodListLocal />
            </Suspense>
        </div>
    )
}

export default FoodListLocal