import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: 50,
      height: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: theme.palette.background.dark,
      "& *": {
        color: theme.palette.text.light,
      },
    },
    container: {
      textAlign: "center",
    },
    image: {
      marginTop: 20,
      height: "30vh",
    },
  };
});

const Footer = () => {
  const classes = useStyles();
  const urlPath = process.env.PUBLIC_URL;
  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h5">
          WE STAND WITH EVERYONE FIGHTING ON THE FRONTLINES.
          <br />
          Thank you for your service.
        </Typography>
        <img
          alt=""
          src={`${urlPath}/images/svg/super_thank_you.svg`}
          className={classes.image}
        />
      </Container>
    </footer>
  );
};

export default Footer;
