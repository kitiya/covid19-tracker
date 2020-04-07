import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import GlobalSummary from "./global-summary";
import CountriesTable from "./countries-table";
import CountriesChart from "./countries-chart";
import GlobalSeries from "./global-series";
import CovidCurves from "./covid-curves";
import { SimpleCard } from "../../components/cards/simple-card";

const useStyles = makeStyles((theme) => {
  return {
    gridContainer: { padding: "0 25px" },
    gridContainerItem: {
      justifyContent: "center",
      alignItems: "stretch",
    },
    gridItem: { paddingTop: 30, width: "100%" },
  };
});

const Global = () => {
  const [global, setGlobal] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    const fetchCountrySummary = () => {
      axios
        .get("https://corona.lmao.ninja/countries?sort=cases")
        .then((response) => setGlobal(response.data));
    };

    fetchCountrySummary();
  }, []);

  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} align="center" className={classes.gridItem}>
          <GlobalSummary theme={theme} />
        </Grid>
        <Grid item xs={12} align="center" className={classes.gridItem}>
          <SimpleCard title="Global Cumulative Cases">
            <GlobalSeries />
          </SimpleCard>
        </Grid>
        <Grid item xs={12} align="center" className={classes.gridItem}>
          <Grid container spacing={2} className={classes.gridContainerItem}>
            <Grid item md={6} align="center" className={classes.gridItem}>
              <SimpleCard title="Comparing the coronavirus curve">
                <CovidCurves />
              </SimpleCard>
            </Grid>
            <Grid item md={6} align="center" className={classes.gridItem}>
              <SimpleCard title="Cumulative Confirmed Cases by Country">
                <CountriesChart data={global.slice(0, 15)} theme={theme} />
              </SimpleCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} align="center" className={classes.gridItem}>
          <SimpleCard title="Cases by Country">
            <CountriesTable global={global} />
          </SimpleCard>
        </Grid>
      </Grid>
    </>
  );
};
export default Global;
