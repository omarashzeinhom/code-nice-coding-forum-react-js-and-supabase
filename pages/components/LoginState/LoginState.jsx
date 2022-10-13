import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Typography, MenuItem, Button, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

export default function LoginState() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <MenuItem key={session}>
          <Typography textAlign="center">
            User Signed In as: {session?.user?.email}
          </Typography>
          <IconButton color="error" onClick={() => signOut()}>
            Sign Out
            <LogoutIcon />
          </IconButton>
        </MenuItem>
      </>
    );
  } else {
    return (
      <>
        <MenuItem>
          <IconButton color="success" href="/login">
            Log In
            <LoginIcon />
          </IconButton>
        </MenuItem>
      </>
    );
  }
}
