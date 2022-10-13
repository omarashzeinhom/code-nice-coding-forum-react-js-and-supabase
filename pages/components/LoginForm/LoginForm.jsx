import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { grey } from "@mui/material/colors";

import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  FormControlLabel,
  Grid,
  Typography,
  Link,
  TextField,
  Checkbox,
  Paper,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";


//EXAMPLE SYNTAX
const colorGrey = grey["900"];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LoginForm({ providers }) {
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState();


  const handleLogin = () => {};

  useEffect(() => {
    setEmail(email);
    setPassword(password);
  }, [email, password]);

  console.log(email, password);
  if (!"test") {
    return (
      <>
        <Typography textAlign="center">
          User Signed In as: 
        </Typography>
        <Button color="error" >
          Do you Want to Sign Out?
        </Button>
      </>
    );
  } else {
    return (
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleLogin}
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
                onChange={(event) => setEmail(event.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
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
                sx={{ mt: 3, mb: 2 }}
                //CREDENTIALS SIGN IN WITH CSRF TOKENS
              >
                LOG IN
                <Fingerprint />
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color={"secondary"}
                sx={{ mt: 3, mb: 2 }}
              >
                Login with
                <GitHubIcon />
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

//**ASYNC FUNC TO GET PROPS FROM PROVIDERS USING CONTEXT */
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
