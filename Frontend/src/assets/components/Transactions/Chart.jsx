import React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts'; // Note: Ensure @mui/x-charts supports these components or find an alternative
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
    return { time, amount: amount ?? null };
}

const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', null),
];

export default function Chart() {
    const theme = useTheme();

    return (
        <>
            <Title>Today</Title>
            <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
                <LineChart
                    dataset={data}
                    margin={{
                        top: 16,
                        right: 20,
                        left: 70,
                        bottom: 30,
                    }}
                    xAxis={[
                        {
                            scaleType: 'point',
                            dataKey: 'time',
                            tickNumber: 2,
                            tickLabelStyle: theme.typography.body2,
                        },
                    ]}
                    yAxis={[
                        {
                            label: 'Returns ($)',
                            labelStyle: {
                                ...theme.typography.body1,
                                fill: '#37BE83',
                            },
                            tickLabelStyle: theme.typography.body2,
                            max: 2500,
                            tickNumber: 6,
                        },
                    ]}
                    series={[
                        {
                            dataKey: 'amount',
                            showMark: false,
                            color: '#37BE83',
                        },
                    ]}
                    sx={{
                        [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
                        [`.${axisClasses.root} text`]: { fill: 'theme.palette.text.secondary' },
                        [`& .${axisClasses.left} .${axisClasses.label}`]: {
                            transform: 'translateX(-25px)',
                        },
                    }}
                />
            </div>
        </>
    );
}
