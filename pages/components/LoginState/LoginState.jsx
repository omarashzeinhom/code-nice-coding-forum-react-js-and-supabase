import React, { useState, useEffect } from "react";
import { Typography, MenuItem, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { supabase } from "../../../utils/supabaseClient";

export default function LoginState() {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function getInitialSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // only update the react state if the component is still mounted
      if (mounted) {
        if (session) {
          setSession(session);
        }

        setIsLoading(false);
      }
    }

    getInitialSession();

    const { subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      mounted = false;

      subscription?.unsubscribe();
    };
  }, []);

  return (
    <>
      {!session ? (
        <MenuItem>
          <IconButton color="success" href="/login">
            Log In
            <LoginIcon />
          </IconButton>
        </MenuItem>
      ) : (
        <MenuItem key={session?.user?.id} session={session}>
          <Typography textAlign="center">
            User Signed In as{session?.user?.name}:
          </Typography>
          <IconButton color="error">
            Sign Out
            <LogoutIcon />
          </IconButton>
        </MenuItem>
      )}
    </>
  );
}
