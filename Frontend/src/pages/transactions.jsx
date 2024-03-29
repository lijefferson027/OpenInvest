import React from "react";
import MiniDrawer from "../assets/components/sidebar";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Textbox from "../assets/components/Transactions/Textbox";
import Linechart from "../assets/components/Homepage/chart";

const transactions = () => {
    // Inline styles for the transactions page
    const containerStyle = {
        backgroundColor: "#F0F2F5",
        maxHeight: "50vh", // Set minimum height to fill the viewport
        display: "grid", // Use CSS Grid layout
        gridTemplateRows: "1fr 1fr", // Divide the page into two rows of equal height
        gridTemplateColumns: "1fr", // Use a single column to fill the width
        gridGap: "20px", // Add gap between grid items
        padding: "20px", // Add padding to create space around the content
    };

    return ( 
        <div> 
            <Container style= {containerStyle}>
            {/* nav bar and side bar*/}
            <MiniDrawer/>
            {/* Container for 2 tex boxes */}
            <Container>
            <Grid container spacing={3} style={{ height: "100%" }} xs={12}> 
                <Grid item xs={12}>
                    {/* Pass dollarAmount and title as props */}
                    <Textbox
                        dollarAmount='$10000'
                        title="Total Balance"
                    />
                </Grid>
                <Grid item xs={12}>
                    {/* Pass dollarAmount and title as props */}
                    <Textbox
                        dollarAmount='$200000'
                        title="Credit Limit"
                    />
                </Grid>
            </Grid>
            </Container>
            </Container>
        </div>
     );
}
 
export default transactions;
