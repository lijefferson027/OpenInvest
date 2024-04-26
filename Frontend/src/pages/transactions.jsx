import MiniDrawer from "../assets/components/sidebar";
import { Box, Container, Grid, Typography } from "@mui/material";
import Textbox from "../assets/components/Transactions/Textbox";
import "./CSS/transactionspage.css";
import "../assets/components/Transactions/Textbox.css";
import Linechart from "../assets/components/Homepage/chart";
import { UserData } from "../assets/components/Homepage/Data"; // Importing UserData from Homepage
import DoughnutChart from "../assets/components/Transactions/DonutChart";
import ExpensesChart from "../assets/components/Transactions/ExpensesTable";

const Transactions = () => {
    // Prepare data for the Linechart component
    const userData = {
        labels: UserData.map((data) => data.date),
        datasets: [
        {
            label: "Users Networth",
            data: UserData.map((data) => data.amount),
            backgroundColor: [
            "rgba(52, 168, 83, 0.2)", // Start color (green)
            "rgba(255, 255, 255, 0.2)", // End color (white)
            ],
            borderColor: "#37BE83",
            tension: 0.1,
            fill: true,
            maintainAspectRatio: true,
        },
        ],
    };

    const spendingData = {
        datasets: [{
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }],
        labels: ['Groceries', 'Transportation', 'Health/Wellness', 'Restaurants', 'Shopping']
    };

    const expenses = [
        { name: 'Rent', amount: 1000, date: '2024-04-10' },
        { name: 'Groceries', amount: 200, date: '2024-04-11' },
        { name: 'Groceries', amount: 200, date: '2024-04-11' },
        { name: 'Groceries', amount: 200, date: '2024-04-11' },
        // Add more expense objects as needed
    ];
    


    return ( 
        <div>
            <MiniDrawer />
                <Grid container
                    spacing={2}
                    className="transactions-container"
                    sx = {{
                        height: '50vh',
                        top: '100px',
                        width: "100vw",
                        marginTop: '5px',
                    }} 
                >
                    {/* Grid item 1 */}
                    <Grid item
                    position="relative"
                    marginTop={6}
                    marginLeft={3}
                    marginRight={3}
                    lg= {3} 
                    >
                        <Grid container direction="column" spacing={3}>
                            <Grid item >
                                <Textbox
                                    dollarAmount={"1000"}
                                    title={"Total Balance"}
                                />
                            </Grid>
                            <Grid item> 
                                <Textbox
                                    dollarAmount={"1000"}
                                    title={"Credit Limit"}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Grid item 2 */}
                    <Grid item className="chart-item" lg = {8}>
                        <Grid item sx={{width:'100%'}}>
                             {/* Pass userData as prop to the Linechart component */}
                            <Linechart data={userData}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    spacing={2}
                    marginTop={6}
                    marginLeft={3}
                    className="transactions-container"
                    sx={{
                    height: '50vh',
                    top: 'calc(100px + 50vh)',
                    width: "100vw",
                    }} 
                >
                    <Grid item sx={{height: "100%", width: "75%", paddingRight:"30px"}} >
                        <ExpensesChart expenses={expenses} title = " Transactions"/>
                    </Grid>
                    <Grid item className="chart-item" sx={{height: "75%"}}>
                        <DoughnutChart data={spendingData} title = "Account Summary" />
                    </Grid>
                </Grid>
        </div>
    );
}
export default Transactions;
