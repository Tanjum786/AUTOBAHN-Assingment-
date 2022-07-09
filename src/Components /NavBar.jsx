import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} m="-0.5rem" position="sticky" top="0">
        <AppBar position="sticky" style={{ backgroundColor: "#1a237e" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography
              variant="h6"
              component="div"
              p="1rem"
              fontSize="1.5rem"
              sx={{ flexGrow: 1 }}
            >
              SHOWING-ALLPOSTS
            </Typography>
            <Typography>Dashboard</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
