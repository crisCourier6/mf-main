import React, { lazy, Suspense } from "react";
import Logo from "../../public/EyesFoodBetaLogo.png"
import { Paper } from "@mui/material";

// const PageLayout = xcss({
//     display: "flex",
//     width: "100%"
// })

// const ComponentLayout = xcss({
//     width: "80%",
//     maxWidth: "300px",
// });

const UserMenu = () => {
    return (
        <Paper>
            Hello {window.localStorage.name}
        </Paper>
		
    )
}

export default UserMenu