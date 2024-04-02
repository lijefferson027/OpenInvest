import MiniDrawer from "../assets/components/sidebar";
import { Box, Grid, Typography } from "@mui/material";
import Textbox from "../assets/components/Transactions/Textbox";
import "./CSS/transactionspage.css";
import "../assets/components/Transactions/Textbox.css";


const Transactions = () => {
    // Inline styles for the transactions page
    
    return ( 
        <div>
            <MiniDrawer />
            <Box sx={{ flexGrow: 1, paddingTop: "20px", paddingLeft: "20px" }}>
                <Grid 
                    container
                    spacing={2}
                    className="transactions-container" 
                >
                    {/* Grid item 1 */}
                    <Grid item
                    position="relative"
                    marginTop={6}
                    marginLeft={3}
                    marginRight={3}
                    xs="4"
                    lg="5" 
                    >
                        <Grid container direction="column" spacing={3}>
                            <Grid 
                            item
                            > 
                                <Textbox
                                    dollarAmount={"1000"}
                                    title={"Total"}
                                />
                            </Grid>
                            <Grid item> 
                                <Textbox
                                    dollarAmount={"1000"}
                                    title={"Total"}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Grid item 3 */}
                    <Grid item className="graph-item">
                        <Grid container spacing={3}>
                            <Grid item>
                                
                                </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
 
export default Transactions;
