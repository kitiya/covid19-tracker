import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import { Grid } from "@material-ui/core";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend
} from "recharts";

const GlobalSeriesChart = ({ data }) => {
  // console.log(confirmed);

  function formatXAxis(tickItem) {
    // If using moment.js
    return moment(new Date(tickItem)).format("MMM D");
  }

  function formatTooltip(tickItem) {
    // If using moment.js
    return moment(new Date(tickItem)).format("MMM D, YYYY");
  }
  return (
    <Grid container>
      <Grid item lg>
        <LineChart width={800} height={400} data={data.confirmed}>
          <XAxis dataKey="date" tickFormatter={formatXAxis} fontSize={12} />
          <YAxis
            fontSize={12}
            tickFormatter={value => new Intl.NumberFormat("en").format(value)}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            formatter={value => new Intl.NumberFormat("en").format(value)}
            labelFormatter={formatTooltip}
          />
          <Legend />
          <Line
            name="Total Confirmed Cases"
            type="monotone"
            dataKey="cases"
            stroke="#8884d8"
            strokeWidth={3}
            activeDot={{ r: 3 }}
          />
        </LineChart>
      </Grid>
      <Grid item lg>
        <LineChart width={800} height={400} data={data.deaths}>
          <XAxis dataKey="date" tickFormatter={formatXAxis} fontSize={12} />
          <YAxis
            fontSize={12}
            tickFormatter={value => new Intl.NumberFormat("en").format(value)}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            formatter={value => new Intl.NumberFormat("en").format(value)}
            labelFormatter={formatTooltip}
          />
          <Legend />
          <Line
            name="Total Deaths"
            type="monotone"
            dataKey="cases"
            stroke="#8884d8"
            strokeWidth={3}
            activeDot={{ r: 3 }}
          />
        </LineChart>
      </Grid>
    </Grid>
  );
};
const GlobalSeries = () => {
  const [globalSeries, setGlobalSeries] = useState([]);
  // fetch global series
  useEffect(() => {
    const fetchGlobalSeries = () => {
      axios
        .get(`https://corona.lmao.ninja/v2/historical/all`)
        .then(response => {
          console.log(response.data);
          const caseData = response.data;

          let confirmedCases = Object.entries(caseData.cases).map(item => {
            return { date: item[0], cases: item[1] };
          });

          let recoveredCases = Object.entries(caseData.recovered).map(item => {
            return { date: item[0], cases: item[1] };
          });

          let deathCases = Object.entries(caseData.deaths).map(item => {
            return { date: item[0], cases: item[1] };
          });

          const cases = {
            confirmed: confirmedCases,
            recovered: recoveredCases,
            deaths: deathCases
          };
          setGlobalSeries(cases);
        })
        .catch(err => {
          console.log("[Fetch global series]", err);
        });
    };

    fetchGlobalSeries();
  }, []);

  return (
    <>
      <GlobalSeriesChart
        data={globalSeries}
        confirmed={globalSeries.confirmed}
        deaths={globalSeries.deaths}
      />
    </>
  );
};

export default GlobalSeries;
