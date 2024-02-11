import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Security Guards", link: "/organization" },
    { text: "Security Services", link: "/securityareas" },
    { text: "Dashboard", link: "/dashboard" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          minHeight: { xs: "90px", lg: "110px" },
        }}
      >
        <Toolbar>
          {/* Menu Icon Button */}

          {/* Logo */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              maxWidth: "40%",
              maxHeight: "40%",
            }}
          >
            <img
              src="/securityLogo.png"
              alt="Logo"
              style={{
                width: "150px", // Ensures the image width adjusts based on its container
                height: "150px", // Maintains the aspect ratio

                objectFit: "contain", // Sets the maximum width to 100% of the container width
              }}
            />
          </Box>

          {/* Drawer for Links and Buttons */}
          <Hidden mdUp>
            <Drawer
              anchor="left"
              open={isMenuOpen}
              onClose={toggleMenu}
              PaperProps={{
                sx: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#142032",
                },
              }}
            >
              <IconButton
                onClick={toggleMenu}
                sx={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  m: 1,
                  color: "white",
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box>
                <img src="/logo.png" alt="Logo" sx={{ flexGrow: 1 }} />
              </Box>
              <List
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {menuItems.map((item) => (
                  <ListItem key={item.text} onClick={toggleMenu}>
                    <Link href={item.link} sx={{ textDecoration: "none" }}>
                      <ListItemText
                        primary={item.text}
                        style={{
                          textDecoration: "none",
                          color: "white",
                        }}
                      />
                    </Link>
                  </ListItem>
                ))}
                <ListItem onClick={toggleMenu}>
                  <Button sx={{ width: "150px" }} variant="contained">
                    Login
                  </Button>
                </ListItem>
                <ListItem onClick={toggleMenu}>
                  <Button sx={{ width: "150px" }} variant="contained">
                    Register
                  </Button>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>

          {/* Links and Buttons */}
          <Hidden smDown>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                fontSize={18}
                component="div"
                sx={{
                  "& > *": { mr: "20px" },
                  fontWeight: 600,
                  display: "flex",
                  gap: 2,
                }}
              >
                {menuItems.map((item) => (
                  <Link
                    href={item.link}
                    sx={{
                      color: "#192d5c",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#3766a3 ", // Light blue color
                      },
                    }}
                  >
                    {item.text}
                  </Link>
                ))}
              </Typography>
            </Box>
          </Hidden>
          <Hidden smDown>
            <Box>
              <Button
                onClick={() => {
                  handleLoginClick();
                }}
                variant="contained"
                style={{ marginRight: "10px" }}
              >
                Login
              </Button>
              <Button variant="contained">Register</Button>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
