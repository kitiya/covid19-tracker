import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: "space-between"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography varient="h1">Covid-19</Typography>
        <Button>
          <Typography varient="h6" color="secondary">
            About
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
