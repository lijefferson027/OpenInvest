import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from "../logo.svg";


function ResponsiveAppBar() {

  return (
    <AppBar
      position="fixed"
      className="logobar"
      sx={{ backgroundColor: "#8DDAB8" }}
    >
      <Container>
        <Toolbar disableGutters>
          {/*Logo icon */}
          <img src={logo} alt="" className="logoloc" />
          {/*Logo Text */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
