// BottomNavBar
//I used
//MUI Template Link: https://mui.com/material-ui/react-bottom-navigation/
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaymentsIcon from '@mui/icons-material/Payments';
import '../../App.css';
//import useNavigate to navigate through pages
import { useNavigate } from 'react-router-dom';
const styles = {
  label: {
    color: '#FF5733', // Customize the text color
  },
};
//issue with highlighting selected page tab(conflicts with onClick navigation), come back to it later
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <footer className='footer'>
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          className='bottom-nav-styling'
        >
          <BottomNavigationAction
            label="Profile Settings"
            icon={<SettingsAccessibilityIcon fontSize='medium' />}
            classes={{ label: 'nav-label-styling' }}
           /*style={{ color: value !== 0 ? '#416454' : 'white' }}*/
           style={{ color: '#416454'  }}
            onClick={()=>{navigate("/Settings");}}
          />
          <BottomNavigationAction
            label="Orders"
            icon={<ReceiptLongIcon fontSize='medium' />}
            classes={{ label: 'nav-label-styling' }}
           /*style={{ color: value !== 1 ? '#416454' : 'white' }}*/
            onClick={()=>{navigate("/Orders")}}
          />
          <BottomNavigationAction
            label="Payments"
            icon={<PaymentsIcon fontSize='medium' />}
            classes={{ label: 'nav-label-styling' }}
           /*style={{ color: value !== 2 ? '#416454' : 'white' }}*/  
            onClick={()=>{navigate("/Payments")}}
          />
        </BottomNavigation>
      </Box>
    </footer>
  );
}
