import React from "react";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
import { Box } from "@mui/material";
const goals = () => {
        return (<>
        <Box sx={{ display: 'flex' }} >
        <MiniDrawer />
        <div className="App">GOALS PAGE ROUTE</div>
        </Box>
    </>) 
};
export default goals;