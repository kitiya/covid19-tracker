import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: "space-between"
  },
  navlink: {
    textDecoration: "none"
  },
  activeNavLink: {
    color: "#948DFF"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography varient="highlight">COVID-19 TRACKER</Typography>
        <div>
          <Button>
            <Typography
              varient="h6"
              color="secondary"
              component={NavLink}
              exact
              to="/"
              className={classes.navlink}
              activeClassName={classes.activeNavLink}
            >
              Home
            </Typography>
          </Button>
          <Button>
            <Typography
              varient="h6"
              color="secondary"
              component={NavLink}
              to="/about"
              className={classes.navlink}
              activeClassName={classes.activeNavLink}
            >
              About
            </Typography>
          </Button>
          <Button>
            <Typography
              varient="h6"
              color="secondary"
              component={NavLink}
              to="/mui-sandbox"
              className={classes.navlink}
              activeClassName={classes.activeNavLink}
            >
              MUI-Sandbox
            </Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
