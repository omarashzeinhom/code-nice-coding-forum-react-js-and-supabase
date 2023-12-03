import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { grey } from "@mui/material/colors";
import { supabase } from "../../../lib/supabaseClient";
import { withPageAuth } from '@supabase/auth-helpers-nextjs'

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
  Alert,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LoginState from "../LoginState/LoginState";

//EXAMPLE SYNTAX
const colorGrey = grey["900"];
import Copyright from "../Footer/Footer";


export default function LoginForm({ providers, user,session }) {
  const [email, setEmail] = React.useState();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNotification = (event) => {
    if (email) {
      return (
        <Alert severity="success" variant="contained">
          Your {`${email}`} has been mailed a Link , Please Check your Inbox for
          One Time Link 🥳
        </Alert>
      );
    } else {
      return (
        <Alert severity="error" variant="contained">
          Email Was not sent a link!🤯, Please Try Again
        </Alert>
      );
    }
  };

  useEffect(() => {
    setEmail(email);
  }, [email]);

  console.log(email);

const LoginStateSess = ()=>{

  return (
    <LoginState
    session={session}
    />

  )

}






  if (session) {
    return (
      <>

        <Typography textAlign="center">User Signed In as:</Typography>
        <Button color="error">Do you Want to Sign Out?</Button>
        <LoginStateSess/>

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
            <Typography component="h4" variant="h6">
              With 1 time link.
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
                autoFocus
                value={email}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
                //CREDENTIALS SIGN IN WITH CSRF TOKENS
                onClick={(event) => {
                  event.preventDefault();
                  handleLogin(email);
                }}
                disabled={loading}
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
                  <span>{loading ? "Loading" : "Send magic link"}</span>
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


export const getServerSideProps = withPageAuth({ redirectTo: '/account' })