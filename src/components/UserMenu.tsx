import React from "react";
import { Paper } from "@mui/material";

const UserMenu = () => {
    return (
        <Paper>
            Hello {window.localStorage.name}
        </Paper>
		
    )
}

export default UserMenu