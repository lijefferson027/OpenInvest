//Subpages to Accounts page | add stripe to payments page
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
import { Box } from "@mui/material";
import SimpleBottomNavigation from "../assets/components/accnavbar";

const payments = () => {
    return (<>
    <Box sx={{ display: 'flex' }} >
    <MiniDrawer />
    <SimpleBottomNavigation />
    <div className="App">PAYMENTS PAGE ROUTE</div>
    </Box>
    </>) 
};
export default payments;