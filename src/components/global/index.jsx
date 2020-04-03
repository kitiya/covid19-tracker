import React, { useState, useEffect } from "react";
import axios from "axios";

import GlobalTable from "./global-table";
import GlobalChart from "./global-charts";
import GlobalSeries from "./global-series";
import CountriesSeries from "./countries-series";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  // console.log(theme);

  return {
    flagIcon: {
      maxWidth: 30,
      marginRight: 10
    },
    table: {
      "& th": {
        textAlign: "center",
        background: "#1e2023",
        color: "white",
        fontSize: 16
      },
      "& td": {
        textAlign: "center",
        color: theme.palette.primaryText.main
      }
    },
    imgWrapperCell: {
      display: "flex",
      alignItems: "center"
    }
  };
});

const Global = () => {
  const [global, setGlobal] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchCountrySummary = () => {
      axios
        .get("https://corona.lmao.ninja/countries?sort=cases")
        .then(response => setGlobal(response.data.slice(0, 20)));
    };

    fetchCountrySummary();
  }, []);

  // console.log(global);
  return (
    <>
      <Grid container style={{ padding: "0 25px" }}>
        <Grid item xs={12} align="center" style={{ paddingTop: 30 }}>
          <Card>
            <CardHeader
              title="Global Cumulative Cases"
              style={{ background: "#fafafa" }}
              align="left"
            ></CardHeader>
            <CardContent>
              <GlobalSeries />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} align="center" style={{ paddingTop: 30 }}>
          <Card>
            <CardHeader
              title="Comparing the coronavirus curve"
              style={{ background: "#fafafa" }}
              align="left"
            ></CardHeader>
            <CardContent>
              <CountriesSeries />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} align="center" style={{ paddingTop: 30 }}>
          <Card>
            <CardHeader
              title="Cumulative Confirmed Cases by Country"
              style={{ background: "#fafafa" }}
              align="left"
            ></CardHeader>
            <CardContent>
              <GlobalChart data={global} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} align="center" style={{ paddingTop: 30 }}>
          <Card>
            <CardHeader
              title="Cases by Country"
              style={{ background: "#fafafa" }}
              align="left"
            ></CardHeader>
            <CardContent>
              <GlobalTable global={global} classes={classes} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Global;
