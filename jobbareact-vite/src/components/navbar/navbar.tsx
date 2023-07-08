import JobbaLogo from "../logo/logo";
import "./navbar.scss";
import EmployerLoginBtn from "../employerlogin";
import { Anchor, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import LoginButton from "./loginbtn";
import LogOutButton from "./logoutbtn";
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
  { title: "Register", url: "/register" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function NavigationBar({ title }: { title: string }) {
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
            <AuthenticatedTemplate>
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
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
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
                    variant="outlined"
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
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key="Login" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Applicant</Typography>
                  </MenuItem>
                  <MenuItem key="LoginAsEmployer" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Employer</Typography>
                  </MenuItem>
                </Menu>
                <Drawer
                  anchor="left"
                  open={loginDrawerState}
                  onClose={toggleLoginMenu(false)}
                >
                  <List>
                    <Toolbar>
                      <Typography>Login As</Typography>
                    </Toolbar>
                    <Divider />

                    <ListItem key="Applicant" disablePadding>
                      <ListItemButton>
                        <ListItemText
                          primary="Applicant"
                          onClick={handleCloseNavMenu}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem key="Employer" disablePadding>
                      <ListItemButton>
                        <ListItemText
                          primary="Employer"
                          onClick={handleCloseNavMenu}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Drawer>
              </Box>
            </UnauthenticatedTemplate>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Navbar collapseOnSelect expand="lg" className='border-bottom'>
                <Container>
                    <Navbar.Brand href="/"><JobbaLogo /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-false`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton className="border-bottom">
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`} >
                                <JobbaLogo />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                                <NavLink className="nav-link" to="/findjobs">Find Jobs</NavLink>
                                <UnauthenticatedTemplate>
                                    <NavLink className="nav-link" to="/register">Register</NavLink>
                                    <LoginButton></LoginButton>
                                    <EmployerLoginBtn />
                                </UnauthenticatedTemplate>
                                <AuthenticatedTemplate>
                                    <LogOutButton/>
                                </AuthenticatedTemplate>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar> */}
    </>
  );
}
