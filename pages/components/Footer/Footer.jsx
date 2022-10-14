import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Link,
  Typography,
} from "@mui/material";

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="primary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://omarashrafzeinhom.netlify.app/">
        OmarZeinhom AKA - ANDGOEDU
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {

  return (
    <Grid component="footer" sx={{ height: "10vh", width: "100%" }}>
      <hr/>
              <Copyright />

      
    </Grid>
  );
}
