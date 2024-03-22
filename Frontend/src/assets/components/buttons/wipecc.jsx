import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//imported svg image wipecc 
import wipecc from './wipecc.svg';
import retirementprep from './retirementprep.svg';
import savecollege from './savecollege.svg';
//import taketrip from '<div className="" />taketrip.svg';

const buttonStyle = {
  border: 'none', // Remove border
  background: 'transparent', // Transparent background
  padding: 0, // Remove padding
};

//exported wipecc button 
export default function WipeccButtonComponent() {
return (
    //this represents the first row of buttons
    <Stack spacing={2} direction="row">z
        <button style={buttonStyle}>
        <img src = {wipecc} alt="" />
        <img src = {savecollege} alt=""/>
        <img src = {retirementprep} alt=""/>
        <img src = {taketrip} alt=""/>
        </button>
        
    </Stack>
    
);
}


