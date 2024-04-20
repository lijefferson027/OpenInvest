import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Bar, Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import MiniDrawer from "../assets/components/sidebar";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
    BarController, 
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement, 
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels, 
    BarController 
);

const Budget = () => {
    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [65, 59, 80, 81, 56],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const styles = {
        textboxContainer: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
            border: '2px solid #3BC086',
            borderRadius: '10px',
            padding: '10px',
            height: '100px',
            fontSize: '16px',
        },
        grayText: {
            color: '#69747C',
            textAlign: 'left',
        },
        boldGrayText: {
            fontWeight: 'bold',
            textAlign: 'left',
        },
    };

    const doughnutData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                ],
                hoverOffset: 4,
            },
        ],
    };

    const barOptions = {
        scales: {
            x: {
                barThickness: 30, // Adjust this value to control bar width
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== undefined) {
                            label += `${context.parsed}%`;
                        }
                        return label;
                    },
                    footer: function() {
                        return `Average: ${averagePaymentPercentage.toFixed(2)}%`;
                    }
                }
            },
            legend: {
                display: true,
                position: 'top',
            }
        }
    };

    const doughnutOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== undefined) {
                            label += `${context.parsed}%`;
                        }
                        return label;
                    },
                    footer: function() {
                        return `Average: ${averagePaymentPercentage.toFixed(2)}%`;
                    }
                }
            },
            legend: {
                display: true,
                position: 'bottom',
            }
        }
    };

    return (
        <Box >
            <MiniDrawer />
                <Grid container spacing={2}  className="budgetGraphs" sx={{display: 'flex', flexDirection: 'row' }}>
                    <Grid item xs={6} md={6}>
                <Paper elevation={4} className='bugetgraphs' sx={{ p: 1, width: '100%', mt: 1, border: '1px solid #000', borderRadius: '8px' }}>
                    <h2>Spending</h2>
                    <Bar data={barData} options={barOptions} />
                </Paper>
                </Grid>
                <Grid item xs={5} md={5}>
                <Paper elevation={1} sx={{ p: 1, width: '100%', mt: 1, border: '1px solid #000', borderRadius: '8px' }}>
                    <h2> Food </h2>
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                </Paper>
                </Grid>
                <Grid item xs={3} md={3}>
                <Box sx={{ ...styles.textboxContainer }}>
                    <Typography sx={styles.grayText}>Gray Text</Typography>
                    <Typography sx={styles.boldGrayText}>Bold Gray Text</Typography>
                </Box>
                </Grid>
                </Grid>
        </Box>
    );
};

export default Budget;