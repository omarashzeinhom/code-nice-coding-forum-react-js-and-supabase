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
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        OmarZeinhom AKA - ANDGOEDU
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Grid component="footer" sx={{ height: "10vh", width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Copyright />
      </BottomNavigation>
    </Grid>
  );
}
