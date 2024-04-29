import * as React from "react";
import { useState } from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"; // Adjust the path as necessary
import LoginBar from "../assets/components/Login_Signup/LoginBar";
import GmailIcon from "../assets/components/Login_Signup/gmail.svg";
import GithubIcon from "../assets/components/Login_Signup/github.svg";
import DiscordIcon from "../assets/components/Login_Signup/discord.svg";
import Features from "../assets/components/Login_Signup/Features.svg";

const defaultTheme = createTheme();

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      alert(error.message);
    } else if (user) {
      navigate("/"); // Redirect to the homepage or dashboard
    }
  };

  async function signInWithOAuth(provider) {
    setLoading(true);
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options:
        provider === "google"
          ? {
              queryParams: {
                access_type: "offline", // Required for receiving a refresh token
                prompt: "consent", // Ensures that the consent screen appears
              },
            }
          : {},
    });

    setLoading(false);
    if (error) {
      console.error(`${provider} Login Error:`, error.message);
      alert(error.message);
    } else if (user) {
      navigate("/");
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <LoginBar />
      <Grid container>
        <Grid
          item
          position="relative"
          marginTop={0}
          marginLeft={5}
          xs={4.7}
          md={4}
        >
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
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign Up"}
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
                <Button onClick={() => signInWithOAuth("google")}>
                  <img src={GmailIcon} alt="Google login" />
                </Button>
                <Button onClick={() => signInWithOAuth("github")}>
                  <img src={GithubIcon} alt="GitHub login" />
                </Button>
                <Button onClick={() => signInWithOAuth("discord")}>
                  <img src={DiscordIcon} alt="Discord login" />
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
                    variant="body2"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Already have an account? Log In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} md={6} lg={7} sx={{ marginLeft: 7 }}>
          <img src={Features} alt="" />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
