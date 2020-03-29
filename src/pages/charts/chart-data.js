import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Chart from "./chart";
import { Typography } from "@material-ui/core";

const ChartData = ({ country }) => {
  const [confirmedCases, setConfirmedCases] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      redirect: "follow",
      url: `https://api.covid19api.com/dayone/country/${country}/status/confirmed`
    })
      .then(response => {
        const data = response.data;

        const c = data.reduce((cases, item) => {
          cases = [
            ...cases,
            {
              country: item.Country,
              date: item.Date.slice(5, 10),
              confirmed: item.Cases
            }
          ];
          return cases;
        }, []);
        console.log("data", data);
        console.log("reduced data", c);
        setConfirmedCases(c);
      })
      .catch(err => {
        console.log(err);
      });
  }, [country]);

  return (
    <Grid item xs>
      <Paper>
        <Typography>{country.toUpperCase()}</Typography>
        <Chart data={confirmedCases} />
      </Paper>
    </Grid>
  );
};

export default ChartData;
