import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../../../lib/supabaseClient";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Divider,
} from "@mui/material";

import { LoginState } from "../index";

import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import MenuIcon from "@mui/icons-material/Menu";

interface Page {
  pageLink: string;
  pageLabel: string;
}

interface UserSetting {
  settingLink: string;
  settingLabel: string;
}

interface NavProps {
  url?: any;
  size?: any;
  session?: any;
}

export default function Nav({url, size, session}: NavProps) {
  //GUI ANCHORS
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  

 // OPEN NAV
 const handleOpenNav = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorElNav(event.currentTarget);
};

  // CLOSE NAV
  const handleCloseNav = () => {
    setAnchorElNav(null);
  };

  //OPEN USER SETTINGS
  const handleOpenUserSettings = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  // CLOSE USER SETTINGS
  const handleCloseUserSettings = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IntegrationInstructionsIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
                <MenuItem onClick={handleCloseNav} key={ pageIndex}>
                  <Link href={page?.pageLink}>
                    <h1>{page?.pageLabel}</h1>
                  </Link>
                </MenuItem>
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
            href="/"
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NiceCode
          </Typography>

          <Box
  sx={{
    flexGrow: 1,
    letterSpacing: 4,
    m: 1,
    display: { xs: "none", md: "flex" },
  }}
>
  {/**PAGES */}
  {pages.map((page, pageIndex) => (
    <React.Fragment key={pageIndex}>
      <Link href={page?.pageLink}>
        <Typography
          variant="h6"
          component="div"
          sx={{ cursor: "pointer", mx: 2 }}
        >
          {page.pageLabel}
        </Typography>
      </Link>
      {/* Add space between tags */}
      {pageIndex < pages.length - 1 && (
        <Typography variant="h6" component="div" sx={{ mx: 2 }}>
          {" "}
          {/* Add a space here */}
        </Typography>
      )}
    </React.Fragment>
  ))}
</Box>

          {/**USER SETTINGS */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserSettings} sx={{ p: 0 }}>
                {/**TODO ADD USER AVATAR src={} and alt DYNAMICALLY From SUPABASE */}
                <Avatar alt="O" src={""} />
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
              {userSettings.map((setting, settingsIndex) => (
                <Link href={setting?.settingLink} key={settingsIndex}>
                  <MenuItem>
                    <Typography textAlign="center">
                      {setting?.settingLabel}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              <Divider />
              {/**LOGIN STATE */}
              <LoginState />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


const pages: Page[] = [
  {
    pageLink: "/questions",
    pageLabel: "Questions",
  },
  {
    pageLink: "/tags",
    pageLabel: "Tags",
  },
];

const userSettings: UserSetting[] = [
  {
    settingLink: "/addquestion",
    settingLabel: "Add Question",
  },
  {
    settingLink: "/account",
    settingLabel: "Account",
  },
];
