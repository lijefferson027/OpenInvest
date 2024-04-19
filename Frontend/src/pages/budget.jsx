import React from "react";
import { Box } from "@mui/material";
import { Bar, Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import BarBorderComponent from "../components/BarBorderComponent";
import PieBorderComponent from "../components/PieBorderComponent";
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
        <Box sx={{ display: 'flex', flexDirection: 'row'  }}>
            <MiniDrawer />
          <Box>
          <Box sx={{  p: 10 }}>
               <Box>
               <BarBorderComponent>
                    <h2>Spending</h2>
                    <Bar data={barData} options={barOptions} />
                </BarBorderComponent>
               </Box>
            <Box>
            <PieBorderComponent>
                    <h2> Food </h2>
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                </PieBorderComponent>
            </Box>
            </Box>
          </Box>
        </Box>
    );
};

export default Budget;