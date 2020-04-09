import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Banner from "../../components/banner/banner";
import Faq from "./faq";
import HelpfulLinks from "./helpful-links";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  const urlPath = process.env.PUBLIC_URL;
  return (
    <>
      <Banner />
      <HelpfulLinks />
      <Faq />
    </>
  );
};

export default AboutPage;
