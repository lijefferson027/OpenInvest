import React from "react";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
import { Box } from "@mui/material";
import Allocater from "../assets/components/Budget/allocater";
const budget = () => {
        return (<>
        <Box >
        <MiniDrawer />
        <Allocater/>
        </Box>
    </>) 
};
export default budget;