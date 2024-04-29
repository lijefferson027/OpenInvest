import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shares, paymentMethod, amount) {
    return { id, date, name, shares, paymentMethod, amount };
}

const rows = [
    createData(
        0,
        '04/21/2024',
        'SCHK',
        '2.00 shares at $48.99',
        'VISA ⠀•••• 3719',
        97.98,
    ),
    createData(
        1,
        '04/17/2024',
        'VOO',
        '0.21 shares at $475.96',
        'VISA ⠀•••• 2574',
        102.01,
    ),
    createData(2, '04/10/2024', 'WMT', '1.00 shares at $60.11', 'MC ⠀•••• 1253', 60.11),
    createData(
        3,
        '04/09/2024',
        'SCHD',
        '3.00 shares at $79.32',
        'AMEX ⠀•••• 2000',
        237.95,
    ),
    createData(
        4,
        '04/08/2025',
        'TSLA',
        '1.00 shares at $169.29',
        'VISA ⠀•••• 5919',
        169.29,
    ),
];

function preventDefault(event) {
    event.preventDefault();
}

export default function Orders() {
    return (
        <React.Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Shares</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right">Sale Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shares}</TableCell>
                            <TableCell>{row.paymentMethod}</TableCell>
                            <TableCell align="right">{`$${row.amount}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="#37BE83" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </React.Fragment>
    );
}