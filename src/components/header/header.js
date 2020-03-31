import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: "space-between"
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    color: "white"
  },
  logo: {
    height: 50,
    marginRight: 10
  },
  navlink: {
    textDecoration: "none"
  },
  activeNavLink: {
    color: "#948DFF"
  }
}));

const MenuText = ({ path, text, classes }) => {
  return (
    <Typography
      varient="h6"
      color="secondary"
      component={NavLink}
      exact
      to={path}
      className={classes.navlink}
      activeClassName={classes.activeNavLink}
    >
      {text}
    </Typography>
  );
};
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleSandboxClick = event => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleSandboxClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography
          varient="h6"
          component={NavLink}
          exact
          to="/"
          className={classes.navlink}
        >
          <div className={classes.logoWrapper}>
            <img
              className={classes.logo}
              alt=""
              src={`${process.env.PUBLIC_URL}/favicon.png`}
            />
            <Typography display="inline" varient="highlight">
              COVID-19 TRACKER
            </Typography>
          </div>
        </Typography>

        <div>
          <Button>
            <MenuText path="/" text="Home" classes={classes}></MenuText>
          </Button>
          <Button>
            <MenuText path="/about" text="About" classes={classes}></MenuText>
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleSandboxClick}
          >
            <Typography varient="h6" color="secondary">
              Sandbox
            </Typography>
          </Button>
          <Menu
            id="sandbox-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleSandboxClose}
            color="secondary"
          >
            <MenuItem onClose={handleSandboxClose}>
              <MenuText
                path="/mui-sandbox"
                text="Material UI"
                classes={classes}
              ></MenuText>
            </MenuItem>
            <MenuItem onClose={handleSandboxClose}>
              <MenuText
                path="/rechart-sandbox"
                text="Rechart"
                classes={classes}
              ></MenuText>
            </MenuItem>
            <MenuItem onClose={handleSandboxClose}>
              <MenuText
                path="/rapid-api"
                text="Rapid API"
                classes={classes}
              ></MenuText>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
