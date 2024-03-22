import React from "react";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
import { Box } from "@mui/material";
import SimpleBottomNavigation from "../assets/components/accnavbar";
const accounts = () => {
    return (<>
    <Box sx={{ display: 'flex' }} >
    <MiniDrawer />
    <SimpleBottomNavigation />
    <div className="App">ACCOUNT PAGE ROUTE</div>
    </Box>
    </>) 
};
export default accounts;