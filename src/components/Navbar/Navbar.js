import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
}));

const Navbar = ({ total_items }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={logo}
              alt="logo"
              height="25px"
              className={classes.image}
            />
            {"   "}
            e4e Store{" "}
          </Typography>
          {location.pathname === "/" && (
            <>
              <div className={classes.grow}></div>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={total_items} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
