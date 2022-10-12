import React from "react";
import Link from "next/link";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // OPEN NAV
  const handleOpenNav = (event) => {
    setAnchorElNav(event?.currentTarget);
  };
  // CLOSE NAV
  const handleCloseNav = () => {
    setAnchorElNav(null);
  };
  // OPEN USER SETTINGS
  const handleOpenUserSettings = (event) => {
    setAnchorElUser(event?.currentTarget);
  };
  // CLOSE USER SETTINGS
  const handleCloseUserSettings = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar positon="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IntegrationInstructionsIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CodeNice
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNav}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNav}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/**PAGES */}
              {pages.map((page, pageIndex) => (
                <Button onClick={handleCloseNav} key={page + pageIndex}>
                  <Link href={page?.pageLink}>
                    <h1>{page?.pageLabel}</h1>
                  </Link>
                </Button>
              ))}
            </Menu>
          </Box>

          <IntegrationInstructionsIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/**PAGES */}
            {pages.map((page, pageIndex) => (
              <Button onClick={handleCloseNav} key={page + pageIndex}>
                <Link href={page?.pageLink}>
                  <h1>{page?.pageLabel}</h1>
                </Link>
              </Button>
            ))}
          </Box>

          {/**USER SETTINGS */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserSettings} sx={{ p: 0 }}>
                <Avatar alt="OmarZeinhom" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserSettings}
            >
              {userSettings.map((setting, settingsIndex) => {
                <MenuItem key={settingsIndex + setting}>
                  <Link href={setting?.settingLink}>
                    <Typography textAlign="center">
                      {setting?.settingLabel}
                    </Typography>
                  </Link>
                  {setting?.settingLabel}
                </MenuItem>;
              })}
            </Menu>
          </Box>
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
