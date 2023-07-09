import JobbaLogo from "../logo/logo";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const pages = [
  { title: "Home", url: "/" },
  { title: "Find Jobs", url: "/findjobs" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

//Temporary while we setup the authentication.
enum LoginType {
  Default = 0,
  Jobseeker,
  Employer,
}

export default function NavigationBar({
  options = LoginType.Default,
}: {
  options: any | undefined;
}) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [drawerMenuState, setDrawerMenuState] = React.useState(false);
  const [loginDrawerState, setloginDrawerState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
    };

  const toggleMenu =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      toggleDrawer(open);
      setDrawerMenuState(open);
    };

  const toggleLoginMenu =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      toggleDrawer(open);
      setloginDrawerState(open);
    };

  return (
    <>
      <AppBar position="sticky">
        <Container>
          <Toolbar disableGutters>
            <Box
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <JobbaLogo />
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              key="left"
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleMenu(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerMenuState}
                onClose={toggleMenu(false)}
              >
                <Toolbar />
                <Divider />
                {pages.map((page) => (
                  <ListItem key={page.title} disablePadding>
                    <ListItemButton component={Link} to={page.url}>
                      <ListItemText
                        primary={page.title}
                        onClick={toggleMenu(false)}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </Drawer>
            </Box>
            <Box
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
              }}
            >
              <JobbaLogo />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  component={Link}
                  to={page.url}
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
            {LoginType[options.LoginType] === LoginType.Jobseeker && (
              // <AuthenticatedTemplate>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
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
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              // </AuthenticatedTemplate>
            )}
            {LoginType[options.LoginType] === LoginType.Default && (
              <UnauthenticatedTemplate>
                <Box>
                  <Tooltip
                    title="Sign Up"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      flexGrow: 1,
                    }}
                  >
                    <Button
                      onClick={handleOpenUserMenu}
                      size="large"
                      aria-label="login-options"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      variant="outlined"
                      component={Link}
                      to="/signup"
                    >
                      Sign Up
                    </Button>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip
                    title="Login"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      flexGrow: 1,
                    }}
                  >
                    <Button
                      onClick={handleOpenUserMenu}
                      size="large"
                      aria-label="login-options"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      variant="text"
                      component={Link}
                      to="/login"
                    >
                      Login
                    </Button>
                  </Tooltip>
                  <Tooltip
                    title="Login"
                    sx={{
                      mr: 2,
                      display: { xs: "flex", md: "none" },
                      flexGrow: 1,
                    }}
                  >
                    <IconButton
                      onClick={toggleLoginMenu(true)}
                      size="large"
                      aria-label="login-options"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircleRoundedIcon />
                    </IconButton>
                  </Tooltip>
                  <Drawer
                    anchor="left"
                    open={loginDrawerState}
                    onClose={toggleLoginMenu(false)}
                  >
                    <List>
                      <Toolbar>
                        {/* <Typography>Login As</Typography> */}
                      </Toolbar>
                      <Divider />

                      <ListItem key="signup" disablePadding>
                        <ListItemButton component={Link} to="/signup">
                          <ListItemText
                            primary="Sign Up"
                            onClick={toggleLoginMenu(false)}
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem key="login" disablePadding>
                        <ListItemButton component={Link} to="/login">
                          <ListItemText
                            primary="Login"
                            onClick={toggleLoginMenu(false)}
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Drawer>
                </Box>
              </UnauthenticatedTemplate>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
