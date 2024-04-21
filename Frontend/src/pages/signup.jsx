import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginBar from "../assets/components/Login_Signup/LoginBar";
import GmailIcon from "../assets/components/Login_Signup/gmail.svg";
import GithubIcon from "../assets/components/Login_Signup/github.svg";
import DiscordIcon from "../assets/components/Login_Signup/discord.svg";
import Features from "../assets/components/Login_Signup/Features.svg";
// TODO remove, this demo shouldn't need to reset the theme.
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <LoginBar />
      <Grid
        container
        spacing={3}
        className="grid-container"
        sx={{
          position: "absolute",
          top: "100px",
          left: "70px",
        }}
      >
        <Grid item position="relative" marginTop={0} marginLeft={5} xs={4.7}>
          <Box
            sx={{
              marginTop: "10vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#37BE83", height: 60, width: 60 }}>
              <LockOutlinedIcon fontSize="large" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#37BE83" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Sign Up
              </Button>
              <Typography
                sx={{
                  marginTop: 2,
                  fontSize: 20,
                  alignItems: "center",
                }}
              >
                Or Sign Up Using
              </Typography>
              <Box
                sx={{
                  marginTop: 2,
                  paddingX: 20,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Button>
                  <img src={GmailIcon} alt="" />
                </Button>
                <Button>
                  <img src={GithubIcon} alt="" />
                </Button>
                <Button>
                  <img src={DiscordIcon} alt="" />
                </Button>
              </Box>
              <Grid
                container
                sx={{
                  marginTop: 2,
                  alignItems: "center",
                }}
              >
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body1"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    {"Already have an account? Log In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} md={4} lg={7}>
          <img src={Features} alt="" />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
