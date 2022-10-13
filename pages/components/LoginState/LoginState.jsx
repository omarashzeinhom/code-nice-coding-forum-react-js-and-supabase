import React from "react";
import { Typography, MenuItem, Button, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

export default function LoginState() {


  if (!"test") {
    return (
      <>
        <MenuItem>
          <Typography textAlign="center">
            User Signed In as: 
          </Typography>
          <IconButton color="error" >
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
