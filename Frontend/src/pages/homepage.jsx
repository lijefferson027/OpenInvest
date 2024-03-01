import React from "react";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
//import box to enable responsive homepage design - line 9
import { Box } from "@mui/material";
const homepage = () => {
    return (
        <>
        <Box sx={{ display: 'flex' }} >
        <MiniDrawer />
        <div className="App">HOME PAGE ROUTE</div>
        <div className="yomama"> deez nuts</div>
        </Box>
        
        </>
    );
};
export default homepage;