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
  AdbIcon,
} from "@mui/material";

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNav = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNav = (event) => {
    setAnchorElNav(null);
  };

  return (
    <nav>
      <ul>
        {pages.map((page, pageIndex) => (
          <MenuItem key={page + pageIndex} onClick={handleCloseNav}>
            <Link href={page?.pageLink}>{page?.pageLabel}</Link>
          </MenuItem>
        ))}
      </ul>
    </nav>
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
