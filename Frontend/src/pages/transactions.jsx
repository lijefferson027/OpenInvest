import React from "react";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
import { Box } from "@mui/material";
import Dashboard from "../assets/components/Transactions/Dashboard";
const transactions = () => {
    return (<>
        <Box sx={{ display: 'flex' }} >
            <MiniDrawer />
            <Dashboard/>
        </Box>
    </>)
};
export default transactions;