import React from "react";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
import { Box } from "@mui/material";
import WipeccButtonComponent from "../assets/components/buttons/wipecc";
const goals = () => {
        return (<>
        <Box sx={{ display: 'flex' }} >
        <MiniDrawer />
        <WipeccButtonComponent />
        <div className="App"> </div>
        </Box>
    </>) 
};
export default goals;