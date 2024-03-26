//Creating a responsive navbar using MUI and react router\
//https://v4.mui.com/styles/basics/
//CSS Docs: https://developer.mozilla.org/en-US/docs/Learn/CSS
//MUI Template: https://mui.com/material-ui/react-drawer/#permanent-drawer
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//import Sidebar Icons
//material-ui link: https://mui.com/material-ui/material-icons/
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import CottageIcon from "@mui/icons-material/Cottage";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SavingsIcon from "@mui/icons-material/Savings";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
//import 'OPEN INVEST' logo
import logo from "./logo.svg";
//import useNavigate to navigate through pages
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
//For expanding the mini drawer text
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
//For Closed mini drawer
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
//Top navbar
const AppBar = styled(MuiAppBar, {
  //it's responsiveness when minidrawer opens
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

//mainscreen padding for responsiveness
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
//issue with highlighting selected page tab(need to double click), come back to it later
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [color, changeColor] = React.useState("#416454");
  const [color1, changeColor1] = React.useState("#416454");
  const [color2, changeColor2] = React.useState("#416454");
  const [color3, changeColor3] = React.useState("#416454");
  const [color4, changeColor4] = React.useState("#416454");
  const [color5, changeColor5] = React.useState("#416454");
  const [color6, changeColor6] = React.useState("#416454");
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "white", borderRadius: 2 }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="" />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ backgroundColor: "#8DDAB8" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: "#8DDAB8", height: 1, borderRadius: 2 }}>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              changeColor("White");
              navigate("/");
            }}
          >
            <ListItemButton
              sx={{
                marginTop: 1,
                minHeight: 80,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: "#416454",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: `${color}`,
                }}
              >
                <CottageIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Overview"
                sx={{ opacity: open ? 1 : 0 }}
                classes={{ primary: "nav-label-styling" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              changeColor1("White");
              navigate("/Transactions");
            }}
          >
            <ListItemButton
              sx={{
                marginTop: 1,
                minHeight: 80,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: "#416454",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: `${color1}`,
                }}
              >
                <ReceiptLongIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Transactions"
                sx={{ opacity: open ? 1 : 0 }}
                classes={{ primary: "nav-label-styling" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              changeColor2("White");
              navigate("/Accounts");
            }}
          >
            <ListItemButton
              sx={{
                marginTop: 1,
                minHeight: 80,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: "#416454",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: `${color2}`,
                }}
              >
                <ManageAccountsIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Accounts"
                sx={{ opacity: open ? 1 : 0 }}
                classes={{ primary: "nav-label-styling" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              changeColor3("White");
              navigate("/Budget");
            }}
          >
            <ListItemButton
              sx={{
                marginTop: 1,
                minHeight: 80,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: "#416454",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: `${color3}`,
                }}
              >
                <SavingsIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Budget"
                sx={{ opacity: open ? 1 : 0 }}
                classes={{ primary: "nav-label-styling" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              changeColor4("White");
              navigate("/Goals");
            }}
          >
            <ListItemButton
              sx={{
                marginTop: 1,
                minHeight: 80,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: "#416454",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: `${color4}`,
                }}
              >
                <TaskAltIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Goals"
                sx={{ opacity: open ? 1 : 0 }}
                classes={{ primary: "nav-label-styling" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              changeColor5("White");
              navigate("/Trends");
            }}
          >
            <ListItemButton
              sx={{
                marginTop: 1,
                minHeight: 80,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: "#416454",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: `${color5}`,
                }}
              >
                <TrendingUpIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Trends"
                sx={{ opacity: open ? 1 : 0 }}
                classes={{ primary: "nav-label-styling" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              changeColor6("White");
              navigate("/Investment");
            }}
          >
            <ListItemButton
              sx={{
                marginTop: 1,
                minHeight: 80,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: "#416454",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: `${color6}`,
                }}
              >
                <PriceChangeIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Investment"
                sx={{ opacity: open ? 1 : 0 }}
                classes={{ primary: "nav-label-styling" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
