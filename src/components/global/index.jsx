import React, { useState, useEffect } from "react";
import axios from "axios";

import GlobalSummary from "./global-summary";
import GlobalTable from "./global-table";
import GlobalChart from "./global-charts";
import GlobalSeries from "./global-series";
import CovidCurves from "./covid-curves";
import { SimpleCard } from "../../components/cards/simple-card";

import { Grid } from "@material-ui/core";

const Global = () => {
  const [global, setGlobal] = useState([]);

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
      <Grid container style={{ padding: "0 25px" }}>
        <Grid item xs={12} align="center" style={{ paddingTop: 30 }}>
          <GlobalSummary />
        </Grid>
        <Grid item xs={12} align="center" style={{ paddingTop: 30 }}>
          <SimpleCard title="Global Cumulative Cases">
            <GlobalSeries />
          </SimpleCard>
        </Grid>
        <Grid item xs={12} align="center" style={{ paddingTop: 30 }}>
          <SimpleCard title="Comparing the coronavirus curve">
            <CovidCurves />
          </SimpleCard>
        </Grid>
        <Grid item xs={12} align="center" style={{ paddingTop: 30 }}>
          <SimpleCard title="Cumulative Confirmed Cases by Country">
            <GlobalChart data={global.slice(0, 20)} />
          </SimpleCard>
        </Grid>
        <Grid item xs={12} align="center" style={{ paddingTop: 30 }}>
          <SimpleCard title="Cases by Country">
            <GlobalTable global={global} />
          </SimpleCard>
        </Grid>
      </Grid>
    </>
  );
};
export default Global;
