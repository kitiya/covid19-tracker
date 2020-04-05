import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@material-ui/core";

const GlobalSummary = () => {
  const [globalSummary, setGlobalSummary] = useState([]);

  // fetch global summary
  useEffect(() => {
    const fetchGlobalSummary = () => {
      axios.get(`https://corona.lmao.ninja/all`).then((response) => {
        setGlobalSummary(response.data);
      });
      // console.log(globalSummary);
    };
    fetchGlobalSummary();
  }, []);

  return (
    <Grid container>
      <Grid item md={6}></Grid>
      <Grid item md={6} align="left">
        <Typography variant="h3">Tracking the coronavirus</Typography>
        <Typography variant="h6" gutterBottom>
          Stay informed with the latest data on the number of COVID-19 cases.
        </Typography>
        <Typography variant="body1" gutterBottom>
          While the numbers can tell you a lot about the coronavirus, the case
          numbers only tell part of the story.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Areas that test a high number of people will ultimately detect more
          cases than those that are not doing as much testing. There may also be
          surges in the number of cases when there are a high number of tests
          done in a short time frame.
        </Typography>
        <Typography variant="body1">
          The same is true for Canada's provinces and territories. Different
          rates in testing and changes in how regions are recording results can
          result in higher numbers for some regions over others.
        </Typography>
      </Grid>
    </Grid>
  );
};
export default GlobalSummary;
