import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginBar from '../assets/components/Login_Signup/LoginBar';
import GmailIcon from "../assets/components/Login_Signup/gmail.svg";
import GithubIcon from "../assets/components/Login_Signup/github.svg";
import DiscordIcon from "../assets/components/Login_Signup/discord.svg";
import { useNavigate } from "react-router-dom";
import supabase from '../supabaseClient';  // Adjust the path as necessary

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setError(error.message);
    } else if (user) {
      navigate("/");  // Redirect to the homepage or dashboard
    }
  };

  async function signInWithOAuth(provider) {
    setLoading(true);
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider,
    });

    setLoading(false);
    if (error) {
      setError(`${provider} Login Failed: ${error.message}`);
    } else if (user) {
      navigate("/");
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <LoginBar />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#37BE83", height: 60, width: 60 }}>
            <LockOutlinedIcon fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
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
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
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
              {loading ? 'Loading...' : 'Login'}
            </Button>
            <Typography
              sx={{
                marginTop: 2,
                fontSize: 20,
                alignItems: "center",
              }}
            >
              Or Login Using
            </Typography>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button onClick={() => signInWithOAuth('google')} sx={{ marginRight: 1 }}>
                <img src={GmailIcon} alt="Google" />
              </Button>
              <Button onClick={() => signInWithOAuth('github')} sx={{ marginRight: 1 }}>
                <img src={GithubIcon} alt="GitHub" />
              </Button>
              <Button onClick={() => signInWithOAuth('discord')}>
                <img src={DiscordIcon} alt="Discord" />
              </Button>
            </Box>
            <Grid container sx={{ marginTop: 2 }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => navigate("/signup")}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
