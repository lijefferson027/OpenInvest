import React from "react";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
import { Box, Grid } from "@mui/material";
//import Line chart component
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Filler,
    Title
} from 'chart.js';

//activate components
ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Filler,
    Title
);
const investment = () => {
        return (<>
        <Box sx={{ display: 'flex'}} >
        <MiniDrawer /> {/*Navigation component*/}
        <Grid
        container
        spacing={2}
        className="grid-container"
        sx={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: "100px",
          left: "70px",
        }}>
        <Grid item position="relative" marginTop={3} marginLeft={3} xs="4">
       {/*Add line chart*/}
        <div className= "RateofReturnChart">
        <Line 
        datasetIdKey='RateOfReturn' 
        data ={{
            labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets:[
                {
                    id: 1,
                    label: 'Total Invested',
                    data:[100,200,300,400,500,600,700,800,900,1000,1100,1200],
                    borderColor:'rgb(65,100,84,0.44)',
                    backgroundColor:'rgb(65,100,84,.25)',
                    pointRadius:2,
                    pointHoverRadius:10
                },
                {
                    id: 2,
                    label: 'Return Outcome',
                    data:[150,270,310,390,690,500,820,1000,1060,1300,1350,1400],
                    borderColor:'rgb(96,209,160)',
                    backgroundColor:'rgb(96,209,160,0.44)',
                    pointRadius:2,
                    pointHoverRadius:10
                },
            ],
        }}
        options={{
            responsive:true,
            plugins: {
                title:{
                    display:true,
                    text:'Rate of Return Graph',
                    color:'black',
                    font: {
                        size: 18
                    },
                    align:'start'
                },
                legend: {
                    display: true,
                    position: 'top',
                    align:'end'
                },
            },
            scales:{
                x:{
                    grid:{
                        display:false
                    }
                }
            },
            elements:{
                line:{
                    fill:true,
                    tension:0.4,
                },
            },
        }}
        ></Line> 
        </div> 
        </Grid> 
        </Grid>
        </Box>
    </>) 
};
export default investment;