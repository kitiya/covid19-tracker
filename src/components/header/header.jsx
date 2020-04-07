import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => {
  return {
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
      textDecoration: "none",
      color: "white"
    },
    activeNavLink: {
      color: theme.palette.text.activeNavLink
    },
    dropdownNavLink: {
      textDecoration: "none",
      color: "black"
    }
  };
});

const MenuText = ({ path, text, classes, dropdown }) => {
  return (
    <Typography
      varient="h6"
      component={NavLink}
      exact
      to={path}
      className={dropdown ? classes.dropdownNavLink : classes.navlink}
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
            <MenuText path="/canada" text="Canada" classes={classes}></MenuText>
          </Button>
          <Button>
            <MenuText path="/about" text="About" classes={classes}></MenuText>
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleSandboxClick}
          >
            <Typography varient="h6" className={classes.navlink}>
              Sandbox
            </Typography>
          </Button>
          <Menu
            id="sandbox-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleSandboxClose}
          >
            <MenuItem onClose={handleSandboxClose}>
              <MenuText
                path="/mui-sandbox"
                text="Material UI"
                classes={classes}
                dropdown={true}
              ></MenuText>
            </MenuItem>
            <MenuItem onClose={handleSandboxClose}>
              <MenuText
                path="/rechart-sandbox"
                text="Rechart"
                classes={classes}
                dropdown={true}
              ></MenuText>
            </MenuItem>
            <MenuItem onClose={handleSandboxClose}>
              <MenuText
                path="/rapid-api"
                text="Rapid API"
                classes={classes}
                dropdown={true}
              ></MenuText>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
