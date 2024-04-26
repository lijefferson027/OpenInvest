import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

export default function Deposits() {
    return (
        <>
            <Title>Recent Deposits</Title>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 15 April, 2024
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault} sx={{ color:'#37BE83'}}>
                    View balance
                </Link>
            </div>
        </>
    );
}
