import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "30vh",
    margin: "0 auto",
    padding: "30px 50px",
    background: theme.palette.background.card,
  },
  buttonLink: {
    fontSize: "1.2rem",
    border: `2px solid ${theme.palette.cases.confirmed}`,
    background: theme.palette.background.white,
    color: theme.palette.text.primary,
    marginTop: 10,
    padding: "15px 20px",
    borderRadius: "5px",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.cases.confirmed,
    },
  },
}));

const HelpfulLinks = () => {
  const classes = useStyles();

  const handleSelfAssessmentClick = (event) => {
    event.preventDefault();
    window.open("https://ca.thrive.health/covid19/en", "_blank");
  };
  return (
    <>
      <div className={classes.root}>
        <Typography variant="h5">Think you might have COVID-19?</Typography>
        <Link
          component="button"
          rel="noreferrer"
          onClick={handleSelfAssessmentClick}
          className={classes.buttonLink}
        >
          Take a self-assessment
        </Link>
      </div>
    </>
  );
};

export default HelpfulLinks;
