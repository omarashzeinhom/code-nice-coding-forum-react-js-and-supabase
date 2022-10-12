import React from "react";
import Link from "next/link";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuIcon,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import AdbIcon from '@mui/icons-material/Adb';


const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNav = (event) => {
    setAnchorElNav(event?.currentTarget);
  };

  const handleCloseNav = () => {
    setAnchorElNav(null);
  };

const handleOpenUserSettings = (event) => {
  setAnchorElUser(event?.currentTarget);
}

const handleCloseUserSettings = () => {
  setAnchorElUser(null);
};


  return (
    
    <AppBar positon="static">
<Container maxWidth="xl">
  <Toolbar disableGutters>
  <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

  {pages.map((page, pageIndex) => (
          <MenuItem key={page + pageIndex} onClick={handleCloseNav}>
            <Link href={page?.pageLink}>{page?.pageLabel}</Link>
          </MenuItem>
        ))}

  </Toolbar>



</Container>







    </AppBar>
      
      
  );
};

export default Nav;

const pages = [
  {
    // Object 1
    pageLink: "/",
    pageLabel: "Home",
  },

  {
    // Object 1
    pageLink: "/questions",
    pageLabel: "Questions",
  },

  {
    // Object 1
    pageLink: "/login",
    pageLabel: "Login",
    // ADD IF STATEMENT TO CHECK IF USER IS LOGGED OR NOR  { user != null && ()}
  },
];

const userSettings = [
  {
    settingLink: "/profile",
    settingLabel: "Profile",
  },
  {
    settingLink: "/account",
    settingLabel: "Account",
  },
  {
    settingLink: "/dashboard",
    settingLabel: "Dashboard",
  },
  {
    settingLink: "/LogOut",
    settingLabel: "LogOut",
  },
];
