import React from "react";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
import { Box } from "@mui/material";
const trends = () => {
        return (<>
        <Box sx={{ display: 'flex' }} >
        <MiniDrawer />
        <div className="App">TRENDS PAGE ROUTE</div>
        </Box>
    </>) 
};
export default trends;