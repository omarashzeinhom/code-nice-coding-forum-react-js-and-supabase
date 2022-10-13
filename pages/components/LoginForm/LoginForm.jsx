import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";

import {
  FormControl,
  Input,
  Button,
  Divider,
  FormGroup,
  Container,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import GitHubIcon from "@mui/icons-material/GitHub";

import credentialSignIn from "../../auth/cred-signin";

export default function LoginForm({ providers }) {
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState();

  const { data: session } = useSession();

  const handleLogin = () => {};

  useEffect(() => {
    setEmail(email);
    setPassword(password);
  }, [email, password]);

  console.log(email, password);
  if (session) {
    return (
      <>
        <Typography textAlign="center">
          User Signed In as: {session?.user?.email}
        </Typography>
        <Button color="error" onClick={() => signOut()}>
          Do you Want to Sign Out?
        </Button>
      </>
    );
  } else {
    return (
      <Container fixed maxWidth="sm">
        <FormGroup>
          <h1> Login In Here!</h1>

          <FormControl>
            <label>Email</label>
            <Input
              name="cx_email"
              type="text"
              color={"primary"}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>

          <Divider color={"primary"} />
          <FormControl>
            <label>Password</label>
            <Input
              name="cx_password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <IconButton
              aria-label="fingerprint"
              color="primary"
              type="submit"
              variant="outlined"
              //CREDENTIALS SIGN IN WITH CSRF TOKENS
              onClick={() =>
                signIn("credentials", {
                  username: `${email}`,
                  password: `${ password}`,
                })
              }
            >
              <Fingerprint />
              Login
            </IconButton>
            <IconButton>
              Login with
              <GitHubIcon />
            </IconButton>
          </FormControl>
        </FormGroup>
      </Container>
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
